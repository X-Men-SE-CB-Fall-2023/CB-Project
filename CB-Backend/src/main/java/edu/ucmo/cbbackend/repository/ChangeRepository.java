package edu.ucmo.cbbackend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import edu.ucmo.cbbackend.model.ChangeRequest;

import java.awt.print.Pageable;
import java.util.List;

@Repository

public interface ChangeRepository extends PagingAndSortingRepository<ChangeRequest, Long>, CrudRepository<ChangeRequest, Long> {

    ChangeRequest findById (long id);

    Page<ChangeRequest> findAll(Pageable pageable);

}
