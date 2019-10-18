package br.com.stock.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.stock.models.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByName(String name);

    Optional<Product> findById(Integer idProduct);

}