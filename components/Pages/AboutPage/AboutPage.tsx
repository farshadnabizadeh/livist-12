import OurTeam from '@/components/OurTeam/OurTeam'
import { UiImage } from '@/lib/index'
import useTrans from '@/utils/hooks/useTrans'
import React, { FC } from 'react'
import AboutPageHero from './Partials/AboutPageHero/AboutPageHero'
import OurMissionAccordion from '@/components/OurMissionAccordion/OurMissionAccordion'
import OurVisionAccordion from '@/components/OurVisionAccordion/OurVisionAccordion'

const AboutPage: FC = () => {
  const t = useTrans()
  return (
    <div className=''>
      <AboutPageHero />
      <div className='container mt-[77px] flex'>
        <div>
        <h1 className='text-primary font-black text-xl'>{t("BİZ KİMİZ")}</h1>
        <p className='text-xl text-subtitle mt-[29px]'>{t("TEHLIKELI BIR DÜNYADA, ZAMANIN ÖTESINE ATLADIK VE SIGORTA PROGRAMLARININ EN IYISINI UYGULAMADA EŞSIZ BIR PATLAMA GERÇEKLEŞTIRDIK, BU VIZYONU UZMANLARIMIZ TARAFINDAN ÖZENLE DÜŞÜNÜLMÜŞ BIR BAKIŞ AÇISIYLA. LIVIST SIGORTA, ORTA DOĞU VE AVRUPA’DA SIGORTA HIZMETLERI VE PROGRAMLARI SUNMA ALANINDA KÜRESEL BIR VIZYONA SAHIP BIR ŞIRKETTIR.")}</p>
        <h1 className='text-primary font-black text-xl mt-[30px]'>{t("KURULUŞ")}</h1>
        <p className='text-xl text-subtitle mt-[29px]'>{t("LIVIST SIGORTA, 5 YILDAN FAZLA BIR SÜREDIR KURULMUŞ, TÜRKIYE’DE LISANSLI VE ONAYLI BIR SIGORTA ACENTASIDIR VE İSTANBUL MERKEZLI – TÜRKIYE CUMHURIYETI – SIGORTA BIRLIĞI VE KÜRESEL BORSA ODALARINDA KAYITLIDIR.")}</p>
       
        </div>
    <div className='min-w-[202px] max-w-[202px] ml-[181px] mr-[169px]'>
      <UiImage
        src="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Flivist-logo-vertical.png?alt=media&token=af76541a-76a6-466a-afcc-c1c9c2e10000"
        width={202}
        height={281}
        alt="livist logo"
      />
    </div>
      </div>
      <div className='container'>
        <OurTeam />
        <div className='grid grid-cols-2 gap-7'>
        <OurMissionAccordion />
        <OurVisionAccordion />
        </div>

      </div>
    </div>
  )
}

AboutPage.displayName = 'AboutPage'

export default AboutPage