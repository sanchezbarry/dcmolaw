import type { Metadata } from 'next'
import MaryOng from '@/app/profiles/partners/maryong/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Mary Ong',
  description: 'Mary Ong is one of the founding Partners of the Firm.'

}

export default  function PageLayout() {
    return (
        <MaryOng />
    )
}