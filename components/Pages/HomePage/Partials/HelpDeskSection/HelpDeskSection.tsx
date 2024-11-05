import { UiImage } from '@/lib'
import useTrans from '@/utils/hooks/useTrans'
import React, { FC } from 'react'
import TwentyFourHour from "@/assets/images//icons/twenty-four-hour.svg";
import WhatsappLogo from '@/assets/images/icons/whatsapp-logo.svg'
import PhoneIcon from '@/assets/images/icons/phone-icon.svg'
import { supportLine } from '@/app.config';


const HelpDeskSection: FC = () => {
  const t = useTrans()
  return (
    <section className='mt-[215px] lg:mt-[81px] px-3'>
      <div className='container relative'>
        <div className='absolute top-0 left-0 w-full h-full rounded-[30px] bg-light-blue z-10 skew-y-[-5deg] lg:skew-y-0 lg:rotate-[-1.073deg]'></div>
        <div className='bg-[#F2F2F7] lg:h-[357px] rounded-[30px] flex flex-col-reverse lg:flex-row justify-between items-start py-9 px-5 lg:pl-[116px] lg:pr-[99px] relative z-20'>
          <div className='h-full max-w-full lg:max-w-[721px] flex flex-col justify-start relative z-20'>
            <h2 className='text-accent font-black text-2xl lg:text-[44px] mb-4 leading-[3rem]'>{t("LIVIST DESTEK MASASI BURADA!")}</h2>
            <p className='text-base text-primary font-light'>{t('HAYATINIZIN HER ANINDA YANINIZDAYIZ. LIVIST DESTEK MASASI, SIZE EN IYI MÜŞTERI DENEYIMINI SUNMAK IÇIN BURADA. SORULARINIZ, TALEPLERINIZ VEYA YARDIMA IHTIYAÇ DUYDUĞUNUZ HER KONUDA SIZINLE ILETIŞIMDE OLMAK IÇIN SABIRSIZLANIYORUZ. SIZ DEĞERLI MÜŞTERILERIMIZIN YANINDAYIZ VE ÇÖZÜM ODAKLI DESTEK IÇIN BURADAYIZ. SIZE YARDIMCI OLABILMEK IÇIN SADECE BIR TIK UZAĞINIZDAYIZ!')}</p>
            <div className='grid grid-cols-2 lg:flex w-full flex-row justify-center lg:justify-start space-x-2 lg:space-x-[18px] mt-[21px] lg:mt-4'>
            <a
                
                href='https://api.whatsapp.com/send/?phone=+905538009999&text=Merhabalar%20ben%20sigorta%20hakk%C4%B1nda%20dan%C4%B1%C5%9Fmanl%C4%B1k%20istiyorum'
                className="w-full lg:w-[186px] bg-transparent flex items-center justify-center px-2 lg:px-[38px] py-[11px] text-primary space-x-2 border-2 border-primary rounded-[120px] hover:bg-primary hover:text-white transition-all "
                target={"_blank"}
              >
                <WhatsappLogo />
                <span>{t("WHATSAPP")}</span>
              </a>
            <a
                href='mailto:info@livist-sigorta.com'
                type="button"
                className="w-full lg:w-[186px] whitespace-nowrap bg-transparent flex items-center px-2  justify-center  text-primary space-x-2 border-2 border-primary rounded-[120px] hover:bg-primary hover:text-white transition-all py-3 lg:py-0 "
              >
                <TwentyFourHour />
                <span>{t("BİZE ULAŞIN")}</span>
              </a>
            <a
                href={`tel:${supportLine}`}
                className="lg:w-[186px] whitespace-nowrap bg-transparent flex items-center justify-center  text-primary space-x-2 rounded-[120px] transition-all col-span-2 mt-9 lg:mt-0"
              >
                <PhoneIcon className="w-[22px] h-[22px]" />
                <span>{supportLine}</span>
              </a>
            </div>
          </div>
            <UiImage 
              src={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fhelpdesk-banner.png?alt=media&token=6698af73-f5a4-4b6c-a3b0-d0768a6f8843'}
              width={414}
              height={295}
              alt='helpdesk'
              className='mt-[-212px] lg:mt-0 mx-auto lg:mx-0'
            />

        </div>

        
      </div>
      </section>
  )
}


HelpDeskSection.displayName = 'HelpDeskSection'

export default HelpDeskSection