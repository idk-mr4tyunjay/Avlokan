package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.Club_data;
import com.EventBackEnd.EventMan.Repository.ClubDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubDataLogic {
    @Autowired
    private ClubDataRepo clubDataRepo;

    public List<Club_data> getAllClub(){
        return clubDataRepo.findAll();
    }
}
