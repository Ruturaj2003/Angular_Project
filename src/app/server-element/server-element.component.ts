import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  // Parent Component gives the Values by Property Binding
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };
}
