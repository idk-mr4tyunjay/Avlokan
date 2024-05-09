package com.EventBackEnd.EventMan.Controllers;
import java.util.List;
import com.EventBackEnd.EventMan.Entities.Club_data;
import com.EventBackEnd.EventMan.Logic.ClubDataLogic;
import com.EventBackEnd.EventMan.Repository.ClubDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/avlokan")
@CrossOrigin("*")
public class ClubDataController {
    @Autowired
    private ClubDataLogic clubDataLogic;

    @GetMapping("/get-clubs")
    public List<Club_data> getClub(){
        return clubDataLogic.getAllClub();
    }
}
