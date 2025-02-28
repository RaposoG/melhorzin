import {
  Component,
  Input,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Project } from '../types/Project'
import { TechService } from '../service/tech.service'

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  techService = inject(TechService)
  techs = this.techService.techs.data
  @Input({
    required: true,
    transform: (project: Project) => {
      return signal(project)
    },
  })
  project!: WritableSignal<Project>

  @Input({ required: true, alias: 'ngClass' }) customClass!:
    | string
    | string[]
    | Set<string>
    | { [klass: string]: any }

  techsInProject = computed(() =>
    this.project().techs.map((tech) => this.techs()[tech]),
  )
}
