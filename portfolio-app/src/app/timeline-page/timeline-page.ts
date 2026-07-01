import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'timeline-page',
  imports: [],
  templateUrl: './timeline-page.html',
  styleUrl: './timeline-page.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class TimelinePage {
  experience = [
    {
      company: 'Neighborly India GCC',
      timePeriod: '2025 - present',
      role: 'Front End Engineer',
      responsibilities:
        'Working on Opus 2.0 and Customer Portal, developing intricate angular architectures and MS AADB2C integration.',
      technologies: 'Angular, Node.js, React.js, Azure',
      achievements:
        'Revamped the customer portal to support a heavy influx of users, reducing load times by 40%.',
    },
    {
      company: 'Ascendion Technologies',
      timePeriod: '2024 - 2025',
      role: 'Software Engineer',
      responsibilities: 'Developed FRM tools for enterprise internal risk assessment systems.',
      technologies: 'React.js, TypeScript',
      achievements:
        'Improved rendering efficiency in data-heavy components by migrating to functional updates.',
    },
    {
      company: 'Onnet Systems India Pvt Ltd',
      timePeriod: '2022 - 2024',
      role: 'Frontend Developer',
      responsibilities:
        'Mux and Scrambler software creation and live tracking statistics dashboard.',
      technologies: 'Angular, Typescript, Node.js',
      achievements: 'Led a team of 3 developers to completely redesign the company DHC CMS.',
    },
    {
      company: 'Hydrolines India Pvt Ltd',
      timePeriod: '2020 - 2021',
      role: 'Associate',
      responsibilities:
        'General engineering responsibilities before shifting fields to computer science.',
      technologies: 'N/A',
      achievements: 'Maintained 100% SLA for all deliverables.',
    },
  ];

  education = [
    {
      degree: 'Data science and Artificial Intelligence',
      university: 'PES University, Bangalore',
      timePeriod: 'Present',
      achievements: 'Top 10% of class, actively participating in AI/ML hackathons.',
    },
    {
      degree: 'Mechanical Engineering',
      university: 'GM Institute of Technology, Davangere',
      timePeriod: '2021',
      achievements: 'Graduated with First Class with Distinction.',
    },
  ];
}
