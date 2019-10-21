import { AlertService } from './alert.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1, display:'block' })),
      state('hidden', style({ opacity: 0, display:'none' })),
      transition('shown => hidden', animate('800ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
})
export class AlertComponent implements OnInit {
  message: string;
  hasError: boolean;
  visiblityState = "hidden";

  constructor(private alertService: AlertService) {

  }

  ngOnInit() {
    this.alertService.observe().subscribe((data) => {
      this.hasError = data.hasError ;
      this.message = data.message;
      this.setVisiblityState(true);
    })
  }

  setVisiblityState(visible:boolean){   
    this.visiblityState =  visible ? "shown": "hidden";
    setTimeout( () => {
      this.visiblityState = "hidden";
    }, 1500)
  }

}
