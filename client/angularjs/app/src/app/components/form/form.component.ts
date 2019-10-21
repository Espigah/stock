import { Product } from './../../api/models/product';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() product: Product = new Product();
  @Output() productEmitter: EventEmitter<Product> = new EventEmitter<Product>();



  constructor() { }

  ngOnInit() {
  }

}
