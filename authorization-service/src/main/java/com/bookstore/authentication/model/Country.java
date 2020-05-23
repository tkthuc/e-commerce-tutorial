package com.bookstore.authentication.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Country {

    private String countryCode;
    private String countryName;

    public Country(String countryCode, String countryName) {
        this.countryCode = countryCode;
        this.countryName = countryName;
    }

}
