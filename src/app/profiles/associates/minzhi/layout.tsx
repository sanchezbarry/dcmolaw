import type { Metadata } from 'next'
import MinZhi from '@/app/profiles/associates/minzhi/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Min Zhi',
  description: 'Min Zhi joined the firm as a Legal Associate in 2021. Her practice focus is on Family Law and Estate Planning.'

}

export default  function PageLayout() {
    return (
        <MinZhi />
    )
}