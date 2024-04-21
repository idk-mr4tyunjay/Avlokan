package com.EventBackEnd.EventMan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
//@EnableAutoConfiguration(exclude = {SecurityAutoConfiguration.class})
public class EventManApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventManApplication.class, args);
		System.out.println("Server is Started......");
	}

}
