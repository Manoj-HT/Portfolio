import { Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackgroundService } from '../../background/background.service';

@Component({
  selector: 'food-analyzer-privacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './food-analyzer-privacy.html',
  styleUrl: './food-analyzer-privacy.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class FoodAnalyzerPrivacy implements OnInit, OnDestroy {
  private backgroundService = inject(BackgroundService);

  ngOnInit(): void {
    this.backgroundService.setCustomClass({
      classname: 'food-analyzer-bg',
      img: "2.svg"
    });
  }

  ngOnDestroy(): void {
    this.backgroundService.clearCustomClass();
  }
}
