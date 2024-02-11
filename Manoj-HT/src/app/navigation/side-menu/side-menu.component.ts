import { Component, inject } from '@angular/core';
import { NavListType, NavService } from '../nav-service/nav.service';
import { Router } from '@angular/router';
import { ThemeChangerService } from '../../utilities/theme-changer/theme-changer.service';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less', '../title-style.less', './side-menu.component.scss'],
})
export class SideMenuComponent {
  private navService = inject(NavService);
  private route = inject(Router);
  private themeService = inject(ThemeChangerService)
  isTitle = this.navService.isTitleOn;
  navList = this.navService.navList;
  isTitleStyle = this.navService.isTitleStyle;
  colorNames = Object.keys(this.themeService.colors)
  navClicked(item: NavListType) {
    this.navService.setBackgroundCurveForLi(item.routeLink);
    this.navService.setBodyAnimation();
    setTimeout(() => {
      this.route.navigate([item.routeLink]);
    }, 300);
  }
  changeTheme(name: string){
    this.themeService.setTheme(name)
  }
}
