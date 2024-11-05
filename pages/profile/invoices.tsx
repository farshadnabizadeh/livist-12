import UserProfileLayout from '@/components/Layouts/UserProfileLayout/UserProfileLayout'
import InvoicesPage from '@/components/Pages/Profile/InvoicesPage/InvoicesPage'
import PoliciesPage from '@/components/Pages/Profile/PoliciesPage/PoliciesPage'
import React, { ReactElement } from 'react'

const Invoices = () => {
  return (
    <div><InvoicesPage /></div>
  )
}





Invoices.getLayout = function getLayout(page: ReactElement) {
    return (
      
        <UserProfileLayout>{page}</UserProfileLayout>
      
    )
  }
  
  Invoices.displayName = 'PolInvoicesicies'

export default Invoices