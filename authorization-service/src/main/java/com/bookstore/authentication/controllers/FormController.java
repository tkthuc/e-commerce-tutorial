package com.bookstore.authentication.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FormController {

    @GetMapping(value = {"login","signup","/"})
    public String index() {
        return "index";
    }

}
