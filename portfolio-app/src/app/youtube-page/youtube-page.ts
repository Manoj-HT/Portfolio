import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SafeUrlPipe } from './safe-url.pipe';

export interface VideoConfig {
  title: string;
  description: string;
  thumbnail?: string;
  url: string;
}

export interface CategoryConfig {
  name: string;
  videos: VideoConfig[];
  type?: 'long-form' | 'shorts';
}

@Component({
  selector: 'youtube-page',
  imports: [SafeUrlPipe],
  templateUrl: './youtube-page.html',
  styleUrl: './youtube-page.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class YoutubePage {
  youtubeChannelUrl = 'https://www.youtube.com/@CodeMagi';

  categories: CategoryConfig[] = [
    {
      name: 'Hello Kannada',
      type: 'long-form',
      videos: [
        {
          title: 'What is Hello Kannada? | Episode 1',
          description: 'A series on building my app from scratch—sharing lessons, mistakes, and vibe coding while making Kannada more accessible.',
          url: 'https://www.youtube.com/embed/x9LpuacZsHI?si=9YuXE9nMHc3UGbHB',
        },  
        {
          title: 'KCMS | Episode 2',
          description: 'In this video, I walk through my approach to designing and structuring a pseudo-backend.',
          url: 'https://www.youtube.com/embed/lvQILwI696w?si=gqlGdezmTJBHKj3l',
        },
        {
          title: 'UMS | Episode 3',
          description: 'This video outlines how user data is managed with a privacy-first approach while enabling manual synchronization to user-selected servers.',
          url: 'https://www.youtube.com/embed/QKx5L5-Mmpw?si=svKkXIV9WSpkCPEE',
        },
        {
          title: 'The handshake | EP 4 ',
          description: 'Building a Backend with ZERO Databases | Hello-Kannada: The handshake | EP 4 ',
          url: 'https://www.youtube.com/embed/4vMC4hGh9JQ?si=CdG0STcGfPPAbtQk',
        }
      ],
    },
    {
      name: 'Playground designs',
      type: 'shorts',
      videos: [
        {
          title: 'Design Concept A',
          description: 'Creating beautiful micro animations and CSS tricks.',
          thumbnail: 'https://via.placeholder.com/320x180.png?text=Playground+1',
          url: 'https://www.youtube.com/embed/TODO_VIDEO_ID_3',
        },
        {
          title: 'Design Concept B',
          description: 'Building an interactive dashboard layout.',
          thumbnail: 'https://via.placeholder.com/320x180.png?text=Playground+2',
          url: 'https://www.youtube.com/embed/TODO_VIDEO_ID_4',
        },
      ],
    },
  ];
}
