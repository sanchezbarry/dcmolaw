import type { Metadata } from 'next'
import DorothyChai from '@/app/profiles/partners/dorothychai/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Dorothy Chai',
  description: 'Dorothy Chai is the Managing Partner of the firm.'

}

export default  function PageLayout() {
    return (
        <DorothyChai />
    )
}