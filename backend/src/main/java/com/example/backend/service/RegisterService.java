// package com.example.backend.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.backend.model.Register;
// import com.example.backend.repo.RegisterRepository;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class RegisterService {

//     @Autowired
//     private RegisterRepository registerRepository;

//     public List<Register> findAll() {
//         return registerRepository.findAll();
//     }

//     public Optional<Register> findById(int id) {
//         return registerRepository.findById(id);
//     }

//     // Add this method to RegisterService
// public Register findByEmail(String email) {
//     // Implement your logic to find a register by email
//     return registerRepository.findByEmail(email);
// }

//     public Register save(Register register) {
//         return registerRepository.save(register);
//     }

//     public void deleteById(int id) {
//         registerRepository.deleteById(id);
//     }

//     public Register updateRegister(int id, Register updatedRegister) {
//         return registerRepository.findById(id)
//                 .map(register -> {
//                     register.setFname(updatedRegister.getFname());
//                     register.setLname(updatedRegister.getLname());
//                     register.setAddress(updatedRegister.getAddress());
//                     register.setAge(updatedRegister.getAge());
//                     register.setMobile(updatedRegister.getMobile());
//                     register.setEmail(updatedRegister.getEmail());
//                     register.setPassword(updatedRegister.getPassword());
//                     register.setDetails(updatedRegister.getDetails());
//                     return registerRepository.save(register);
//                 })
//                 .orElseGet(() -> {
//                     updatedRegister.setCustomerid(id);
//                     return registerRepository.save(updatedRegister);
//                 });
//     }
// }
package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Register;
import com.example.backend.repo.RegisterRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    public List<Register> findAll() {
        return registerRepository.findAll();
    }

    public Optional<Register> findById(int id) {
        return registerRepository.findById(id);
    }

    public Register findByEmail(String email) {
        return registerRepository.findByEmail(email);
    }

    public Register save(Register register) {
        return registerRepository.save(register);
    }

    public void deleteById(int id) {
        registerRepository.deleteById(id);
    }

    public Register updateRegister(int id, Register updatedRegister) {
        return registerRepository.findById(id)
                .map(register -> {
                    register.setFname(updatedRegister.getFname());
                    register.setLname(updatedRegister.getLname());
                    register.setAddress(updatedRegister.getAddress());
                    register.setAge(updatedRegister.getAge());
                    register.setMobile(updatedRegister.getMobile());
                    register.setEmail(updatedRegister.getEmail());
                    register.setPassword(updatedRegister.getPassword());
                    register.setDetails(updatedRegister.getDetails());
                    register.setProfilePhoto(updatedRegister.getProfilePhoto()); // Update profile photo
                    return registerRepository.save(register);
                })
                .orElseGet(() -> {
                    updatedRegister.setCustomerid(id);
                    return registerRepository.save(updatedRegister);
                });
    }

    public Register updateProfilePhoto(int id, String profilePhoto) {
        return registerRepository.findById(id)
                .map(register -> {
                    register.setProfilePhoto(profilePhoto);
                    return registerRepository.save(register);
                })
                .orElseThrow(() -> new IllegalArgumentException("Register not found with id " + id));
    }
    
}
