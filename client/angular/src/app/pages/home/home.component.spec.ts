import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './../../api/api.service';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './../../components/pagination/pagination.component';
import { TableComponent } from './../../components/table/table.component';
import { FormComponent } from './../../components/form/form.component';
import { ModalFormComponent } from './../../components/modal-form/modal-form.component';
import { ModalConfirmationComponent } from './../../components/modal-confirmation/modal-confirmation.component';
import { HomeService } from './home.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { Product } from 'src/app/api/models/product';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeService,
        ApiService
      ],
      declarations: [HomeComponent, AlertComponent, ModalConfirmationComponent, ModalFormComponent, TableComponent, FormComponent, PaginationComponent],
      imports: [FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.productList = [];
    component.product = new Product();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
