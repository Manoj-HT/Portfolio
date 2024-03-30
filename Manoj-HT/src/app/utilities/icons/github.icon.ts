import { Component, EventEmitter, Output } from '@angular/core';
import { IconActionType } from './icons';

@Component({
  standalone: true,
  selector: 'github-icon, [github-icon]',
  template: ` <div
    class="github-container icon-container"
    (mouseenter)="handleIconMouseEnter()"
    (mouseleave)="handleIconMouseLeave()"
    (click)="handleIconClick()"
  >
    <svg
      width="330"
      height="330"
      version="1.1"
      viewBox="0 0 87.312 87.312"
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
        <clipPath id="b">
          <circle
            cx="419.85"
            cy="-141.96"
            r="25.189"
            style="fill:#efefef;paint-order:fill markers stroke"
          />
        </clipPath>
      </defs>
      <g transform="translate(-376.19 185.62)">
        <path
          d="m378.48-141.96c0-31.029 10.343-41.372 41.372-41.372s41.372 10.343 41.372 41.372c0 31.029-10.343 41.372-41.372 41.372s-41.372-10.343-41.372-41.372"
          style="stroke-width:.51715"
        />
        <circle
          cx="419.85"
          cy="-141.96"
          r="25.189"
          style="fill:#fff;filter:url(#a);mix-blend-mode:normal;opacity:.84291;paint-order:fill markers stroke"
        />
        <circle
          cx="419.85"
          cy="-141.96"
          r="25.189"
          style="fill:#efefef;paint-order:fill markers stroke"
        />
        <path
          d="m412.14-117.31c0.5353-0.0669 1.3721-0.39439 1.3641-0.87143l0.22796-8.7032c0-1.4504 0.54221-2.968 1.7355-3.5298-5.881-0.15448-8.9301-2.652-10.648-6.4125-1.7181-3.7605-1.1978-5.8175-1.2132-6.7984-0.0153-0.98095 0.61585-4.6855 2.728-6.3942-0.68092-0.64446-0.96455-5.0574 0.20591-6.8684 2.625-0.39571 6.4307 1.9694 7.0116 2.7212 1.9796-0.63991 4.0641-0.93398 6.2398-0.92684 2.1757-7e-3 4.2602 0.28693 6.2398 0.92684 0.58096-0.7518 4.3866-3.1169 7.0116-2.7212 1.1705 1.811 0.88684 6.2239 0.20591 6.8684 2.1122 1.7087 2.7434 5.4132 2.728 6.3942-0.0153 0.98094 0.50494 3.0379-1.2132 6.7984-1.7181 3.7605-4.7672 6.258-10.648 6.4125 1.1933 0.56181 1.7355 2.0794 1.7355 3.5298l0.22796 8.7032c-8e-3 0.47704 0.82882 0.80453 1.3641 0.87143l-7.6516 0.60912z"
          clip-path="url(#b)"
          style="paint-order:fill markers stroke"
        />
        <path
          d="m400.05-131.06c0.44785-0.87185 3.0872-0.21059 3.8279 0.60591 0.74072 0.81649 2.4428 3.8085 4.2166 4.7055 1.7739 0.89702 5.7141-0.3704 7.1749 0.28629 1.4608 0.65669 2.0045 0.93734 1.9984 1.9025-6e-3 0.96513-0.13187 1.6042-2.2222 2.0624-2.0903 0.45812-7.004-0.93608-8.9567-2.4252-1.9527-1.4891-3.1842-4.6297-3.921-5.5698-0.73675-0.94011-2.5658-0.6957-2.1179-1.5676z"
          style="paint-order:fill markers stroke"
        />
      </g>
    </svg>
  </div>`,
  styleUrl: './icon.styles.less',
})
export class GitHubIcon {
  @Output() iconClicked = new EventEmitter<IconActionType>();
  @Output() iconEnter = new EventEmitter<IconActionType>();
  @Output() iconLeave = new EventEmitter<IconActionType>();
  iconAction: IconActionType = {
    name: 'github',
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
