import { PaginationComponent } from './components/pagination/pagination.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './pages/home/home.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        AlertComponent,
        ModalConfirmationComponent,
        ModalFormComponent,
        TableComponent,
        FormComponent,
        PaginationComponent
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'products'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('products');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('products app is running!');
  // });
});
