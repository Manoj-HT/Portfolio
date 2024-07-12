import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
const NavImports = [SideMenuComponent, TopMenuComponent]

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [NavImports],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.less'
})
export class NavigationComponent {

}
