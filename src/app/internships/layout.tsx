import type { Metadata } from 'next'
import Internship from '@/app/internships/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Singapore Law Internships',
  description: 'Please use this form if you would like to apply for an internship at DCMO Law Practice LLC. Applications submitted via other channels will not be considered.',
}

export default  function PageLayout() {
    return (
        <Internship />
    )
}