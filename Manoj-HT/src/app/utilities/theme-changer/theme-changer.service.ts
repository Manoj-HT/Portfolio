import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangerService {
  setMode(mode: 'light' | 'dark') {
    const root = document.documentElement;
    if (mode == 'dark') {
      root.style.setProperty('--theme-background', 'black');
      root.style.setProperty('--theme-background-inverse', 'white');
      root.style.setProperty('--font-color', 'white');
    } else if (mode == 'light') {
      root.style.setProperty('--theme-background', 'white');
      root.style.setProperty('--theme-background-inverse', 'black');
      root.style.setProperty('--font-color', 'black');
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
