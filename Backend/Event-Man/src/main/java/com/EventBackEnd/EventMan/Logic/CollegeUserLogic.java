package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.College_user;
import com.EventBackEnd.EventMan.Entities.LoginStudent;
import com.EventBackEnd.EventMan.Repository.CollegeUserRepo;
import com.EventBackEnd.EventMan.Security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CollegeUserLogic {
    @Autowired
    private CollegeUserRepo collegeUserRepo;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public ResponseEntity<String> authentication(LoginStudent loginStudent) throws Exception{
        try{
           UserDetails userDetails = userDetailsService.loadUserByUsername(loginStudent.getEmail());
//            return ResponseEntity.ok().body("{\"message\": \"Successfully logged in\", \"email\": \"" + loginStudent.getEmail() + "\"}");
            String role = userDetails.getAuthorities().iterator().next().getAuthority();
            return ResponseEntity.ok().body("{\"message\": \"Successfully logged in\", \"email\": \"" + loginStudent.getEmail() + "\", \"role\": \"" + role + "\"}");
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Unauthorized\"}");
        }
    }


    public College_user addCollegeStudent(College_user user){
        String cryptPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(cryptPass);
        user.setRole("USER");
        return collegeUserRepo.save(user);
    }

//  For Fetching Users
    public List<College_user> getAllUsers(){
        return collegeUserRepo.findAll();
    }
}
