import { Component, inject } from '@angular/core';
import { ThemeChangerService } from '../../utilities/theme-changer/theme-changer.service';

@Component({
  selector: 'theme',
  standalone: true,
  imports: [],
  templateUrl: './themer.component.html',
  styleUrls: ['./themer.component.less', './day-night_toggle.scss'],
})
export class ThemeComponent {
  private themeService = inject(ThemeChangerService);
  colorNames = Object.keys(this.themeService.colors);
  themeMode = this.themeService.themeMode;
  changeTheme(name: string) {
    this.themeService.setTheme(name);
    localStorage.setItem('theme', name);
  }

  setMode() {
    if (this.themeMode()) {
      sessionStorage.setItem('mode', 'light')
      this.themeService.setMode('light');
    } else {
      sessionStorage.setItem('mode', 'dark')
      this.themeService.setMode('dark');
    }
  }
}
