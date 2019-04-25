package com.bookstore.authentication.exceptions;

public class EmailNotAvailableException extends Exception{
    public EmailNotAvailableException(String email) {
        super(email+" is not available");
    }
}
