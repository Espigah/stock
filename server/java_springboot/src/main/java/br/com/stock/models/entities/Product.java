package br.com.stock.models.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotNull
    private Integer idProduct;

  
    private Integer barCode;

    
    private String name;

   
    private String description;

    
    private String category;

    
    private Integer quantity;

    

    protected Product() {
    }

    public Product(String name, String description) {
        this.name = name;
        this.description = description;
    }

    @Override
    public String toString() {
        return String.format("Product[id=%d, name='%s', description='%s']", idProduct, name, description);
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getBarCode() {
        return barCode;
    }

    public void setBarCode(Integer barCode) {
        this.barCode = barCode;
    }

}