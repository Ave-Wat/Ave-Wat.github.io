import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../@core/services/project.service';
import { Project } from '../@core/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

}
