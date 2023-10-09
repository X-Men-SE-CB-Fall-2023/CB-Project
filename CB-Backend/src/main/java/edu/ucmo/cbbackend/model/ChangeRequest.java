package edu.ucmo.cbbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Table(name = "change_requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class ChangeRequest implements Serializable {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false, foreignKey = @ForeignKey(name = "FK_users"))
    private User author;


    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ChangeType changeType;


    @Column(nullable = false, length = 80)
    private String description;

    @Column(nullable = false, unique = true)
    private Long changeRequestID;




}
