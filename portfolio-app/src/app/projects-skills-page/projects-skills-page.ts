import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DialogService, DialogData } from '../dialog.service';

@Component({
  selector: 'projects-skills-page',
  imports: [],
  templateUrl: './projects-skills-page.html',
  styleUrl: './projects-skills-page.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class ProjectsSkillsPage {
  dialogService = inject(DialogService);

  projects = [
    {
      name: 'IPTV SMS, MUX & Scrambler, DRM',
      description:
        'Built a comprehensive SMS and MUX system for IPTV with Digital Rights Management. Involved heavy data metrics and live statistics dashboards.',
      technologies: 'Angular, Node.js, TypeScript',
      timePeriod: '2022 - 2024',
      company: 'Onnet Systems India Pvt Ltd',
    },
    {
      name: 'IAF CMS & SMS',
      description:
        'Content Management System and Subscriber Management System developed specifically for IAF.',
      technologies: 'Angular, Express.js',
      timePeriod: '2022 - 2024',
      company: 'Onnet Systems India Pvt Ltd',
    },
    {
      name: 'DHC CMS',
      description:
        'Digital Health Care Content Management System for managing extensive health records and scheduling.',
      technologies: 'React.js, Node.js, MongoDB',
      timePeriod: '2022 - 2024',
      company: 'Onnet Systems India Pvt Ltd',
    },
    {
      name: 'Metadata tracker',
      description: 'A tool for tracking media metadata continuously across distributed servers.',
      technologies: 'Angular, Node.js',
      timePeriod: '2022 - 2024',
      company: 'Onnet Systems India Pvt Ltd',
    },
    {
      name: 'FRM',
      description: 'Financial Risk Management system for internal risk assessment and tracking.',
      technologies: 'React.js, TypeScript',
      timePeriod: '2024 - 2025',
      company: 'Ascendion Technologies',
    },
    {
      name: 'Opus 2.0',
      description:
        'A comprehensive property management platform overhaul including dynamic form builder.',
      technologies: 'Angular, Node.js',
      timePeriod: '2025 - present',
      company: 'Neighborly India GCC',
    },
    {
      name: 'Customer Portal',
      description: 'A dedicated portal for customers to track service requests and billing.',
      technologies: 'React.js, MongoDB',
      timePeriod: '2025 - present',
      company: 'Neighborly India GCC',
    },
    {
      name: 'MS AADB2C Integration',
      description:
        'Azure Active Directory B2C integration for secure customer identity and access management.',
      technologies: 'Angular, Azure',
      timePeriod: '2025 - present',
      company: 'Neighborly India GCC',
    },
  ].reverse();

  skills = [
    {
      name: 'React.js',
      description:
        'Extensive experience in building rich interactive UIs, managing global state with Redux/Context API, and optimizing rendering performance.',
      category: 'Frontend Framework',
      proficiency: 'Advanced',
    },
    {
      name: 'Angular',
      description:
        'Deep knowledge of RxJS, NgRx, lazy loading, and complex reactive forms for enterprise level applications.',
      category: 'Frontend Framework',
      proficiency: 'Advanced',
    },
    {
      name: 'Node.js',
      description:
        'Building scalable backend services, RESTful APIs, and real-time socket connections.',
      category: 'Backend Environment',
      proficiency: 'Intermediate',
    },
    {
      name: 'Express.js',
      description:
        'Middleware development, route handling, and integration of authentication strategies.',
      category: 'Backend Framework',
      proficiency: 'Intermediate',
    },
    {
      name: 'MongoDB',
      description: 'NoSQL database design, complex aggregations, and performance tuning.',
      category: 'Database',
      proficiency: 'Intermediate',
    },
    {
      name: 'TypeScript',
      description:
        'Strong typing, interfaces, advanced generics, and structural type systems for robust codebases.',
      category: 'Language',
      proficiency: 'Advanced',
    },
  ];

  openProjectDialog(project: any) {
    this.dialogService.open({
      type: 'project',
      title: project.name,
      description: project.description,
      technologies: project.technologies,
      timePeriod: project.timePeriod,
      company: project.company,
    });
  }

  openSkillDialog(skill: any) {
    this.dialogService.open({
      type: 'skill',
      title: skill.name,
      description: skill.description,
      category: skill.category,
      proficiency: skill.proficiency,
    });
  }
}
