import type { Metadata } from 'next'
import OtherServices from '@/app/otherservices/page'
 
export const metadata: Metadata = {
  title: 'DCMO Law Practice LLC | Other Services | Power of Attorney | Adoption of Children | Immigration matters',
  description: 'Our team of lawyers are also experienced in other areas of personal law beyond matrimonial law. We also offer highly competitive rates for the handling of your matter entrusted to us as we seek to be a one-stop centre for all your personal legal needs.',
}

export default  function PageLayout() {
    return (
        <OtherServices />
    )
}