import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavService } from '../navigation/nav-service/nav.service';
import { AssetVariablesType, AssetsManagerService } from '../utilities/assets-manager/assets-manager.service';
@Component({
    selector: 'resume-cv-page',
    imports: [],
    templateUrl: './resume-cv.component.html',
    styleUrl: './resume-cv.component.less'
})
export class ResumeCVComponent implements OnInit, OnDestroy {
  private navService = inject(NavService);
  ngOnInit(): void {
    this.navService.setTitle(false);
  }

  private assetManager = inject(AssetsManagerService);

  downloadResume() {
    this.assetManager.getVariables().subscribe({
      next:(res)=>{
        let anchor = document.createElement('a') as HTMLAnchorElement;
        anchor.href = res.resumeLink
        anchor.target = '_blank';
        anchor.click();
        anchor.remove();
      }
    })
  }

  ngOnDestroy(): void {
    this.navService.setTitle(true);
  }
}
