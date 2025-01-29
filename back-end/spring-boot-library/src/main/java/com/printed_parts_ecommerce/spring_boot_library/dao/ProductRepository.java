package com.printed_parts_ecommerce.spring_boot_library.dao;

import com.printed_parts_ecommerce.spring_boot_library.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
