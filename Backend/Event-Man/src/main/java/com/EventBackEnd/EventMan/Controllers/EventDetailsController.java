package com.EventBackEnd.EventMan.Controllers;

import com.EventBackEnd.EventMan.Entities.Event_details;
import com.EventBackEnd.EventMan.Logic.EventDetailsLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/avlokan")
@CrossOrigin("*")
public class EventDetailsController {
    @Autowired
    private EventDetailsLogic eventDetailsLogic;

    @GetMapping("/all-events")
    public List<Event_details> getEvents(){
        return eventDetailsLogic.getAllEvents();
    }

}
