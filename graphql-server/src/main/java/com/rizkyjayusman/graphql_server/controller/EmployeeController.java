package com.rizkyjayusman.graphql_server.controller;
import com.rizkyjayusman.graphql_server.input.EmployeeInput;
import com.rizkyjayusman.graphql_server.model.Employee;
import com.rizkyjayusman.graphql_server.service.EmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @QueryMapping
    public List<Employee> employees() {
        return employeeService.getAllEmployees();
    }

    @QueryMapping
    public Employee employeeById(@Argument Long id) {
        return employeeService.getEmployeeById(id).orElse(null);
    }

    @MutationMapping
    public Employee createEmployee(@Argument @Valid EmployeeInput employeeInput) {
        return employeeService.createEmployee(employeeInput.getName(), employeeInput.getPosition(), employeeInput.getSalary(), employeeInput.getCompanyId());
    }
}