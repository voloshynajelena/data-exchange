import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() data!: string;
  @Output() event = new EventEmitter<string>();

  sendEvent() {
    this.event.emit('Hello parent');
  }
}
