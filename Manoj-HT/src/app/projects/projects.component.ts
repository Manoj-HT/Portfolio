import { Component } from '@angular/core';
import { ThemeComponent } from '../navigation/themer/themer.component';
const ProjectsImport = [ThemeComponent]
@Component({
  selector: 'projects-page',
  standalone: true,
  imports: [ProjectsImport],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {

}
