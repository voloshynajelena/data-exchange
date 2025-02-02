import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-first-exchange',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  dataFirst: string = '';

  constructor(public dataService: DataService) {
    this.dataFirst = dataService.data;
  }
}
