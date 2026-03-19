import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit {
  isDarkMode = signal(true);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    const newTheme = this.isDarkMode() ? 'dark' : 'light';
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }
  }
}
