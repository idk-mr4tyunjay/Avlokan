package com.EventBackEnd.EventMan.Repository;

import com.EventBackEnd.EventMan.Entities.College_user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CollegeUserRepo extends JpaRepository<College_user,Long> {
    Optional<College_user> findByEmail(String email);
}
