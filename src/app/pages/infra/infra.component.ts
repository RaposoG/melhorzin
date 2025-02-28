import { Component } from '@angular/core'
import { HeaderComponent } from '../../header/header.component'

@Component({
  selector: 'app-infra',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './infra.component.html',
  styleUrl: './infra.component.scss',
})
export class InfraComponent {}
