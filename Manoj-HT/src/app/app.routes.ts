import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeCVComponent } from './resume-cv/resume-cv.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => HomeComponent,
  },
  {
    path: 'projects',
    loadComponent: () => ProjectsComponent,
  },
  {
    path: 'work-experience',
    loadComponent: () => WorkExperienceComponent,
  },
  {
    path: 'skills',
    loadComponent: () => SkillsComponent,
  },
  {
    path: 'resume',
    loadComponent: () => ResumeCVComponent,
  },
  {
    path: 'blogs',
    loadComponent: () => BlogComponent,
  },
  {
    path: 'contact',
    loadComponent: () => ContactComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
