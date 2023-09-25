package edu.ucmo.cbbackend.component;


import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Map;

@Component
public class JwtComponent implements Serializable {

    private final String JWTSecret = "";
    private final long ExpireTime = 86400000;

    public String getUsername(String token){
        return null;
    }

    public Data getExpiration(String token){
        return null;
    }

    public String generateToken(String username){
        return null;
    }

public boolean validateToken(String token){
        return false;
    }


  public boolean isTokenExpired(String token){
        return false;
  }

  private String createToken(Map<String, Object> claims, String subject){
        return null;
  }



  }



}
