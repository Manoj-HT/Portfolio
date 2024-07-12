import { Component, EventEmitter, Output } from '@angular/core';
import { IconActionType } from './icons';

@Component({
  standalone: true,
  selector: 'whatsapp-icon, [whatsapp-icon]',
  template: ` <div
    class="whatsapp-container icon-container"
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
          x="-.16671"
          y="-.16606"
          width="1.3334"
          height="1.3321"
          style="color-interpolation-filters:sRGB"
        >
          <feGaussianBlur stdDeviation="3.7714865" />
        </filter>
      </defs>
      <g transform="translate(-766.84 -87.286)">
        <path
          transform="matrix(.51715 0 0 .51715 673.33 90.914)"
          d="m187.83 80c0-60 20-80 80-80s80 20 80 80-20 80-80 80-80-20-80-80"
          style="fill:#0dc143"
        />
        <g
          transform="matrix(.83188 0 0 .83188 541.98 247.99)"
          style="filter:url(#a)"
        >
          <path
            d="m320.14-147.86c-0.14778 1.2427-1.4784 2.5069-2.044 3.0238-0.20088 2.5862 4.5587 7.3385 9.4293 8.5946l2.7787-3.3776h0.7167l5.7216 2.6637 0.0597 1.732c-0.68461 3.3296-3.2096 4.5038-6.1379 4.5433-6.3306-1.2081-14.858-5.2042-19.021-16.048-0.15203-0.27592-0.71257-4.9888 3.2434-7.2639l2.6522 0.10135z"
          />
          <path
            d="m300.64-129.09c-6.4584-11.692-3.4512-26.345 7.0904-34.549s25.484-7.5189 35.232 1.6139 11.403 23.999 3.9022 35.052c-7.5003 11.053-21.927 15.007-34.014 9.3227l-13.935 2.795z"
          />
        </g>
        <path
          d="m792.07 140.6c-5.3727-9.7266-2.871-21.916 5.8984-28.741 8.7694-6.8242 21.2-6.2548 29.309 1.3426 8.1088 7.5974 9.4856 19.965 3.2462 29.159-6.2394 9.1947-18.241 12.484-28.296 7.7554l-11.592 2.3251z"
          style="fill:#0dc143;stroke-width:4.9913;stroke:#fff"
        />
        <path
          d="m808.29 124.98c-0.12294 1.0338-1.2298 2.0854-1.7004 2.5155-0.16711 2.1514 3.7923 6.1048 7.8441 7.1497l2.3116-2.8097h0.59621l4.7597 2.2159 0.0497 1.4408c-0.56952 2.7698-2.67 3.7466-5.106 3.7795-5.2664-1.005-12.36-4.3292-15.823-13.35-0.12647-0.22953-0.59278-4.1501 2.6981-6.0427l2.2063 0.0843z"
          style="fill:#fff"
        />
      </g>
    </svg>
  </div>`,
  styleUrl: './icon.styles.less',
})
export class WhatsAppIcon {
  @Output() iconClicked = new EventEmitter<IconActionType>();
  @Output() iconEnter = new EventEmitter<IconActionType>();
  @Output() iconLeave = new EventEmitter<IconActionType>();
  iconAction: IconActionType = {
    name: 'whatsapp',
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
