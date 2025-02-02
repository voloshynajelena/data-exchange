import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './binding/parent/parent.component';
import { FirstComponent as FirstServiceExchange } from './service-exchange/first/first.component';
import { FirstComponent } from './observable/first/first.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent, FirstComponent, FirstServiceExchange],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
