package com.EventBackEnd.EventMan.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "college_user")
public class college_user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "enrollement_id",nullable = false)
    String enrollement_id;
    String first_name;
    String last_name;
    String email;
    String password;
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    Date signup_date;

}
