import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { DialogBox } from './dialog-box/dialog-box';
import { DialogService } from './dialog.service';

@Component({
  selector: 'portfolio-root',
  imports: [RouterOutlet, NavBar, DialogBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-app');
  public readonly isRouting = signal(false);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isRouting.set(true);
        // Ensure any open dialog closes when navigating to a new route
        this.dialogService.close();
      } else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        // Small timeout to ensure DOM finishes swap before fading in
        setTimeout(() => this.isRouting.set(false), 50);
      }
    });
  }
}
