import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'dialog-box',
  imports: [],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class DialogBox {
  dialogService = inject(DialogService);

  closeDialog() {
    this.dialogService.close();
  }
}
