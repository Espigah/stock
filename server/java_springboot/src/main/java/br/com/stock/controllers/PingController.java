package br.com.stock.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @RequestMapping("/ping/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}