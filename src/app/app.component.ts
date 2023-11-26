import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Project';
  serverElements = [
    {
      type: 'server',
      name: 'Testing',
      content: 'Test Content',
    },
    {
      type: 'blueprint',
      name: 'Testing2',
      content: 'Test 2Content',
    },
  ];
}
