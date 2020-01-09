package com.bookstore.authentication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;

public class User {

    @Id
    private String userId;
    private String username;
    private String firstName;
    private String lastName;
    private boolean enabled;
    private String gender;
    private String email;

    private String role;
    @JsonIgnore
    private String encrytedPassword;

    public User() {

    }

    public User(String username, String firstName, String lastName, //
                   boolean enabled, String gender, //
                   String email,String countryCode, String encrytedPassword) {
        super();
        this.userId = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.enabled = enabled;
        this.gender = gender;
        this.email = email;
        this.encrytedPassword = encrytedPassword;
    }

    public String getUserId() {
        return userId;
    }

    public User setUserId(String userId) {
        this.userId = userId;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public User setUsername(String userName) {
        this.username = userName;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public User setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public User setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public User setEnabled(boolean enabled) {
        this.enabled = enabled;
        return this;
    }

    public String getGender() {
        return gender;
    }

    public User setGender(String gender) {
        this.gender = gender;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getEncrytedPassword() {
        return encrytedPassword;
    }

    public User setEncrytedPassword(String encrytedPassword) {
        this.encrytedPassword = encrytedPassword;
        return this;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
