import { Header } from '@/components/header/header'
import { BenefitsView } from '@/views/benefits.view/benefits-view'
import { CompetenceView } from '@/views/competence.view/competence.view'
import { JobsView } from '@/views/jobs.view/jobs.view'
import { SocialView } from '@/views/social.view/social.view'
import { TestimonialsView } from '@/views/testimonials.view/testimonials.view'

export default function Home() {
  return (
    <>
      <Header />
      <BenefitsView />
      <CompetenceView />
      <JobsView />
      <TestimonialsView />
      <SocialView />
    </>
  )
}
