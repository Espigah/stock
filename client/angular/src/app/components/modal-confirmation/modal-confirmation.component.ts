import { ModalService } from './../../shared/modal.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {

  @Input() open: boolean;
  @Output('open') openEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output('close') closeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  modal: any;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modal = this.modalService.attach("#modalConfirmation");
    this.openCloseModal(this.open);
  }

  close(answer) {//yes(true) | no(false)
    this.open = false;
    this.openEmitter.emit(false);
    this.openCloseModal(this.open);
    this.closeEmitter.emit(answer);
  }



  ngOnChanges(changes) {
    this.openCloseModal(this.open);
  }

  openCloseModal(open: boolean) {
    if (!this.modal) {
      return;
    }
    this.modal.show(open);
  }

}
