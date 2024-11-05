import { useProfileContext } from '@/contexts/UserProfileContext'
import formatDate from '@/utils/helpers/formatDate'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'



const UserProfileOverview = () => {
    const {userInfo} = useProfileContext()
    const YKNOrPassport = userInfo?.TCIdNo ?? userInfo?.passprtNo ?? userInfo?.policies[0]?.TCIdNo ?? userInfo?.policies[0]?.passportNo
    const userName = userInfo?.policies[0]?.name ?? userInfo?.name 
    const userSurname = userInfo?.policies[0]?.surname ?? userInfo?.name
    const birthDate = userInfo?.birthDate ?? userInfo?.policies[0]?.birthDate
    const boughtPolicyCount = userInfo?.policies?.length
    const router = useRouter()
    let activeLang = router.locale

  return (
    <div className='container w-full grid grid-cols-3 gap-[33px] mt-[33px]'>
        <div className=' bg-light-blue text-white flex flex-col items-center rounded-[15px] pt-[34px] pb-[30px]'>
            <h2 className='text-center font-bold mb-6'>Profiliniz</h2>
            <p><span className='font-bold'>Cep Telefon Numarası</span> : <span>{userInfo?.phoneNo}</span></p>
            <p><span className='font-bold'>Pasaport / YKN</span> : <span>{YKNOrPassport}</span></p>
            <p><span className='font-bold'>Ad Soyad</span> : <span>{`${userName} ${userSurname}`}</span></p>
            <p><span className='font-bold'>Doğum Tarihi</span> : <span>{birthDate ? formatDate(birthDate as string) : ''}</span></p>
        </div>
        <div className=' bg-light-blue text-white flex flex-col items-center rounded-[15px] pt-[34px] pb-[30px]'>
            <h2 className='text-center font-bold mb-6'>SİGORTALARINIZ</h2>
            <p><span className='font-bold'>Satın alınan ürünler</span> : <span>{boughtPolicyCount ?? 0} poliçe</span></p>
            <Link href={`${activeLang}/profile/policies`} className='bg-grass-green rounded-[64px] px-[15px] pb-3 pt-4 mt-9 border border-grass-green hover:bg-transparent transition-all' >
            <span className='font-medium text-white text-base'>
                POLİÇELERİM
            </span>
            </Link>
         </div>
         <div className=' bg-light-blue text-white flex flex-col items-center rounded-[15px] pt-[34px] pb-[30px]'>
            <h2 className='text-center font-bold mb-6'>Bildirimler</h2>
            <p >Bildirim Yok!</p>
         </div>
        
    </div>
  )
}

UserProfileOverview.displayName = "UserProfileOverview"

export default UserProfileOverview