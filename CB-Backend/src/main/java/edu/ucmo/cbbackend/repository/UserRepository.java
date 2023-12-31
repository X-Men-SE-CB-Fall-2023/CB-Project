package edu.ucmo.cbbackend.repository;

import edu.ucmo.cbbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, Long> {

    User findByUsername(String username);
    User findById(long id);

    void deleteById(long id);

}
