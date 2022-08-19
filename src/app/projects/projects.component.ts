import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ProjectService } from '../@core/services/project.service';
import { Project } from '../@core/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private projectService: ProjectService, private renderer: Renderer2) { 
      this.renderer.addClass(document.body, 'dark-footer');
  }

  ngOnInit(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  handleIndex(i: any) {
    if(i + 1 < 10){
      return "0" + (i + 1).toString();
    } else {
      return i + 1
    }
  }

}
