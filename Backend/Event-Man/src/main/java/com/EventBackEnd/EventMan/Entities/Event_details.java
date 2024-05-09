package com.EventBackEnd.EventMan.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Event_details {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String event_name;
    Date associated_dates;
    Date event_date;
    String description;
    String event_type;
    String club_host;
    String contact;
}
