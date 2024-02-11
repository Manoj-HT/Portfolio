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
    this.navService.setTitle(false)
  }
  ngOnDestroy(): void {
    this.navService.setTitle(true)
  }
}
