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
    anchor.href = 'https://firebasestorage.googleapis.com/v0/b/manoj-ht.appspot.com/o/Manoj-HT-Resume.pdf?alt=media&token=50430a0a-d7a7-4937-a4cc-5759eb6b3c86';
    anchor.target = '_blank';
    anchor.click();
    anchor.remove();
  }

  ngOnDestroy(): void {
    this.navService.setTitle(true);
  }
}
