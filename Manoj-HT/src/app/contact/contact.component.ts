import {
  Component,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import {
  IconActionType,
  Icons,
  SocialDetailsType,
  socialDetails,
} from '../utilities/icons/icons';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'contact-page',
    imports: [Icons],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.less'
})
export class ContactComponent {
  platformId = inject(PLATFORM_ID);
  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (window.screen.width > 768) {
          this.generateCircle();
        }
      }
    });
  }

  isDetail = signal(false);
  generateCircle() {
    let container = document.querySelector('.container') as HTMLDivElement;
    let icons = document.querySelectorAll('.icon') as NodeListOf<HTMLElement>;
    let radius = 300;
    if (window.screen.width <= 1000) {
      radius = 150;
    }
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

  socialDetails: SocialDetailsType = {
    id: '',
    href: '',
    linkName: '',
  };
  iconClicked(e: IconActionType) {
    let { name, action } = e;
    this.socialDetails = socialDetails[name];
    window.open(this.socialDetails.href, '_blank');
  }

  timeOutForSocialDetailDisplay!: NodeJS.Timeout;
  iconHovered(e: IconActionType) {
    this.clearTimeoutForSocialDetailDisplay();
    let { name, action } = e;
    if (action == 'enter') {
      this.isDetail.set(false);
      setTimeout(() => {
        this.isDetail.set(true);
        this.socialDetails = socialDetails[name];
      }, 1000);
    }
    if (action == 'leave') {
      this.addTimeoutForSocialDetailDisplay();
    }
  }

  addTimeoutForSocialDetailDisplay() {
    this.timeOutForSocialDetailDisplay = setTimeout(() => {
      this.isDetail.set(false);
    }, 3000);
  }

  clearTimeoutForSocialDetailDisplay() {
    clearTimeout(this.timeOutForSocialDetailDisplay);
  }
}
