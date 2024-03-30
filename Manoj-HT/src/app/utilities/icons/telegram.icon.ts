import { Component, EventEmitter, Output } from '@angular/core';
import { IconActionType } from './icons';

@Component({
  standalone: true,
  selector: 'telegram-icon, [telegram-icon]',
  template: ` <div
    class="telegram-container icon-container"
    (mouseenter)="handleIconMouseEnter()"
    (mouseleave)="handleIconMouseLeave()"
    (click)="handleIconClick()"
  >
    <svg
      width="90mm"
      height="90mm"
      version="1.1"
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="a"
          x="-.16606"
          y="-.16606"
          width="1.3321"
          height="1.3321"
          style="color-interpolation-filters:sRGB"
        >
          <feGaussianBlur stdDeviation="3.4858133" />
        </filter>
      </defs>
      <g transform="translate(-176.84 90.869)">
        <path
          d="m180.47-45.869c0-31.029 10.343-41.372 41.372-41.372s41.372 10.343 41.372 41.372c0 31.029-10.343 41.372-41.372 41.372s-41.372-10.343-41.372-41.372"
          style="fill:#24a1df;stroke-width:.51715"
        />
        <circle
          cx="221.7"
          cy="-45.869"
          r="25.189"
          style="fill:#1a1a1a;filter:url(#a);mix-blend-mode:normal;opacity:.72354;paint-order:fill markers stroke"
        />
        <circle
          cx="221.7"
          cy="-45.869"
          r="25.189"
          style="fill:#24a1df;paint-order:fill markers stroke"
        />
        <path
          d="m206.2-46.735c-1.6628 0.66279-1.9309 1.3299-0.42994 1.9596l3.9274 1.5544c2.1864 0.80759 3.1384 0.42264 4.0514 0l10.652-6.4594c0.53267-0.30613 0.48342-0.14755 0.22655 0.17685l-6.5873 7.4401c-0.91536 0.96871-0.58352 1.5706 0.0786 2.0753l9.9407 6.1327c1.2931 0.79715 1.892 0.39843 2.1194-0.64019l3.2945-22.018c0.17181-1.0169-0.18869-1.4528-1.4588-0.89571z"
          style="fill:#fff;paint-order:fill markers stroke"
        />
      </g>
    </svg>
  </div>`,
  styleUrl: './icon.styles.less',
})
export class TelegramIcon {
  @Output() iconClicked = new EventEmitter<IconActionType>();
  @Output() iconEnter = new EventEmitter<IconActionType>();
  @Output() iconLeave = new EventEmitter<IconActionType>();
  iconAction: IconActionType = {
    name: 'telegram',
    action: 'click',
  };
  handleIconClick() {
    this.iconClicked.emit({ ...this.iconAction, action: 'click' });
  }
  handleIconMouseEnter() {
    this.iconEnter.emit({ ...this.iconAction, action: 'enter' });
  }
  handleIconMouseLeave() {
    this.iconLeave.emit({ ...this.iconAction, action: 'leave' });
  }
}
