package com.rizkyjayusman.graphql_server.repository;

import com.rizkyjayusman.graphql_server.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {}