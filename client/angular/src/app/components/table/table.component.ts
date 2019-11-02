import { Product } from './../../api/models/product';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output('onEdit') editEmmiter = new EventEmitter<Product>();
  @Output('onDelete') deleteEmmiter = new EventEmitter<Product>();


  @Input() productList: any;

  constructor() { }

  ngOnInit() {
    
  }

}
