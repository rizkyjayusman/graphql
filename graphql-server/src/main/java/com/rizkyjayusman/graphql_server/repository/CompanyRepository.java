package com.rizkyjayusman.graphql_server.repository;

import com.rizkyjayusman.graphql_server.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {}