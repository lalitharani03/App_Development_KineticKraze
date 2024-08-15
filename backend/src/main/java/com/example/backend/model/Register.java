
package com.example.backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "register")
@Getter
@Setter
@NoArgsConstructor
public class Register {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerid;

    @Column(name = "first_name", length = 50)
    private String fname;

    @Column(name = "last_name", length = 50)
    private String lname;

    @Column(name = "address", length = 50)
    private String address;

    @Column(name = "age")
    private int age; 

    @Column(name = "mobile", length = 50)
    private String mobile;

    @Column(name = "email", length = 50)
    private String email;

    @Column(name = "password", length = 50)
    private String password;

    @Column(name = "profile_photo", length = 10485760) // Column to store base64 encoded image (10MB max)
    private String profilePhoto;

    @OneToOne(cascade = CascadeType.ALL)
    private Details details;

    @Override
    public String toString() {
        return "Register{" +
                "customerid=" + customerid +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", address='" + address + '\'' +
                ", age=" + age + 
                ", mobile='" + mobile + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", profilePhoto='" + profilePhoto + '\'' +
                '}';
    }
}
