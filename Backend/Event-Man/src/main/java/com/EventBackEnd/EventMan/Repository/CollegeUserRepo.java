package com.EventBackEnd.EventMan.Repository;

import com.EventBackEnd.EventMan.Entities.College_user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollegeUserRepo extends JpaRepository<College_user,Long> {
}
