import type { Metadata } from 'next'
import SeanWong from '@/app/profiles/associates/seanwong/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Mun Loon',
  description: 'After 15 years in the social service sector, Mun Loon made a mid-career switch to the legal sector.'

}

export default  function PageLayout() {
    return (
        <SeanWong />
    )
}