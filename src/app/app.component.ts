import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Dialog';

  visible: boolean;
  
  @Output()
  showDialog: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.visible = false;
  }

  handleShowDialog() {
    this.visible = true;
  }

  handleCloseDialog() {
    this.visible = false;
  }

}
