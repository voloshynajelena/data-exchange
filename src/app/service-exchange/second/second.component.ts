import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {  
  dataSecond: string = '';

  constructor(public dataService: DataService) {
    this.dataSecond = dataService.data;
  }
}
