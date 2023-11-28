import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Project';

  curentTab = 'recipe';
  onNavigate(event: string) {
    this.curentTab = event;
  }
}
