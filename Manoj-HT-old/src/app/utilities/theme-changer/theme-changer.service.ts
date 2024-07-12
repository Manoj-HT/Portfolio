import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangerService {
  themeMode = signal<boolean>(false);
  setMode(mode: 'light' | 'dark') {
    const root = document.documentElement;
    const modeSet = sessionStorage.getItem('mode') as string;
    if (modeSet == undefined) {
      if (mode == 'dark') {
        root.style.setProperty('--theme-background', 'black');
        root.style.setProperty('--theme-background-inverse', 'white');
        root.style.setProperty('--font-color', 'white');
        root.style.setProperty('--theme-filter', 'invert(1)');
        this.themeMode.set(true);
      } else if (mode == 'light') {
        root.style.setProperty('--theme-background', 'white');
        root.style.setProperty('--theme-background-inverse', 'black');
        root.style.setProperty('--font-color', 'black');
        root.style.setProperty('--theme-filter', 'invert(0)');
        this.themeMode.set(false);
      }
    } else {
      if (modeSet == 'light') {
        root.style.setProperty('--theme-background', 'white');
        root.style.setProperty('--theme-background-inverse', 'black');
        root.style.setProperty('--font-color', 'black');
        root.style.setProperty('--theme-filter', 'invert(0)');
        this.themeMode.set(false);
      } else {
        root.style.setProperty('--theme-background', 'black');
        root.style.setProperty('--theme-background-inverse', 'white');
        root.style.setProperty('--font-color', 'white');
        root.style.setProperty('--theme-filter', 'invert(1)');
        this.themeMode.set(true);
      }
    }
  }

  colors = {
    goldenYellow: 'rgb(255, 193, 37)',
    coralBrush: 'rgb(255, 134, 134)',
    mysticOrchid: 'rgb(98, 37, 209)',
    peachFuzz: 'rgb(255, 190, 152)',
    azureBreeze: 'rgb(44, 171, 244)',
    emaraldZest: 'rgb(100, 214, 100)',
  };

  setTheme(theme: string) {
    const root = document.documentElement;
    root.style.setProperty('--theme', (this.colors as any)[theme]);
  }

  setInitialTheme() {
    if (localStorage.getItem('theme')) {
      this.setTheme(localStorage.getItem('theme') as string);
    } else {
      let colorName = Object.keys(this.colors);
      const randomNumber = Math.floor(Math.random() * 6);
      this.setTheme(colorName[randomNumber]);
    }
  }
}
