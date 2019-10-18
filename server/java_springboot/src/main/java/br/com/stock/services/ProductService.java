package br.com.stock.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.stock.models.entities.Product;
import br.com.stock.repositories.ProductRepository;

@Service
public class ProductService implements IProductService {

   /* @Autowired
    ProductRepository productRepository;

    @Transactional
    public String get() {
        productRepository.save(new Product("Jack", "Bauer"));
        Optional<Product> p = findById(1);
        System.out.println(p);
        return "";
    }

    @Override
    public List<Product> findByName(String name) {
        return productRepository.findByName(name);
    }

    @Override
    public Optional<Product> findById(Integer idProduct) {
        return productRepository.findById(idProduct);
    }

    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product create(String name, String description) {
        return create(new Product(name,description));
    }
  
    @Override
    public Product deleteByID(Integer idProduct) {
        return productRepository.deleteByID(idProduct);
    }*/
}
