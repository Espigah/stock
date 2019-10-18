
package br.com.stock.services.product;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.stock.repositories.ProductRepository;

//@ExtendWith(MockitoExtension.class) , need this? still able to run.
@SpringBootTest
public class ProductUpdateTest {

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