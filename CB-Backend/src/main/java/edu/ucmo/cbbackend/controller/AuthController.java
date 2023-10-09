package edu.ucmo.cbbackend.controller;

import edu.ucmo.cbbackend.model.User;
import edu.ucmo.cbbackend.service.TokenService;
import edu.ucmo.cbbackend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.slf4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class AuthController {

    private final TokenService tokenService;
    private  final UserService userService;
    private final Logger logger = org.slf4j.LoggerFactory.getLogger(AuthController.class);


    public AuthController(TokenService tokenService, UserService userService) {
        this.tokenService = tokenService;
        this.userService = userService;
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Return a JWT", content = @Content),
            @ApiResponse(responseCode = "401", description = "Return a String of 'Incorrect Credentials'", content = @Content),
            @ApiResponse(responseCode = "500", description = "Return a String of 'Internal Server Error'", content = @Content)
    })
    @Operation(summary = "Login endpoint")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try{
        UserDetails dbUser = userService.loadUserByUsername(user.getUsername());
        if (dbUser == null) {
            return ResponseEntity.badRequest().body("Incorrect Credentials");
        }
        if (!userService.passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
            return ResponseEntity.badRequest().body("Incorrect Credentials");
        }
            String token = tokenService.generateToken(dbUser);
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add(HttpHeaders.AUTHORIZATION, "Bearer " + token);
            return ResponseEntity.ok(token);
    }
        catch (Exception e){
            return ResponseEntity.internalServerError().body("Internal Server Error");
        }
    }

}
