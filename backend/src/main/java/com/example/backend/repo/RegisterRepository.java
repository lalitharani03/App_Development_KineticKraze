package com.example.backend.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Register;
@Repository
public interface RegisterRepository extends JpaRepository<Register, Integer> {

    Register findByEmail(String email);
}
