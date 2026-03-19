import { Component, inject } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'dialog-box',
  imports: [],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
  standalone: true
})
export class DialogBox {
  dialogService = inject(DialogService);

  closeDialog() {
    this.dialogService.close();
  }
}
