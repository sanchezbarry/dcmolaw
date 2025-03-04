import type { Metadata } from 'next'
import AboutUs from '@/app/about-us/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | About Us',
  description: 'Our Law Practice was founded upon the shared vision of our directors, Ms. Dorothy Chai and Ms. Mary Ong, to provide effective and practical legal solutions for our clients whilst training the next generation of Lawyers to do the same.',
}

export default  function PageLayout() {
    return (
        <AboutUs />
    )
}