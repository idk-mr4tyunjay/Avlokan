package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.College_user;
import com.EventBackEnd.EventMan.Entities.LoginStudent;
import com.EventBackEnd.EventMan.Repository.CollegeUserRepo;
import com.EventBackEnd.EventMan.Security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
//        try{
//            userDetailsService.loadUserByUsername(loginStudent.getEmail());
//            return ResponseEntity.ok().body("{\"message\": \"Successfully logged in\", \"email\": \"" + loginStudent.getEmail() + "\"}");
//
//        }catch (Exception ex){
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Unauthorized\"}");
//        }
//    }

    public ResponseEntity<String> authentication(LoginStudent loginStudent) {
        try {
            College_user user = collegeUserRepo.findByEmail(loginStudent.getEmail())
                    .orElseThrow(() -> new UsernameNotFoundException("User Not found with Username " + loginStudent.getEmail()));

            // Compare the encoded password from the database with the raw password provided by the user
            if (passwordEncoder.matches(loginStudent.getPassword(), user.getPassword())) {
                return ResponseEntity.ok().body("{\"message\": \"Successfully logged in\", \"email\": \"" + loginStudent.getEmail() + "\"}");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Unauthorized: Invalid credentials\"}");
            }
        } catch (UsernameNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Unauthorized: User not found\"}");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Internal Server Error\"}");
        }
    }


    public College_user addCollegeStudent(College_user user){
        String cryptPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(cryptPass);
        return collegeUserRepo.save(user);
    }
}
