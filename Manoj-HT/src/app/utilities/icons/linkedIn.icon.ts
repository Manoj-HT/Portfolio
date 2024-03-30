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
      <g transform="translate(-277.12 183.75)">
        <path
          d="m279.4-140.09c0-31.029 10.343-41.372 41.372-41.372s41.372 10.343 41.372 41.372c0 31.029-10.343 41.372-41.372 41.372s-41.372-10.343-41.372-41.372"
          style="fill:#007bb5;stroke-width:.51715"
        />
        <g transform="translate(-99,-94.222)">
          <g transform="translate(198)">
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
              style="fill:#007bb5;paint-order:fill markers stroke"
            />
          </g>
          <path
            d="m412.02-34.647v-18.481h-4.6677v18.481zm-2.3149-26.185c-1.5559 0-2.6185 1.1005-2.6185 2.5426 0 1.3662 1.0246 2.5046 2.5805 2.5046 1.6318 0 2.6564-1.1385 2.6564-2.5046-0.0379-1.4421-1.0246-2.5426-2.6185-2.5426zm7.3622 26.185h4.6677v-10.891c0-0.53129 0.0759-1.1005 0.22769-1.48 0.49334-1.4041 1.7836-2.7323 3.6431-2.7323 2.5426 0 3.5293 2.0113 3.5293 4.6677v10.436h4.6677v-10.967c0-5.8442-3.3395-7.9314-6.5652-7.9314-3.0739 0-5.0852 1.7457-5.9201 3.1877h-0.11385l-0.2277-2.7703h-4.0606c0.0759 1.5939 0.1518 3.3775 0.1518 5.5026z"
            style="fill:#fff;paint-order:fill markers stroke;stroke-linecap:round;stroke-linejoin:bevel;stroke-width:3.5857"
            aria-label="in"
          />
        </g>
      </g>
    </svg>
  </div>`,
  styleUrl: './icon.styles.less',
})
export class LinkedInIcon {}
