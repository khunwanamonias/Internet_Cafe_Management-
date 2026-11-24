package com.ictms_backend.customerManagement.controller;

import com.ictms_backend.customerManagement.entity.Customer;
import com.ictms_backend.customerManagement.service.CustomerService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService service;

    public CustomerController(CustomerService customerService)
    {
        this.service = customerService;
    }

    @GetMapping
    public List<Customer> getCustomer(){
        return service.getAllCustomers();
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer)
    {
        return service.saveCustomer(customer);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id){
        service.deleteCustomer(id);
    }
}
