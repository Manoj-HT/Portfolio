import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'linkedin-icon, [linkedin-icon]',
  template: ` <div class="linkedin-container icon-container">
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
      </defs>
      <g transform="translate(-277.12 89.525)">
        <path
          d="m279.4-45.869c0-31.029 10.343-41.372 41.372-41.372s41.372 10.343 41.372 41.372c0 31.029-10.343 41.372-41.372 41.372s-41.372-10.343-41.372-41.372"
          style="fill:#fca;stroke-width:.51715"
        />
        <circle
          cx="320.7"
          cy="-45.869"
          r="25.189"
          style="fill:#1a1a1a;filter:url(#a);mix-blend-mode:normal;opacity:.55747;paint-order:fill markers stroke"
        />
        <circle
          cx="320.7"
          cy="-45.869"
          r="25.189"
          style="fill:#fca;paint-order:fill markers stroke"
        />
        <g transform="matrix(.37926 0 0 .37926 267.14 44.323)">
          <g transform="translate(-29.236)">
            <circle
              cx="140.93"
              cy="-258.05"
              r="7.5809"
              style="fill:#c5221f;paint-order:fill markers stroke"
            />
            <path
              d="m150.24-238.96v28.975h-10.218c-4.4417 0-6.6668-2.0024-6.6668-5.617v-36.021c0-0.0483 16.885 12.663 16.885 12.663z"
              style="fill:#4285f4;paint-order:fill markers stroke"
            />
            <path
              d="m133.35-251.62v-6.4296l12.405-5.8477 4.4792 3.3259v21.615z"
              style="fill:#c5221f;paint-order:fill markers stroke"
            />
          </g>
          <path
            d="m161.43-238.96 3e-5 -21.615-20.214 15.32-20.214-15.32 3e-5 21.615 20.214 15.32z"
            style="fill:#ea4335;paint-order:fill markers stroke"
          />
          <g transform="matrix(-1 0 0 1 311.67 0)">
            <circle
              cx="140.93"
              cy="-258.05"
              r="7.5809"
              style="fill:#fbbc04;paint-order:fill markers stroke"
            />
            <path
              d="m150.24-238.96v28.975h-10.218c-4.4417 0-6.6668-2.0024-6.6668-5.617v-36.021c0-0.0483 16.885 12.663 16.885 12.663z"
              style="fill:#34a853;paint-order:fill markers stroke"
            />
            <path
              d="m133.35-251.62v-6.4296l12.405-5.8477 4.4792 3.3259v21.615z"
              style="fill:#fbbc04;paint-order:fill markers stroke"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>`,
  styleUrl: './icon.styles.less',
})
export class LinkedInIcon {}
