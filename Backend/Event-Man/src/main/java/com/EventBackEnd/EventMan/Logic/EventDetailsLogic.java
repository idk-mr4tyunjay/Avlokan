package com.EventBackEnd.EventMan.Logic;

import com.EventBackEnd.EventMan.Entities.Event_details;
import com.EventBackEnd.EventMan.Repository.EventDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventDetailsLogic {
    @Autowired
    private EventDetailsRepo eventDetailsRepo;

    public List<Event_details> getAllEvents(){
        return eventDetailsRepo.findAll();
    }
}
