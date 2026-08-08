import { Component, inject } from '@angular/core';
import { BackgroundService } from './background.service';

@Component({
  selector: 'background-component',
  standalone: true,
  imports: [],
  templateUrl: './background.html',
  styleUrl: './background.css',
})
export class Background {
  protected backgroundService = inject(BackgroundService);
}
