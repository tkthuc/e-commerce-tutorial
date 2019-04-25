package com.bookstore.authentication.exceptions;

public class InvalidEmailException extends Exception {
    public InvalidEmailException(String email) {
        super(email+ " does not have valid format");
    }
}
