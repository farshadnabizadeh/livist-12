
import { UiLink } from '@/lib'
import MainMenuItems from '@/utils/data/mainMenuItems'
import React, { useEffect, useState } from 'react'
import { FC } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Logo from '@/components/Logo/Logo'
import LangSelect from '@/components/LangPicker/LangPicker'
import MobileMenu from '@/components/MobileMenu/MobileMenu'
import Image from 'next/image'
import ApplyButton from '../ApplyButton/ApplyButton'
import ContactButton from '../ContactButton/ContactButton'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import HumanAvatar from '@/assets/images/icons/human-avatar.svg'
import Link from 'next/link'

const Header: FC = () => {
  const [ isScrolled, setIsScrolled ] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const topBar = document.querySelector('#top-bar')
      const topBarHeight = topBar?.getBoundingClientRect().height
      if(topBarHeight && window.scrollY > topBarHeight){
        setIsScrolled(true)
      }else if (topBarHeight && window.scrollY < topBarHeight) {
        setIsScrolled(false)
      }
    })
  } ,[
    
  ])
  return (
    <header className={`sticky top-0 z-[999]  mx-auto transition-all duration-500  ${isScrolled ? '': 'lg:px-[33px]'}`}>
      <div className={`hidden lg:flex justify-between items-center bg-primary py-4 px-4 transition-all duration-500 ${isScrolled ? 'lg:px-[50px]': 'rounded-[78px]'}`}>
        <div className='flex items-center space-x-[30px]'>
          <Link href={'/'} className='w-[100px]'>
            <Logo classNames='w-[98px]'/>
          </Link>
          <NavBar itemsWrapperClassName='flex space-x-[25px]' itemClassName='text-white font-semibold text-base whitespace-nowrap' />
        </div>
        <div className='flex space-x-2 items-center'>
          {/* <ApplyButton /> */}
          <ContactButton />
          <Link href={'/profile'} className='h-[37px] p-[7px] bg-white rounded-full'>
            <HumanAvatar className="h-full" />
          </Link>
          <WhatsappButton />
        </div>
      </div>
      <div className='mobile-header container flex justify-between lg:hidden py-4 px-4 bg-white'>
        <LangSelect />
        {/*TODO:  for some unknown reason using SVG or Next/image the image does not show up  */}
        <Link href={'/'}>
          <img
            src={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Flivist-logo-blue.svg?alt=media&token=4f3315fb-9e70-4e98-82dc-2875fadeac2b'}
            width={63}
            height={33}
            alt='livist logo'
          />
        </Link>
        {/* <Logo /> */}
        <MobileMenu />
      </div>
    </header>
  )
}


Header.displayName = 'Header'

export default Header