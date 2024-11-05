import React, { FC } from 'react'
import LivistLogoWhite from '@/assets/images/icons/logos/livist-logo-white.svg'
import UserProfileNavbar from './UserProfileNavBar/UserProfileNavbar';
import LogoutIcon from '@/assets/images/icons/logout-icon.svg'
import HumanAvatar from '@/assets/images/icons/human-avatar.svg'
import MessageIcon from '@/assets/images/icons/message-icon.svg'
import LockIcon from '@/assets/images/icons/lock-icon.svg'
import { useProfileContext } from '@/contexts/UserProfileContext';
import { useAuth } from '@/contexts/NestAuthContext';
import Link from 'next/link';
import { UiLink } from '@/lib/index';

interface UserProfileHeaderType {
  wrapperClassNames?: string;
}


const UserProfileHeader: FC<UserProfileHeaderType> = (props) => {
  const { wrapperClassNames } = props;
  const { userInfo } = useProfileContext()
  const { logout, openLogoutModal } = useAuth()
  const userName = (userInfo?.policies[0]?.name ?? userInfo?.name)?.split(' ')[0]
  return (
    <div className={`${wrapperClassNames} flex justify-between items-center`}>
      <UiLink href={'/'} className=''>
        <LivistLogoWhite />

      </UiLink>
      <UserProfileNavbar />
      <div className='flex space-x-[10px]'>
        <span className='h-[30px] min-w-[150px] bg-white flex space-between items-center rounded-[55px]'>
          <span className='bg-[#EFEFEF] rounded-[55px] h-full p-2'>
            <LockIcon />
          </span>
          <span className='ml-[12px] mr-[22px] translate-y-[3px] inline-block'>{userName}</span>
        </span>
        <span className='h-[30px] p-[7px] bg-white rounded-full'>
          <MessageIcon className="h-full" />
        </span>
        <Link href={'/profile'} className='h-[30px] p-[7px] bg-white rounded-full'>
          <HumanAvatar className="h-full" />
        </Link>
        <LogoutIcon onClick={openLogoutModal} className={'cursor-pointer'} />
      </div>
    </div>
  )
}




UserProfileHeader.displayName = "UserProfileNavbar"

export default UserProfileHeader