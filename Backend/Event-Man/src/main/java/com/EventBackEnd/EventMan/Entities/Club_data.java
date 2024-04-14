package com.EventBackEnd.EventMan.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "club_data")
public class Club_data {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long club_id;
    String club_name;
    String created_by_user;
    Date created_data;
    String club_type;
    String current_president;
    Long members;
    String events;
    String club_image;

}
