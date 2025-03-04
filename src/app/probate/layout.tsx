import type { Metadata } from 'next'
import Probate from '@/app/probate/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Probate',
  description: 'At DCMO, we specialize in probate and estate administration, ensuring that your loved one’s assets are distributed efficiently, fairly, and in accordance with the law.',
}

export default  function PageLayout() {
    return (
        <Probate />
    )
}