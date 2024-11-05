import React, { FC } from 'react'
import SheetIcon from '@/assets/images/icons/sheet.svg'
import ClockIcon from '@/assets/images/icons/clock-icon.svg'
import SheetsIcon from '@/assets/images/icons/sheets-icon.svg'
import BadgeIcon from '@/assets/images/icons/badge-icon.svg'



interface PaymentDetailsType {
    paymentDate?: string;
    invoiceId?: string,
    CCardNo?: string,
    CCNameSurname?: string,

}


const PaymentDetails: FC<PaymentDetailsType> = (props) => {
    const { paymentDate, invoiceId, CCNameSurname, CCardNo } = props;
  return (
    <section className='px-[81px] container'>
        <div className='container flex flex-col items-center justify-center bg-white rounded-[15px] border border-[#C3C3C3] py-[30px] mt-[-72px]relative z-10'>
            <SheetIcon />
            <p className='text-light-blue mt-3 font-semibold'>Ödeme bilgileri</p>
            <div className='w-full flex justify-between items-between text-primary px-[112px] mt-8'>
                <span className='inline-flex space-x-2'>
                    <ClockIcon />
                    <span className='font-semibold '>Ödeme Tarihi ve Saati :</span>
                    <span>{paymentDate ?? 'Ödeme Tarihi ve Saati Sağlanmadı'}</span>
                </span>
                
                <span className='inline-flex space-x-2'>
                    <SheetsIcon />
                    <span className='font-semibold '>Makbuz / Dekont Numarası: :</span>
                    <span>{ invoiceId ?? 'Dekont Numarası ve Saati Sağlanmadı'}</span>
                </span>
                
                <span className='inline-flex space-x-2'>
                    <BadgeIcon />
                    <span className='font-semibold '>Ödeyen :</span>
                    <span>{CCardNo ?? 'Ödeyen bilgileri Sağlanmadı'}</span>
                </span>
                

            </div>
        </div>
    </section>
  )
}


PaymentDetails.displayName = "PaymentDetails"


export default PaymentDetails