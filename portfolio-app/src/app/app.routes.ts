import { Routes } from '@angular/router';

const delayResolver = () => new Promise(resolve => setTimeout(resolve, 300));

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home-page/home-page').then(m => m.HomePage), resolve: { delay: delayResolver } },
  { path: 'projects', loadComponent: () => import('./projects-skills-page/projects-skills-page').then(m => m.ProjectsSkillsPage), resolve: { delay: delayResolver } },
  { path: 'experience', loadComponent: () => import('./timeline-page/timeline-page').then(m => m.TimelinePage), resolve: { delay: delayResolver } },
  { path: 'youtube', loadComponent: () => import('./youtube-page/youtube-page').then(m => m.YoutubePage), resolve: { delay: delayResolver } },
  { path: 'contact', loadComponent: () => import('./contact-page/contact-page').then(m => m.ContactPage), resolve: { delay: delayResolver } },
  { path: '**', redirectTo: '' }
];
