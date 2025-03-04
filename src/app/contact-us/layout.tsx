import type { Metadata } from 'next'
import ContactUs from '@/app/contact-us/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Contact Us',
  description: 'Contact information: DCMO Law Practice LLC, 133 New Bridge Road #14-10 Chinatown Point, Singapore 059413, Tel : 65320123, Fax : 6535 2265',
}

export default  function PageLayout() {
    return (
        <ContactUs />
    )
}