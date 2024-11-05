import { useAuth } from '@/contexts/NestAuthContext'
import PricesPageHero from '@/pages/prices/partials/PricesPageHero'
import formatDate from '@/utils/helpers/formatDate'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import PaymentSuccessHero from '../Payments/Partials/PaymentSuccessHero/PaymentSuccessHero'
import PaymentForm from './PaymentForm/PaymentForm'
import VisaCardIcon from '@/assets/images/icons/visa-card-icon.svg'
import MasterCardIcon from '@/assets/images/icons/master-card-icon.svg'
import MaximumCardIcon from '@/assets/images/icons/maximum-card-icon.svg'
import ZiraatCardIcon from '@/assets/images/icons/ziraat-bank-icon.svg'


const Payment: FC = () => {
  const [policyInfo, setPolicyInfo] = useState<Record<string, any>>({})
  const { user } = useAuth();
  const router = useRouter()
  const params = router.query
  const policyId = params?.proposalId
  // TODO: make this serverside generated
  useEffect(() => {
    const getProductInfo = async () => {

      const policyRes = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/get-policy/${policyId}`, {
        headers: {
          "Authorization": `Bearer ${user?.access_token}`
        }
      })
      const policy = await policyRes.json()
      console.log('this is the proposal,', policy)
      setPolicyInfo(policy)

    }

    getProductInfo()

  }, [user, policyId])

  return (<>
    <PaymentSuccessHero
      title={policyInfo?.description}
      phoneNo={policyInfo?.user?.phoneNo}
      img="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fyabanci-sagilik-banner.png?alt=media&token=40d1d3ab-0616-42ff-a919-24517147eaae"
      age={formatDate(policyInfo?.birthDate)}
      passportNo={policyInfo?.passportNo ?? policyInfo?.TCIdNo}
      startDate={formatDate(policyInfo?.policyStartDate)}
      price={policyInfo?.price}
      isPaid={false}
    />
    <div className='w-full flex flex-col space-y-[24px] items-center justify-center pt-[70px]'>
      <div className='flex space-x-3 '>
      <VisaCardIcon />
      <MasterCardIcon />
      <MaximumCardIcon />
      <ZiraatCardIcon className="max-width-"/>
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FZiraat_Bankas%C4%B1_logo%201.png?alt=media&token=2d8bc744-facc-45b2-833c-43370f5e0316" /> */}
      </div>
      <PaymentForm />
    </div>
  </>
  )
}



Payment.displayName = 'Payment'

export default Payment