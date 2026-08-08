import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { DialogBox } from './dialog-box/dialog-box';
import { DialogService } from './dialog.service';
import { Background } from './background/background';
import { BackgroundService } from './background/background.service';

@Component({
  selector: 'portfolio-root',
  imports: [RouterOutlet, NavBar, DialogBox, Background],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-app');
  public readonly isRouting = signal(false);
  public readonly isPrivacyModule = signal(false);
  public backgroundService = inject(BackgroundService);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isRouting.set(true);
        // Ensure any open dialog closes when navigating to a new route
        this.dialogService.close();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects || event.url;
          this.isPrivacyModule.set(
            url.startsWith('/privacy-policy') ||
            url.startsWith('/foodanalyzer/privacy-policy') ||
            url.startsWith('/privacy')
          );
        }
        // Small timeout to ensure DOM finishes swap before fading in
        setTimeout(() => this.isRouting.set(false), 50);
      }
    });
  }
}
