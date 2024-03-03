import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavService } from '../navigation/nav-service/nav.service';
@Component({
  selector: 'app-resume-cv',
  standalone: true,
  imports: [],
  templateUrl: './resume-cv.component.html',
  styleUrl: './resume-cv.component.less',
})
export class ResumeCVComponent implements OnInit, OnDestroy {
  private navService = inject(NavService);
  ngOnInit(): void {
    this.navService.setTitle(false);
  }

  downloadResume() {
    let anchor = document.createElement('a') as HTMLAnchorElement;
    anchor.href = 'assets/files/Manoj-HT-Resume.pdf';
    anchor.target = '_blank';
    anchor.click();
    anchor.remove();
  }

  ngOnDestroy(): void {
    this.navService.setTitle(true);
  }
}
