
package br.com.stock.services.product;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.stock.models.entities.Product;
import br.com.stock.repositories.ProductRepository;

//@ExtendWith(MockitoExtension.class) , need this? still able to run.
@SpringBootTest
public class ProductCreateTest {

    @Mock
    private ProductRepository productRepository;

    @BeforeEach
    void setMockOutput() {
        //when(productRepository.createP("p1")).thenReturn(Arrays.asList(new Product("p1", "teste")));
    }

    @DisplayName("Test")
    @Test
    void test() {
       
    }


}