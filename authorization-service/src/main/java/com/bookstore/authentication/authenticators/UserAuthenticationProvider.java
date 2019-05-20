package com.bookstore.authentication.authenticators;

import com.bookstore.authentication.encoders.PasswordEncoder;
import com.bookstore.authentication.model.User;
import com.bookstore.authentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String password = authentication.getCredentials().toString();

        List<User> users = userRepository.findAllByEmail(email);

        if(users.size() > 0 && encoder.matches(password, users.get(0).getEncrytedPassword())) {
            return new UsernamePasswordAuthenticationToken(email, password, new ArrayList<>());
        }

        throw new BadCredentialsException("Authentication failed");
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return (UsernamePasswordAuthenticationToken.class
                .isAssignableFrom(aClass));
    }
}
