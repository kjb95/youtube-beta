package com.kjb95.backend.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/api/test")
    public String getSpring(){
        return "spring!!!";
    }

    @PostMapping("/api/test2")
    public String getObj(@RequestBody Map<String,Object> test) {
        System.out.println("test name: " + test.get("name"));
        System.out.println("test age: " + test.get("age"));
        return "";
    }
}