package com.rizkyjayusman.graphql_server.controller;

import com.rizkyjayusman.graphql_server.input.CompanyInput;
import com.rizkyjayusman.graphql_server.model.Company;
import com.rizkyjayusman.graphql_server.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @QueryMapping
    public List<Company> companies() {
        return companyService.getAllCompanies();
    }

    @QueryMapping
    public Company companyById(@Argument Long id) {
        return companyService.getCompanyById(id).orElse(null);
    }

    @MutationMapping
    public Company createCompany(@Argument CompanyInput companyInput) {
        return companyService.createCompany(companyInput.getName(), companyInput.getAddress());
    }
}