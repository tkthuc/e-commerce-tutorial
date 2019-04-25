package com.bookstore.authentication.validators;

import com.bookstore.authentication.exceptions.EmailNotAvailableException;
import com.bookstore.authentication.exceptions.InvalidEmailException;
import com.bookstore.authentication.exceptions.UsernameNotAvailableException;
import com.bookstore.authentication.forms.UserForm;
import com.bookstore.authentication.model.User;
import com.bookstore.authentication.repository.UserRepository;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.List;


@Component
public class UserFormValidator {


    @Autowired
    UserRepository userRepository;

    private EmailValidator emailValidator = EmailValidator.getInstance();




    public void validate(UserForm user) throws Exception {


        if(!emailValidator.isValid(user.getEmail())) {
            throw new InvalidEmailException(user.getEmail());
        }


        List<User> existingUserWithSameEmail = userRepository.findAllByEmail(user.getEmail());

        if(existingUserWithSameEmail.size() > 0) {
            throw new EmailNotAvailableException(user.getEmail());
        }

        List<User> existingUserWithSameUsername = userRepository.findAllByUserName(user.getUserName());
        if(existingUserWithSameEmail.size() > 0) {
            throw new UsernameNotAvailableException(user.getUserName());
        }

    }



}
