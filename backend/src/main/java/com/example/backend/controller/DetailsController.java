
package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Details;
import com.example.backend.service.DetailsService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("api/v1/details")
public class DetailsController {

    @Autowired
    private DetailsService detailsService;

    @PostMapping("/post")
    public ResponseEntity<Details> createDetails(@RequestBody Details details) {
        try {
            System.out.println("Received Details: " + details.toString()); // Log received details
            Details createdDetails = detailsService.save(details);
            return new ResponseEntity<>(createdDetails, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Log exception stack trace
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get")
    public List<Details> getAllDetails() {
        return detailsService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Details> getDetailsById(@PathVariable int id) {
        return detailsService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Details> updateDetails(@PathVariable int id, @RequestBody Details details) {
        return detailsService.findById(id)
                .map(existingDetails -> ResponseEntity.ok(detailsService.updateDetails(id, details)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDetails(@PathVariable int id) {
        if (detailsService.findById(id).isPresent()) {
            detailsService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
