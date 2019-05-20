package com.bookstore.authentication.controllers;

import com.bookstore.authentication.encoders.PasswordEncoder;
import com.bookstore.authentication.forms.UserForm;
import com.bookstore.authentication.model.User;
import com.bookstore.authentication.repository.UserRepository;
import com.bookstore.authentication.validators.UserFormValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserFormValidator userFormValidator;


    @PostMapping(value="/user")
    public ResponseEntity<User> createUser(@RequestBody UserForm userForm) throws Exception {

        userFormValidator.validate(userForm);
        User user = new User();
        user.setEncrytedPassword(passwordEncoder.encode(userForm.getPassword()))
                .setEmail(userForm.getEmail())
                .setUsername(userForm.getUsername())
                .setFirstName(userForm.getFirstName())
                .setLastName(userForm.getLastName())
                .setGender(userForm.getGender());

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
}
