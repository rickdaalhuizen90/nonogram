package com.kdg.nonogram.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("login")
    public static String login(@RequestParam(value = "username", defaultValue = "") String username)
    {
        return String.format("Login..");
    }
}
