package br.com.stock.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.stock.models.entities.Product;
import br.com.stock.repositories.ProductRepository;

@Controller
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @ResponseBody
    @GetMapping("/products/")
    public List<Product> getProducts() {
        try {
            return productRepository.findAll();
        } catch (Exception e) {
            throw e;
        }
    }

    @ResponseBody
    @GetMapping("/products/{id}")
    public  Optional<Product> getProduct(@PathVariable("id") Integer id) {
        try {
            return productRepository.findById(id); // new ResponseEntity<>(HttpStatus.NOT_FOUND)
        } catch (Exception e) {
            throw e;
        }
    }

    @ResponseBody
    @PostMapping(value = "/products/", produces = "application/json", consumes = "application/json")
    public Product createProduct(@RequestBody Product product) {
        try {
            return productRepository.saveAndFlush(product);
        } catch (Exception e) {
            throw e;
        }
    }

    @ResponseBody
    @PutMapping(value = "/products/{id}", produces = "application/json", consumes = "application/json")
    public Product updateProduct(@PathVariable("id") Integer id, @RequestBody Product product) {
        try {
            return productRepository.saveAndFlush(product);
        } catch (Exception e) {
            throw e;
        }
    }

    @ResponseBody
    @DeleteMapping("/products/{id}")
    public Boolean deleteProduct(@PathVariable("id") Integer id) {
        try {
            productRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            throw e;
        }
    }
}