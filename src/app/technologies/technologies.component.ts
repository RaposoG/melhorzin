import { Component, computed, effect, inject, signal } from '@angular/core'
import { TechnologyComponent } from '../technology/technology.component'
import { CapitalizeFirstLetterPipe } from '../pipes/capitalize-first-letter.pipe'
import { CommonModule } from '@angular/common'
import { TechService } from '../service/tech.service'
import { Technology, Technologies } from '../types/Technology'

type groupedTechnologies = Technology[][]

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TechnologyComponent, CapitalizeFirstLetterPipe, CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  private techService = inject(TechService)
  showRelevantOnly = signal<boolean>(false)
  protected technologiesList = this.techService.techs.data
  protected technologiesListByCategory = computed(() =>
    this.groupByCategory(Object.values(this.technologiesList())),
  )
  protected filteredListByCategory = computed(() =>
    this.filterByRelevance(
      this.technologiesListByCategory(),
      this.showRelevantOnly(),
    ),
  )

  groupByCategory(technologies: Technology[]) {
    let groupedTechnologies: groupedTechnologies = []
    const key = 'category'

    let currentTechCategory: string = ''

    for (const tech of technologies) {
      const techCategory = tech[key]

      if (techCategory !== currentTechCategory) {
        groupedTechnologies.push([])
        currentTechCategory = techCategory
      }

      groupedTechnologies[groupedTechnologies.length - 1].push(tech)
    }

    return groupedTechnologies
  }

  toggleRelevanceFilter() {
    this.showRelevantOnly.update((value) => !value)
  }

  filterByRelevance(
    technologiesListByCategory: groupedTechnologies,
    showRelevantOnly: boolean,
  ) {
    return technologiesListByCategory
      .map((categoryList) =>
        showRelevantOnly
          ? categoryList.filter((tech) => tech.isRelevant)
          : categoryList,
      )
      .filter((categoryList) => categoryList.length > 0)
  }
}
