package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Details {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerid;
    private String gender;
    private int height;
    private int weight;
    private String fitnessGoals;
    private String timeframe;
    private String activityLevel;
    private String workoutDays;
    private String workoutDuration;
    private String workoutTypes;
    private String equipment;
    private String workoutPlace;

    @Override
    public String toString() {
        return "Details{" +
                "customerid=" + customerid +
                ", gender='" + gender + '\'' +
                ", height='" + height + '\'' +
                ", weight='" + weight + '\'' +
                ", fitnessGoals='" + fitnessGoals + '\'' +
                ", timeframe='" + timeframe + '\'' +
                ", activityLevel='" + activityLevel + '\'' +
                ", workoutDays='" + workoutDays + '\'' +
                ", workoutDuration='" + workoutDuration + '\'' +
                ", workoutTypes='" + workoutTypes + '\'' +
                ", equipment='" + equipment + '\'' +
                ", workoutPlace='" + workoutPlace + '\'' +
                '}';
    }        
}
