import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {  
  @Output() toggleSidenav : EventEmitter<any> = new EventEmitter()

  constructor() {}

  username!: string

  toggleSidebar() {
    this.toggleSidenav.emit()
  }



}
