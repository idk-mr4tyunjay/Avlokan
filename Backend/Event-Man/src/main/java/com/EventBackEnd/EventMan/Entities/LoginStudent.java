package com.EventBackEnd.EventMan.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginStudent {
    private String email;
    private String password;
}
