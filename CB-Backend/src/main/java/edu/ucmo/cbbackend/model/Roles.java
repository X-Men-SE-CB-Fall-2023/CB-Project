package edu.ucmo.cbbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Roles {
    @Id
    @GeneratedValue
    private Long id;



    @Column(nullable = false, unique = true)
    private String name; // "ROLE_USER", "ROLE_ADMIN", etc.


}
