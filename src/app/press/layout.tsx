import type { Metadata } from 'next'
import Press from '@/app/press/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Press',
  description: 'Our law firm press features and Singapore lawyer news.',
}

export default  function PageLayout() {
    return (
        <Press />
    )
}