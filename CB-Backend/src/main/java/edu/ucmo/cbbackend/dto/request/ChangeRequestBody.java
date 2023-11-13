package edu.ucmo.cbbackend.dto.request;

import edu.ucmo.cbbackend.model.ChangeRequest;
import edu.ucmo.cbbackend.model.ChangeRequestState;
import edu.ucmo.cbbackend.model.ChangeType;
import edu.ucmo.cbbackend.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChangeRequestBody {
    private Long UserId;
    private ChangeType changeType;
    private String description;
    private String reason;
    private Long applicationId;
    private Date timeWindowStart;
    private Date timeWindowEnd;
    private ChangeRequest changeRequestState;
    private Date dateCreated = new Date();
    private Date dateUpdate = new Date();
    private String implementer;





    public ChangeRequest toChangeRequest(User user) {
        return ChangeRequest.builder()
                .author(user)
                .changeType(changeType)
                .description(description)
                .reason(reason)
                .applicationId(applicationId)
                .dateCreated(this.dateCreated)
                .dateUpdated(this.dateCreated)
                .Implementer(this.implementer)
                .timeWindowStart(this.timeWindowStart)
                .timeWindowEnd(this.timeWindowEnd)
                .build();
    }
}


