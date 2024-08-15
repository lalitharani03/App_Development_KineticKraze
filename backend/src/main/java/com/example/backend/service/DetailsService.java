package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Details;
import com.example.backend.repo.DetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DetailsService {

    @Autowired
    private DetailsRepository detailsRepository;

    public List<Details> findAll() {
        return detailsRepository.findAll();
    }

    public Optional<Details> findById(int id) {
        return detailsRepository.findById(id);
    }

    public Details save(Details details) {
        return detailsRepository.save(details);
    }

    public void deleteById(int id) {
        detailsRepository.deleteById(id);
    }

    public Details updateDetails(int id, Details updatedDetails) {
        return detailsRepository.findById(id)
                .map(details -> {
                    details.setGender(updatedDetails.getGender());
                    details.setHeight(updatedDetails.getHeight());
                    details.setWeight(updatedDetails.getWeight());
                    details.setFitnessGoals(updatedDetails.getFitnessGoals());
                    details.setTimeframe(updatedDetails.getTimeframe());
                    details.setActivityLevel(updatedDetails.getActivityLevel());
                    details.setWorkoutDays(updatedDetails.getWorkoutDays());
                    details.setWorkoutDuration(updatedDetails.getWorkoutDuration());
                    details.setWorkoutTypes(updatedDetails.getWorkoutTypes());
                    details.setEquipment(updatedDetails.getEquipment());
                    details.setWorkoutPlace(updatedDetails.getWorkoutPlace());
                    return detailsRepository.save(details);
                })
                .orElseGet(() -> {
                    updatedDetails.setCustomerid(id);
                    return detailsRepository.save(updatedDetails);
                });
    }
}
