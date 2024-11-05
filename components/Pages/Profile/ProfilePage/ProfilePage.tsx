import PoliciesTable from '@/components/PoliciesTable/PoliciesTable'
import { useProfileContext } from '@/contexts/UserProfileContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import UserProfileHeroSection from './Partials/UserProfileHeroSection'
import UserProfileOverview from './Partials/UserProfileOverview'

const ProfilePage = () => {
  const { userInfo } = useProfileContext()
  const userName = (userInfo?.policies[0]?.name ?? userInfo?.name)?.split(' ')[0]
  const router = useRouter()
  const activeLang = router.locale
  return (
    <div>
      <UserProfileHeroSection userName={userName} bottomText="Poliçeler ve durumunuzu burada görebilirsiniz" />
      <UserProfileOverview />
      <PoliciesTable policies={userInfo?.policies} />
      <Link href={`${activeLang}/profile/policies`} className='max-w-[161px] bg-primary text-white font-medium rounded-[64px] px-[21px] py-3 my-[30px] mx-auto block'>
        <span className='inline-block translate-y-[2px]'>Tüm Poliçelerim</span>
      </Link>
    </div>
  )
}





export default ProfilePage