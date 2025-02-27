import { Component, HostListener, inject, signal } from '@angular/core';
import { NavListType, NavService } from '../nav-service/nav.service';
import { Router } from '@angular/router';
import { ThemeComponent } from '../themer/themer.component';
const TopMenuImports = [ThemeComponent];
@Component({
    selector: 'top-menu',
    imports: [TopMenuImports],
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.less', '../title-style.less']
})
export class TopMenuComponent {
  private navService = inject(NavService);
  private route = inject(Router);
  isTitle = this.navService.isTitleOn;
  isTitleStyle = this.navService.isTitleStyle;
  isOpen = signal(false);
  setOpen() {
    this.isOpen.update((currentState) => !currentState);
  }
  navList = this.navService.navList;
  navClicked(item: NavListType) {
    this.navService.setBodyAnimation();
    this.setOpen();
    setTimeout(() => {
      this.route.navigate([item.routeLink]);
    }, 300);
  }


  @HostListener('document:click',['$event'])
  onDocumentClick(event: Event) {
    const navbar = document.getElementById('navbar') as HTMLDivElement;
    if (!(navbar && navbar.contains(event.target as Node))){
      if(this.isOpen()){
        this.isOpen.set(false);
      }
    }
  }

}
