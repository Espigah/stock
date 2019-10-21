import { ModalFormState } from './../../shared/modal-form-state.enum';
import { ModalService } from './../../shared/modal.service';
import { Product } from './../../api/models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit  {


 
  @Input() state: ModalFormState;
  @Output('state') statenEmitter: EventEmitter<ModalFormState> = new EventEmitter<ModalFormState>();
 

  
  @Output('submit') submitEmitter: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() product: Product;
  @Input() readOnly: boolean;

  modal: any;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modal = this.modalService.attach("#modalForm");
    this.openCloseModal(this.state);
  }

  close() {
    this.state = ModalFormState.CLOSE;
    this.statenEmitter.emit(this.state);
    this.openCloseModal(this.state);
  }

  ngOnChanges(changes) {
    this.openCloseModal(this.state);
  }

  openCloseModal(state: ModalFormState) {
    if (!this.modal) {
      return;
    }
    this.modal.show(state !== ModalFormState.CLOSE);
  }

}
