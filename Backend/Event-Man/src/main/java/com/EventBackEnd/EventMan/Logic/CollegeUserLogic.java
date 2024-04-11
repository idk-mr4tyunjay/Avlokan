package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.College_user;
import com.EventBackEnd.EventMan.Repository.CollegeUserRepo;
import com.EventBackEnd.EventMan.Security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CollegeUserLogic {
    @Autowired
    private CollegeUserRepo collegeUserRepo;



    public College_user user(College_user user){
        BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
        String cryptPass = crypt.encode(user.getPassword());
        user.setPassword(cryptPass);
        return collegeUserRepo.save(user);
    }
}
