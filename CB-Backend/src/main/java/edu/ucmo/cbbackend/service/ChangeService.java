package edu.ucmo.cbbackend.service;

import edu.ucmo.cbbackend.model.ChangeRequest;
import edu.ucmo.cbbackend.model.User;
import edu.ucmo.cbbackend.repository.ChangeRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@Service
public class ChangeService {

    ChangeRepository changeRepository;


    public ChangeService(ChangeRepository changeRepository) {
        this.changeRepository = changeRepository;
    }

    public ChangeRequest findById(Long id){
        return changeRepository.findById(id).orElseThrow(() -> new RuntimeException("Change Request not found"));

    }

    public void deleteById(Long id){
        changeRepository.deleteById(id);
    }

    public void save(ChangeRequest changeRequest){
        changeRepository.save(changeRequest);
    }

    public List<ChangeRequest> findAllSortByDate() {
        Sort sort = new Sort(new Sort.Order(Sort.Direction.ASC, "created"));

        List<ChangeRequest> list = new ArrayList<>();
        changeRepository.findAll(Sort.by(Sort.Direction.ASC, "created")).forEach(list::add);
        return list;
    }


}