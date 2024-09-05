import { Pipe, PipeTransform } from '@angular/core';
import { Project, ProjectType } from '../interfaces/project';

@Pipe({
    name: 'project',
    standalone: true,
})
export class ProjectPipe implements PipeTransform {
  transform(projects: Project[], type: ProjectType): Project[] {
    if (type.length == 3 && type.includes('all')) return projects;
    return projects.filter((project) => (project.type == type));
  }
}
