package edu.ucmo.cbbackend.dto.response;

import edu.ucmo.cbbackend.model.ChangeRequest;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor


public class ChangeRequestHttpResponse {

    private Long id;
    private Long AuthorId;
    private String ChangeType;
    private Long applicationId;
    private String description;
    private String reason;
    private Date DateCreated;
    private Date DateUpdated;
    private Date TimeWindowStart;
    private Date TimeWindowEnd;
    private  ChangeRequest changeRequestState;



    public ChangeRequestHttpResponse(ChangeRequest changeRequest) {
        this.id = changeRequest.getId();
        this.AuthorId = changeRequest.getAuthor().getId();
        this.ChangeType = changeRequest.getChangeType().toString();
        this.applicationId = changeRequest.getApplicationId();
        this.description = changeRequest.getDescription();
        this.reason = changeRequest.getReason();
        this.DateCreated = changeRequest.getDateCreated();
        this.DateUpdated = changeRequest.getDateUpdated();
        this.TimeWindowStart = changeRequest.getTimeWindowStart();
        this.TimeWindowEnd = changeRequest.getTimeWindowEnd();
        this.changeRequestState = changeRequest.getChangeRequestState();




    }


}
