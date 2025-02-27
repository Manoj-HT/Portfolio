import {
  Component,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavService } from './navigation/nav-service/nav.service';
import { ThemeChangerService } from './utilities/theme-changer/theme-changer.service';
import { filter } from 'rxjs';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
const AppImports = [NavigationComponent, RouterOutlet];

@Component({
    selector: 'app-root',
    imports: [AppImports],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  title = 'Manoj_HT';
  private navService = inject(NavService);
  private themeChanger = inject(ThemeChangerService);
  private route = inject(Router);
  isBodyStyle = this.navService.isBodyStyle;
  isInitialRoute = true;
  platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.themeChanger.setMode('dark');
        }
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {         
          this.themeChanger.setMode('light');
        }
        this.routeConfig()
        this.themeChanger.setInitialTheme();
      }
    });
  }
  ngOnInit(): void {

  }

  routeConfig() {
    this.route.events
      .pipe(filter((events) => events instanceof NavigationEnd))
      .subscribe({
        next: (res) => {
          let url = (res as any)['url'] as string;
          if (this.isInitialRoute) {
            this.navService.setBackgroundCurveForLi(`/${url.split('/')[1]}`);
            this.isInitialRoute = false;
          }
        },
      });
  }
}
