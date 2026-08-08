import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface AppPrivacyCard {
  id: string;
  name: string;
  route: string;
  category: string;
  icon: string;
  badge: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
}

@Component({
  selector: 'privacy-policy-hub',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy-policy-hub.html',
  styleUrl: './privacy-policy-hub.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class PrivacyPolicyHub {
  apps: AppPrivacyCard[] = [
    {
      id: 'food-analyzer',
      name: 'FoodAnalyzer',
      route: '/privacy-policy/food-analyzer',
      category: 'Health & Nutrition',
      icon: '🥗',
      badge: 'Local-First & Privacy-First',
      description: 'AI-assisted dietary, nutrition, and exercise tracking built with local IndexedDB storage, zero ad monetization, on-demand data erasure, and transparent cloud backup.',
      lastUpdated: 'August 8, 2026',
      effectiveDate: 'August 8, 2026',
    },
  ];
}
