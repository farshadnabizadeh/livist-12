import { UserProfileProvider } from '@/contexts/UserProfileContext'
import React, { ReactElement } from 'react'
import UserProfileFooter from './Partials/UserProfileFooter'
import UserProfileHeader from './Partials/UserProfileHeader'

const UserProfileLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div >
        
        <UserProfileHeader wrapperClassNames="w-full fixed top-0 left-0 px-[25px] py-[25px]"/>
        {children}
        <UserProfileFooter />
    </div>

  )
}

UserProfileLayout.displayName = 'UserProfileLayout'

export default UserProfileLayout