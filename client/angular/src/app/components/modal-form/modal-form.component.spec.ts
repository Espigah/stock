import { FormsModule } from '@angular/forms';
import { FormComponent } from './../form/form.component';
import { ModalFormComponent } from './modal-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/api/models/product';


describe('ModalFormComponent', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormComponent, FormComponent],
      imports: [FormsModule]
    })
      .compileComponents();


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    component.product = new Product();

    fixture = TestBed.createComponent(ModalFormComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
