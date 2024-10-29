package com.rizkyjayusman.graphql_server.service;

import com.rizkyjayusman.graphql_server.model.Employee;
import com.rizkyjayusman.graphql_server.repository.CompanyRepository;
import com.rizkyjayusman.graphql_server.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final CompanyRepository companyRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee createEmployee(String name, String position, Double salary, Long companyId) {
        Employee employee = new Employee();
        employee.setName(name);
        employee.setPosition(position);
        employee.setSalary(salary);
        employee.setCompany(companyRepository.findById(companyId).orElseThrow());
        return employeeRepository.save(employee);
    }
}