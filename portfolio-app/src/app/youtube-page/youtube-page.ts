import { Component } from '@angular/core';

export interface VideoConfig {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

export interface CategoryConfig {
  name: string;
  videos: VideoConfig[];
}

@Component({
  selector: 'youtube-page',
  imports: [],
  templateUrl: './youtube-page.html',
  styleUrl: './youtube-page.css',
  standalone: true
})
export class YoutubePage {
  youtubeChannelUrl = 'https://www.youtube.com/@CodeMagi';

  categories: CategoryConfig[] = [
    {
      name: 'Hello Kannada',
      videos: [
        {
          title: 'Hello Kannada Episode 1', // TODO: Update video info
          description: 'Introduction and getting started with programming concepts in Kannada.',
          thumbnail: 'https://via.placeholder.com/320x180.png?text=Thumbnail+1',
          url: 'https://www.youtube.com/embed/TODO_VIDEO_ID_1'
        },
        {
          title: 'Hello Kannada Episode 2', // TODO: Update video info
          description: 'Deep dive into frontend development and styling.',
          thumbnail: 'https://via.placeholder.com/320x180.png?text=Thumbnail+2',
          url: 'https://www.youtube.com/embed/TODO_VIDEO_ID_2'
        }
      ]
    },
    {
      name: 'Playground designs',
      videos: [
        {
          title: 'Design Concept A', // TODO: Update video info
          description: 'Creating beautiful micro animations and CSS tricks.',
          thumbnail: 'https://via.placeholder.com/320x180.png?text=Playground+1',
          url: 'https://www.youtube.com/embed/TODO_VIDEO_ID_3'
        },
        {
          title: 'Design Concept B', // TODO: Update video info
          description: 'Building an interactive dashboard layout.',
          thumbnail: 'https://via.placeholder.com/320x180.png?text=Playground+2',
          url: 'https://www.youtube.com/embed/TODO_VIDEO_ID_4'
        }
      ]
    }
  ];
}
