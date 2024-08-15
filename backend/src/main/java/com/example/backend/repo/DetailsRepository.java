package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Details;

@Repository
public interface DetailsRepository extends JpaRepository<Details, Integer> {
}


