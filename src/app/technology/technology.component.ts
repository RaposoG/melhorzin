import { Component, Input } from '@angular/core'
import { Technology } from '../types/Technology'

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  @Input() technology!: Technology
}
