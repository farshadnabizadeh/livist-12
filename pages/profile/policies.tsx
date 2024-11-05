import UserProfileLayout from '@/components/Layouts/UserProfileLayout/UserProfileLayout'
import PoliciesPage from '@/components/Pages/Profile/PoliciesPage/PoliciesPage'
import React, { ReactElement } from 'react'

const Policies = () => {
  return (
    <div><PoliciesPage /></div>
  )
}





Policies.getLayout = function getLayout(page: ReactElement) {
    return (
      
        <UserProfileLayout>{page}</UserProfileLayout>
      
    )
  }
  
  Policies.displayName = 'Policies'

export default Policies