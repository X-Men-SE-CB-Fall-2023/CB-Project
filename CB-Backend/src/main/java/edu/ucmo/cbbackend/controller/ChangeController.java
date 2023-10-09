package edu.ucmo.cbbackend.controller;

import edu.ucmo.cbbackend.model.ChangeRequest;
import edu.ucmo.cbbackend.model.User;
import edu.ucmo.cbbackend.repository.ChangeRepository;
import edu.ucmo.cbbackend.service.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController("/api/v1/change")
public class ChangeController {

    private final ChangeRepository changeRepository;
    private final UserService userService;

    public ChangeController(ChangeRepository changeRepository, UserService userService) {
        this.changeRepository = changeRepository;
        this.userService = userService;

    }

    @SecurityRequirement(name = "jwtAuth")
    @PostMapping("/api/v1/change")
    public ResponseEntity<?> change(@RequestBody ChangeRequest change, Principal principal){

        try {
            User user = (User) userService.loadUserByUsername(principal.getName());
            change.setChangeType(change.getChangeType());
            changeRepository.save(change);
            return ResponseEntity.ok("Change request received");
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.toString());
        }



    }
}
