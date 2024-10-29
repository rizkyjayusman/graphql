package com.rizkyjayusman.graphql_server.service;

import com.rizkyjayusman.graphql_server.model.Company;
import com.rizkyjayusman.graphql_server.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CompanyService {
    private final CompanyRepository companyRepository;

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> getCompanyById(Long id) {
        return companyRepository.findById(id);
    }

    public Company createCompany(String name, String address) {
        Company company = new Company();
        company.setName(name);
        company.setAddress(address);
        return companyRepository.save(company);
    }
}