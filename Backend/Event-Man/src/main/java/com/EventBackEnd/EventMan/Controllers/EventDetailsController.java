package com.EventBackEnd.EventMan.Controllers;

import com.EventBackEnd.EventMan.Entities.Event_details;
import com.EventBackEnd.EventMan.Logic.EventDetailsLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add-events")
    public Event_details addEvent(@RequestBody Event_details events){
        return eventDetailsLogic.addEvents(events);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEvents(@PathVariable(value = "id") Long id){
        return eventDetailsLogic.deleteEvents(id);
    }

}
