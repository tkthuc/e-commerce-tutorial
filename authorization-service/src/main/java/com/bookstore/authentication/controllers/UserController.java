package com.bookstore.authentication.controllers;

import com.bookstore.authentication.encoders.PasswordEncoder;
import com.bookstore.authentication.exceptions.AuthenticationException;
import com.bookstore.authentication.forms.UserForm;
import com.bookstore.authentication.model.User;
import com.bookstore.authentication.repository.UserRepository;
import com.bookstore.authentication.utils.JwtTokenUtil;
import com.bookstore.authentication.validators.UserFormValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Objects;


@RestController
@CrossOrigin
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserFormValidator userFormValidator;

    @Autowired
    @Qualifier("customJwtUserDetailsService")
    UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;



    @PostMapping(value="/register")
    public ResponseEntity<User> createUser(@RequestBody UserForm userForm) throws Exception {

        userFormValidator.validate(userForm);
        User user = new User();
        user.setEncrytedPassword(passwordEncoder.encode(userForm.getPassword()))
                .setEmail(userForm.getEmail())
                .setUsername(userForm.getUsername())
                .setFirstName(userForm.getFirstName())
                .setLastName(userForm.getLastName())
                .setGender(userForm.getGender());
        if(userForm.getRole() == null) {
               user.setRole("user");
        }

        User createdUser = userRepository.save(user);
        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }

    @GetMapping(value="/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return new ResponseEntity<>(userRepository.findByUserId(id),HttpStatus.OK);
    }

    @GetMapping(value="/users")
    public ResponseEntity<List<User>> getUsers() {
        return new ResponseEntity<>(userRepository.findAll(),HttpStatus.OK);
    }


    @PostMapping(value = "${jwt.get.token.uri}")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody UserForm authenticationRequest, HttpServletResponse response)
            throws AuthenticationException {

        logger.info("Starting to debug user "+authenticationRequest.getEmail());
        authenticate(authenticationRequest.getEmail(), authenticationRequest.getPassword());


        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getEmail());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return new ResponseEntity<>(token, HttpStatus.OK);

    }

    private void authenticate(String username, String password) {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            logger.info("USER_DISABLED");
            throw new AuthenticationException("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            logger.info("INVALID_CREDENTIALS");
            throw new AuthenticationException("INVALID_CREDENTIALS", e);
        }
    }

}
