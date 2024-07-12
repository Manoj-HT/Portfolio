import { Component, inject } from '@angular/core';
import { NavListType, NavService } from '../nav-service/nav.service';
import { Router } from '@angular/router';
import { ThemeChangerService } from '../../utilities/theme-changer/theme-changer.service';
import { ThemeComponent } from '../themer/themer.component';
const SideMenuImports = [ThemeComponent]
@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [SideMenuImports],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less', '../title-style.less'],
})
export class SideMenuComponent {
  private navService = inject(NavService);
  private route = inject(Router);
  isTitle = this.navService.isTitleOn;
  navList = this.navService.navList;
  isTitleStyle = this.navService.isTitleStyle;
  navClicked(item: NavListType) {
    this.navService.setBackgroundCurveForLi(item.routeLink);
    this.navService.setBodyAnimation();
    setTimeout(() => {
      this.route.navigate([item.routeLink]);
    }, 300);
  }

  isThemeChange = false;

  changeTheme() {
    this.isThemeChange = !this.isThemeChange;
    let div = document.getElementById("chevron-wrapper") as HTMLDivElement
    if (this.isThemeChange) {
      div.style.transform = "rotate(180deg)"
    }else{
      div.style.transform = "rotate(0deg)"
    }
  }

}
