package edu.ucmo.cbbackend.dto.response;

import edu.ucmo.cbbackend.model.ChangeRequest;
import lombok.AllArgsConstructor;
import lombok.Data;


import java.util.Date;
import java.util.Optional;

@Data
@AllArgsConstructor


public class ChangeRequestHttpResponse {

    private Long id;
    private Long AuthorId;
    private String ChangeType;
    private Long applicationId;
    private String description;
    private String reason;

    private Optional<String> Username;

    private Date DateCreated;

    public ChangeRequestHttpResponse(ChangeRequest changeRequest) {
        this.id = changeRequest.getId();
        this.AuthorId = changeRequest.getAuthor().getId();
        this.ChangeType = changeRequest.getChangeType().toString();
        this.applicationId = changeRequest.getApplicationId();
        this.description = changeRequest.getDescription();
        this.reason = changeRequest.getReason();
        this.Username = changeRequest.getUsername();
        this.DateCreated = changeRequest.getDateCreated();
        this.DateCreated = changeRequest.getDateUpdated();
    }


}
