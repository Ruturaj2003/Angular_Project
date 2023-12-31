import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed: boolean = true;

  @Output() tabSelected = new EventEmitter<string>();

  onSelect(tab: string) {
    this.tabSelected.emit(tab);
  }
}
