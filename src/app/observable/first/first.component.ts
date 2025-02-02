import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
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

  update() {
    this.dataService.updateData('Data updated from first component!')
  }
}
