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

}
