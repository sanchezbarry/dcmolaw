import type { Metadata } from 'next'
import Rashpal from '@/app/profiles/associates/rashpal/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Rashpal Singh Sidhu',
  description: 'Rashpal Singh Sidhu is an Associate at DCMO Law Practice LLC.'

}

export default function PageLayout() {
    return (
        <Rashpal />
    )
}