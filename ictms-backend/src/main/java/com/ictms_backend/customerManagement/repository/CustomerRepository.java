package com.ictms_backend.customerManagement.repository;

import com.ictms_backend.customerManagement.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long>{
}
