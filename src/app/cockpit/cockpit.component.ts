import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new Subject<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new Subject<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.next({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.next({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
