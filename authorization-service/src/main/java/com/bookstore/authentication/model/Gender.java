package com.bookstore.authentication.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.Map;

public enum Gender {
    @JsonProperty("M")
    MALE("M"),
    @JsonProperty("F")
    FEMALE("F"),
    @JsonProperty("U")
    UNKNOWN("U");

    private static Map<String, Gender> map = new HashMap<>();

    static {
        for( Gender gender : values()) {
            map.put(gender.code, gender);
        }
    }

    private String code;

    Gender(String code) {
        this.code = code;
    }

    static Gender getGender(String code) {
        return map.getOrDefault(code, null);
    }
}
