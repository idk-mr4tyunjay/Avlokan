package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.Event_details;
import com.EventBackEnd.EventMan.Repository.EventDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class EventDetailsLogic {
    @Autowired
    private EventDetailsRepo eventDetailsRepo;

    public List<Event_details> getAllEvents(){
        return eventDetailsRepo.findAll();
    }
}
