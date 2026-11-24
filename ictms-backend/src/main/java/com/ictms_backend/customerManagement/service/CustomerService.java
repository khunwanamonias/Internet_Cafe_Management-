package com.ictms_backend.customerManagement.service;

import com.ictms_backend.customerManagement.entity.Customer;
import com.ictms_backend.customerManagement.repository.CustomerRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CustomerService {
    private final CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public List<Customer> getAllCustomers(){
        return repository.findAll();
    }

    public Customer saveCustomer(Customer customer)
    {
        return repository.save(customer);
    }

    public void deleteCustomer(Long id)
    {
        repository.deleteById(id);
    }
}
