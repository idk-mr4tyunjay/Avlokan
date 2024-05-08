package com.EventBackEnd.EventMan.Repository;

import com.EventBackEnd.EventMan.Entities.Event_details;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventDetailsRepo extends JpaRepository<Event_details,Long> {
}
