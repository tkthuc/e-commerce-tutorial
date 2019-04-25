package com.bookstore.authentication.exceptions;

public class UsernameNotAvailableException extends Exception {
    public UsernameNotAvailableException(String username) {
        super(username+" is already taken. Please select another one");
    }
}
