package com.EventBackEnd.EventMan.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "college_user")
public class College_user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "enrollement_id",nullable = false)
    private String enrollement_id;
    private String first_name;
    private String last_name;
    private String email;
    private String password;
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date signup_date;
}
