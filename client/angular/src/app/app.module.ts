
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormComponent } from './components/form/form.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmationComponent,
    TableComponent,
    PaginationComponent,
    FormComponent,
    ModalFormComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
