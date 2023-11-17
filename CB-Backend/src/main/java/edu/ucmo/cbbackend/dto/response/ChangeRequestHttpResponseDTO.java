package edu.ucmo.cbbackend.dto.response;

import edu.ucmo.cbbackend.model.ChangeRequestApproveOrDeny;
import edu.ucmo.cbbackend.model.ChangeRequestState;
import edu.ucmo.cbbackend.model.ChangeType;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * DTO for {@link edu.ucmo.cbbackend.model.ChangeRequest}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangeRequestHttpResponseDTO implements Serializable {
    private Long id;
    private Long authorId;
    private ChangeType changeType;
    private Long applicationId;
    private String description;
    private String reason;
    @FutureOrPresent
    private Date dateCreated;
    @FutureOrPresent
    private Date dateUpdated;
    @FutureOrPresent
    private Date timeWindowStart;
    @FutureOrPresent
    private Date timeWindowEnd;
    @PositiveOrZero
    private Long timeToRevert;
    private ChangeRequestApproveOrDeny approveOrDeny;
    private ChangeRequestState state;
    private String Implementer = "Not Assigned";
}