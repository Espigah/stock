import { ModalFormState } from './../../shared/modal-form-state.enum';
import { Observable } from 'rxjs';
import { Product } from './../../api/models/product';
import { ApiService } from './../../api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private api: ApiService) { }

  getProducts(): Observable<Product[]> {
    return this.api.getProducts();
  }

  upsertProduct(product: Product, modalFormState = ModalFormState.EDIT): Observable<Product> {
    switch (modalFormState) {
      case ModalFormState.CREATE:
        return this.api.createProduct( product);
        break;
      case ModalFormState.EDIT:
        return this.api.updateProduct(product.idProduct, product);
        break;

      default:
        break;
    }

  }

  deleteProduct(product: Product): Observable<Product> {
    return this.api.deleteProduct(product.idProduct);
  }

  pushProduct(products: Product[], newProduct: Product): Product[] {

    let newList = products
    .filter((product)=>{
      return product.idProduct !== newProduct.idProduct //remove if exist
    })   
    .concat([newProduct])

    return newList;

  }


  popProduct(products: Product[], oldProduct: Product): Product[] {
    return products.filter((product) => {
      return product.idProduct !== oldProduct.idProduct;
    })
  }

}
