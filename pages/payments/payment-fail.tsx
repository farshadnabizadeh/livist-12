import ClientLayout from '@/components/Layouts/ClientLayout'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { BiErrorCircle } from 'react-icons/bi'

const PaymentFail = () => {
  const router = useRouter()
  const errorDescription = router?.query?.status_description
  const errorCode = router?.query?.status_code
  return (
    <div className='container w-full py-10 flex flex-col justify-between items-center space-y-8'>
      <BiErrorCircle className='w-48 h-48 text-red-500' />
      <h2 className='text-xl text-red-500 font-semibold'>Ödeme Başarısız</h2>
      <p className='text-lg'>{errorDescription}</p>
      <p className='text-lg'>Status Code: {errorCode}</p>
    </div>
  )
}


PaymentFail.getLayout = function getLayout(page: ReactElement) {
  return (
    
      <ClientLayout>{page}</ClientLayout>
    
  )
}



export default PaymentFail