package com.EventBackEnd.EventMan.Controllers;

import com.EventBackEnd.EventMan.Entities.College_user;
import com.EventBackEnd.EventMan.Entities.LoginStudent;
import com.EventBackEnd.EventMan.Logic.CollegeUserLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/avlokan")
public class collegeUserController {
    @Autowired
    private CollegeUserLogic collegeUserLogic;

    @PostMapping("/login-student")
    public ResponseEntity<String> signIn(@RequestBody LoginStudent loginStudent) throws Exception {
        return collegeUserLogic.authentication(loginStudent);
    }

    @PostMapping("/college-user")
    public College_user posting(@RequestBody College_user data){
        return collegeUserLogic.addCollegeStudent(data);
    }
}
