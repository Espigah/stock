import { ModalFormState } from './../../shared/modal-form-state.enum';
import { AlertService } from './../../components/alert/alert.service';
import { Product } from './../../api/models/product';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalConfirmationOpen: boolean;
  modalFormState = ModalFormState.CLOSE;
  productList: any = [];
  product: Product;


  constructor(private homeService: HomeService, private alertService: AlertService) { }

  ngOnInit() {
    this.loadProduct();
  }


  loadProduct() {
    return this.homeService.getProducts().subscribe((data: {}) => {
      this.productList = data;
    })
  }


  //________________________________
  //FORM ACTIONS
  //________________________________
  onCreate() {
    this.setProduct(new Product());
    this.openModalForm(ModalFormState.CREATE);
  }

  onEdit(product: Product) {
    this.setProduct(product);
    this.openModalForm();
  }

  onDelete(product: Product) {
    this.setProduct(product);
    this.openModalConfirmation();
  }

  //________________________________
  //MODAL STATE
  //________________________________
  openModalForm(state: ModalFormState = ModalFormState.EDIT) {
    this.modalFormState = state;
  }

  openModalConfirmation(open: boolean = true) {
    this.modalConfirmationOpen = open;
  }

  //________________________________
  //API REQUEST
  //________________________________
  onFormSubmit(product) {
    this.homeService.upsertProduct(product, this.modalFormState).subscribe(data => {
      this.productList = this.homeService.pushProduct(this.productList, data);
      this.openModalForm(ModalFormState.CLOSE);
      this.alertService.success("Editado!");
    }, (err) => {
      this.alertService.error("Erro ao tentar editar um produto!");
    })
  }

  onModelConfirmationClose(answer) {
    if (!answer) { //isNo
      return
    }

    this.homeService.deleteProduct(this.product).subscribe(data => {
      this.productList = this.homeService.popProduct(this.productList, this.product);
      this.openModalConfirmation(false);
      this.alertService.success("Removido!");
    }, (err) => {
      this.alertService.error("Erro ao tentar remover um produto!");
    })

  }

  //________________________________
  //
  //________________________________
  private setProduct(product: Product) {
    this.product = { ...product };
  }


}
