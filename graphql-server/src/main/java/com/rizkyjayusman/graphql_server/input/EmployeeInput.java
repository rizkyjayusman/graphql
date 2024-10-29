package com.rizkyjayusman.graphql_server.input;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class EmployeeInput {
    private String name;
    private String position;
    private Double salary;
    private Long companyId;
}
