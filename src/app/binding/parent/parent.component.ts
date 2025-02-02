import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'
@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentData: string = 'Hello from parent'

  receiveData(data: any) {
    console.log(data);
  }
}
