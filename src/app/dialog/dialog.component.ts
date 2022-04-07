import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {

  @Input() visible: boolean | undefined;

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @ViewChild('dialogRef') dialogName: ElementRef | undefined;

  ngOnChanges(): void {
    if(!this.dialogName) return;
    if(this.visible) {
      this.dialogName.nativeElement.showModal()
    } else {
      this.dialogName.nativeElement.close()
    }
  }

  handleCloseDialog(): void {
    if(!this.dialogName) return;
    this.dialogName.nativeElement.close()

    this.onClose.emit();
  }
}

