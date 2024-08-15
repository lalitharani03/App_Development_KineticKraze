

package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Register;
import com.example.backend.service.RegisterService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/api/registers")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @GetMapping("/get")
    public List<Register> getAllRegisters() {
        return registerService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Register> getRegisterById(@PathVariable int id) {
        return registerService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getByEmail")
    public ResponseEntity<Register> getRegisterByEmail(@RequestParam String email) {
        Register register = registerService.findByEmail(email);
        if (register != null) {
            return ResponseEntity.ok(register);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/post")
    public Register createRegister(@RequestBody Register register) {
        return registerService.save(register);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Register> updateRegister(@PathVariable int id, @RequestBody Register register) {
        return registerService.findById(id)
                .map(existingRegister -> ResponseEntity.ok(registerService.updateRegister(id, register)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegister(@PathVariable int id) {
        if (registerService.findById(id).isPresent()) {
            registerService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/photo")
    public ResponseEntity<Register> updateProfilePhoto(@PathVariable int id, @RequestBody String profilePhoto) {
        return registerService.findById(id)
                .map(existingRegister -> ResponseEntity.ok(registerService.updateProfilePhoto(id, profilePhoto)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
}
