package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.College_user;
import com.EventBackEnd.EventMan.Entities.LoginStudent;
import com.EventBackEnd.EventMan.Repository.CollegeUserRepo;
import com.EventBackEnd.EventMan.Security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CollegeUserLogic {
    @Autowired
    private CollegeUserRepo collegeUserRepo;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

//    public ResponseEntity<String> authentication(LoginStudent loginStudent) throws Exception{
//        BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
//        Optional<College_user> isUser = collegeUserRepo.findByEmail(loginStudent.getEmail());
//
//        if(isUser.isPresent()){
//            College_user user = isUser.get();
//            if(crypt.matches(loginStudent.getPassword(), user.getPassword())){
//                return ResponseEntity.ok().body("{\"message\": \"Successfully logged in\", \"email\": \"" + loginStudent.getEmail() + "\"}");
//            }
//        }
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Unauthorized\"}");
//    }

    public ResponseEntity<String> authentication(LoginStudent loginStudent) throws Exception{
        try{
            userDetailsService.loadUserByUsername(loginStudent.getEmail());
            return ResponseEntity.ok().body("{\"message\": \"Successfully logged in\", \"email\": \"" + loginStudent.getEmail() + "\"}");

        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Unauthorized\"}");
        }
    }


    public College_user addCollegeStudent(College_user user){
        String cryptPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(cryptPass);
        return collegeUserRepo.save(user);
    }
}
