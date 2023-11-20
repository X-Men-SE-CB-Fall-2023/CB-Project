package edu.ucmo.cbbackend.repository;

import edu.ucmo.cbbackend.model.ChangeRequest;
import edu.ucmo.cbbackend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;


@Repository
public interface ChangeRepository extends PagingAndSortingRepository<ChangeRequest, Long>, CrudRepository<ChangeRequest, Long> {

    ChangeRequest findById(long id);

    Page<ChangeRequest> findAllByAuthorAndState_Frozen(User author, Pageable pageable);
    Page<ChangeRequest> findAllByAuthorAndState_Application(User author, Pageable pageable);

    Page<ChangeRequest> findAllByAuthorAndState_Department(User author, Pageable pageable);

    Page<ChangeRequest> findAllByAuthorAndState_Completed(User author, Pageable pageable);

    Page<ChangeRequest> findAllByState_Frozen(Pageable pageable);

    Page<ChangeRequest> findAllByState_Application(Pageable pageable);

    Page<ChangeRequest> findAllByState_Department(Pageable pageable);

    Page<ChangeRequest> findAllByState_Completed(Pageable pageable);

    Page<ChangeRequest> findByRoles_Name(String name, Pageable pageable);


}
