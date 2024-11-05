import PoliciesTable from '@/components/PoliciesTable/PoliciesTable'
import { useProfileContext } from '@/contexts/UserProfileContext'
import React from 'react'
import UserProfileHeroSection from '../ProfilePage/Partials/UserProfileHeroSection'

const PoliciesPage = () => {
  const { userInfo } = useProfileContext()
  const userName = (userInfo?.policies[0]?.name ?? userInfo?.name)?.split(' ')[0]
  return (
    <section>
      <UserProfileHeroSection userName={userName} bottomText='POLİÇERLER' />
      <PoliciesTable policies={userInfo?.policies} />

    </section>
  )
}


PoliciesPage.displayName = "PoliciesPage"

export default PoliciesPage