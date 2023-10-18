package edu.ucmo.cbbackend.DTO.reponses;

import edu.ucmo.cbbackend.model.ChangeRequest;
import edu.ucmo.cbbackend.model.Roles;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private Long id;
    private  String username;
    private Roles role;
    private List<ChangeRequest> changeRequest;


}
