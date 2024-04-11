package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.College_user;
import com.EventBackEnd.EventMan.Repository.CollegeUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CollegeUserLogic {
    @Autowired
    private CollegeUserRepo collegeUserRepo;


    public College_user user(College_user data){
        return collegeUserRepo.save(data);
    }
}
