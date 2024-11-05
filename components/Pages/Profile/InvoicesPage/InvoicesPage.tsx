import InvoicesTable from '@/components/InvoicesTable/InvoicesTable'
import { useProfileContext } from '@/contexts/UserProfileContext'
import React, { FC } from 'react'
import UserProfileHeroSection from '../ProfilePage/Partials/UserProfileHeroSection'

const InvoicesPage: FC = () => {
  const { userInfo, invoices } = useProfileContext()
  const userName = (userInfo?.policies[0]?.name ?? userInfo?.name)?.split(' ')[0]
  console.log('this is the invoices from InvoicesPage: ', invoices)
  return (
    <section >
      <UserProfileHeroSection userName={userName} bottomText="ÖDEMELER" />
      <InvoicesTable invoices={invoices} />
    </section>
  )
}


InvoicesPage.displayName = "InvoicesPage"

export default InvoicesPage