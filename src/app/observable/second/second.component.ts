import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  data!: string;

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe(
      value => {
        console.log('before', this.data);
        this.data = value;
        console.log('after', this.data);
      }
    );
  }
}
