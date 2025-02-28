import { Component, effect, inject } from '@angular/core'
import { ProjectComponent } from '../project/project.component'
import { CommonModule } from '@angular/common'
import { ProjectService } from '../service/project.service'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectService = inject(ProjectService)
  protected projects = this.projectService.projetcs.data
}
