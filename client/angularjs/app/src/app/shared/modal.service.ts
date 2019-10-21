import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }

  public attach(id) {
    let $element = $(id);
    return {
      show: (open) => {
        $element.modal(open ? 'show' : 'hide');
      }
    }
  }
}
