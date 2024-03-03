import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavService } from '../navigation/nav-service/nav.service';
import jsPDF from 'jspdf';
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
    let print = document.getElementById('print') as HTMLDivElement;
    print.style.display = 'block';
    let pdf = new jsPDF();
    let pageWidth = pdf.internal.pageSize.width;
    pdf.html(print, {
      callback: (doc) => {
        print.style.display = 'none';
        doc.save('Manoj-HT-Resume.pdf');
      },
      width: pageWidth,
      windowWidth: 1000,
    });
  }

  ngOnDestroy(): void {
    this.navService.setTitle(true);
  }
}
