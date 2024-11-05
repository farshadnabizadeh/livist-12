import React, { FC } from 'react'
import HeroBackground from '@/assets/images/icons/UserProfileHeroBackground.svg'
import { useAuth } from '@/contexts/NestAuthContext'

interface UserProfileHeroSectionType {
  userName?: string,
  bottomText?: string,
}


const UserProfileHeroSection: FC<UserProfileHeroSectionType> = (props) => {
  const { userName, bottomText } = props;
  return (
    <div className='w-full gradient-accent-background h-[436px] flex flex-col justify-center items-center'>
      {/* <HeroBackground /> */}
      <div className='flex flex-col items-center '>
        <h1 className='font-light text-white text-[61px] '> İYİ Günler, <span className='font-bold'>{userName}</span> </h1>
        <div className='px-5 pb-2 pt-[12px] bg-white rounded-[36px]'>
          <span>
            Müşteri Paneli</span>
        </div>
      </div>
      <p className='text-white font-normal text-xl translate-y-[57px]'>
        {bottomText}
      </p>
    </div>
  )
}

export default UserProfileHeroSection