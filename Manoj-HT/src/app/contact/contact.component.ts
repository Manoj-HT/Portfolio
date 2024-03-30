import {
  Component,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { IconActionType, Icons } from '../utilities/icons/icons';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [Icons],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less',
})
export class ContactComponent {
  platformId = inject(PLATFORM_ID);
  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.generateCircle();
      }
    });
  }

  generateCircle() {
    let container = document.querySelector('.container') as HTMLDivElement;
    let icons = document.querySelectorAll('.icon') as NodeListOf<HTMLElement>;
    let radius = 300;
    let numCircles = icons.length;
    let angleIncrement = (2 * Math.PI) / numCircles;

    icons.forEach((icon, index) => {
      let angle = angleIncrement * index;
      let x =
        Math.cos(angle) * radius +
        container.offsetWidth / 2 -
        icon.offsetWidth / 2;
      let y =
        Math.sin(angle) * radius +
        container.offsetWidth / 2 -
        icon.offsetWidth / 2;
      icon.style.left = x + 'px';
      icon.style.top = y + 'px';
    });
  }

  iconClicked(e: IconActionType) {
    let { name, action } = e;
  }

  iconHovered(e: IconActionType) {
    let { name, action } = e;
  }
}
