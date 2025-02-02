import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<string>('Initial value');
  
  data$ = this.dataSubject.asObservable();

  updateData(newValue: string) {
    this.dataSubject.next(newValue);
  }
}
