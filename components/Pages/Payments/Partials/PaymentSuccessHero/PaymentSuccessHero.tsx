import { UiImage } from '@/lib/index';
import React, { FC } from 'react'
import ChecMarkIcon from '@/assets/images/icons/checkmark-icon.svg'

interface PaymentSuccessHeroType {
  img: string;
  title?: string;
  phoneNo?: string;
  id?: string,
  passportNo?: string,
  age?: string,
  startDate?: string,
  price?: number,
  isPaid?: boolean
}

const PaymentSuccessHero: FC<PaymentSuccessHeroType> = (props) => {
  const { img, title, phoneNo, id, passportNo, age, startDate, price, isPaid = true } = props;
  return (
    <section className='relative container'>
      <div className="w-full h-full mt-[29px]">
        <UiImage src={img} width={1446} height={602} alt="meeting image" />
      </div>
      <div className='lg:absolute top-0 left-0 w-full h-full lg:mt-[133px] px-5 lg:px-[83px]'>
        <h1 className='absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 lg:relative text-white font-black text-lg lg:text-[40px] leading-normal text-center lg:text-left mt-5 lg:mt-0 z-30'>{title ?? "Yabancı Sağlık Sigortası"}</h1>
        <div className='w-full py-[34px] px-12 bg-light-blue rounded-[15px] text-white mt-8 lg:mt-[90px] flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left space-y-4'>

          <div className='space-y-4 lg:space-y-0'>
            <p>
              <span className='font-semibold'>KULLANICI ADI</span> : <span>{phoneNo ?? 'Kullanıcı adı sağlanamadı'}</span>
            </p>
            <p>
              <span className='font-semibold'>PASAPORT / T.C.K.N.</span> : <span>{id ?? passportNo ?? 'ID veya passaport numarası sağlanmadı'}</span>
            </p>
            <p>
              <span className='font-semibold'>DOĞUM TARİHİ</span> : <span>{age ?? 'Yaş sağlanamadı'}</span>
            </p>
            <p>
              <span className='font-semibold'>POLİÇE BAŞLANGINÇ TARİHİ</span> : <span>{startDate ?? 'Poliçe başlangınç tarihi sağlanamadı'}</span>
            </p>
          </div>
          <div className='space-y-[34px]'>
            <p className='text-white font-bold text-xl'>TUTAR: <br className='lg:hidden'/> {price ?? '0'} TL</p>
            {
              isPaid && 
              <div className='text-white font-medium rounded-[64px] bg-grass-green px-8 py-3 flex flex-row justify-between leading-[21px]'>
              <span className='text-white'>
                Ödendi!
              </span>
              <ChecMarkIcon />
            </div>}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}


PaymentSuccessHero.displayName = 'PaymentSuccessHero'

export default PaymentSuccessHero