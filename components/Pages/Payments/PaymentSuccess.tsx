import ClientLayout from '@/components/Layouts/ClientLayout'
import formatDate from '@/utils/helpers/formatDate'
import { PaymentSuccessResponse } from '@/utils/types/PaymentSuccessResponse'
import React, { FC, ReactElement } from 'react'
import PaymentDetails from './Partials/PaymentSuccessHero/PaymentDetails'
import PaymentSuccessHero from './Partials/PaymentSuccessHero/PaymentSuccessHero'
import DownloadButton from '@/assets/images/icons/download-icon.svg'
import UserAvatar from '@/assets/images/icons/user-avatar.svg'

const PaymentSuccess = (props: PaymentSuccessResponse) => {
  console.log('this is the props:', props)
  return (
    <div>
        <PaymentSuccessHero 
        phoneNo={props?.user?.phoneNo}
        img="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fyabanci-sagilik-banner.png?alt=media&token=40d1d3ab-0616-42ff-a919-24517147eaae"
        age={formatDate(props.proposal?.birthDate)}
        passportNo={props?.proposal?.passportNo}
        startDate={formatDate(props?.proposal?.policyStartDate)}
        price={props.proposal?.price}
        />
        {/* TOTO: take the payment Date from server */}
        <div className='mt-[-74px] relative z-10'>
          <PaymentDetails CCardNo={props?.credit_card_no} invoiceId={props.invoice_id} paymentDate={formatDate(new Date() as unknown as string)}/>
        </div>
        <section className='grid grid-cols-2 px-[81px] gap-9 mt-9 container'>
            <div className='h-[296px] border border-[#C3C3C3] rounded-[15px] flex flex-col items-center justify-between py-[60px]'>
             <DownloadButton />
             <span className='text-primary'>Poliçeniz hazır! indirmek için botuna tıklayın</span>
             <a href={props.downloadUrl?.Result} className='bg-grass-green text-white rounded-[64px] border border-grass-green hover:bg-white hover:text-grass-green px-[43px] py-3'>PDF’i İndir</a>
            </div>
            <div className='h-[296px] border border-[#C3C3C3] rounded-[15px] flex flex-col items-center justify-between py-[60px] px-[84px]'>
              <UserAvatar className='text-accent' />
              <p className='text-primary text-center'>sigortalarınızı görüntülemek ve yönetmek için hesabınıza giriş yapabilirsiniz. Kullanıcı adınız:</p>
              {/* TODO: user phone no from server */}
              <span className='text-accent'>{props?.user?.phoneNo ?? '0543 123 45 67'}</span>
            </div>
        </section>
    </div>
  )
}


export default PaymentSuccess