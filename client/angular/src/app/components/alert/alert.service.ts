import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  private behavior: BehaviorSubject<any> = new BehaviorSubject({hasError:false,message:""});


  constructor() { }

  public success(message?: string) {
    this.update(false, message);


  };
  /** show error toast */
  public error(message?: string) {
    this.update(true, message);
  };

  private update(hasError?: boolean, message?: string) {
    this.behavior.next({ hasError, message });
  };

  observe(): Observable<any> {
    return this.behavior.asObservable();
  }
}
