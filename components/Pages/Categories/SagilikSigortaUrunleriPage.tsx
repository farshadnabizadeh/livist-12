import CategoriesPageHero from '@/components/CategoriesPageHero/CategoriesPageHero'
import InsurancePageHero from '@/components/InsurancePageHero/InsurancePageHero'
import React from 'react'
import HumanAvatar from '@/assets/images/icons/human-avatar-colorful.svg'
import HeartInHand from '@/assets/images/icons/heart-in-hand.svg'
import FamilyUmbrella from '@/assets/images/icons/family-under-umbrella.svg'
import HumanWithBrokenArm from '@/assets/images/icons/human-with-broken-arm.svg'
import PregnantWoman from '@/assets/images/icons/pregnant-woman-icon.svg'
import { UiLink } from '@/lib'
import BuyInTwoMinutesSection from '@/components/BuyInTwoMinutesSection/BuyInTwoMinutesSection'
import InsuranceExplanationAccordion from '@/components/InsuranceExplanationAccodion/InsuranceExplanationAccodion'

const UiSagilikSigortaUrunleri = [
  {
    id: 0,
    label: 'Yabancı Sağlık',
    value: '/yabanci-sagilik',
    Icon: HumanAvatar
  },
  {
    id: 1,
    label: 'Tamamlayıcı Sigortası',
    value: '/urunler/tamamlayici-sigorta',
    Icon: HeartInHand
  },
  {
    id: 0,
    label: 'Özel Sağlık Sigortası',
    value: '/urunler/ozel-sagilik-sigortasi',
    Icon: FamilyUmbrella
  },
  {
    id: 0,
    label: 'Ferdi Kaza',
    value: '/urunler/ferdi-kaza',
    Icon: HumanWithBrokenArm
  },
  {
    id: 0,
    label: 'Hamilelik',
    value: '/urunler/hamilelik-sigortasi',
    Icon: PregnantWoman
  },
]



const SagilikSigortaUrunleriPage = () => {
  return (
    <>
      <CategoriesPageHero
        img={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fsagilik-sigorta-urunleri-banner.png?alt=media&token=63c1c7b3-83c6-42da-a77f-efffd654184e'}
        title={'Sağlık Sigortası Ürünleri'}
        subtitle='İstediğiniz ürünü seçin'
      />

      <section className='relative container grid grid-cols-2 lg:grid-cols-5 gap-[34px] py-[48px] mt-[-100px] z-10 px-5 lg:px-[66px]'>
        {UiSagilikSigortaUrunleri.map(product => {
          const { Icon, label, id, value } = product;
          return (
            <UiLink href={value} key={id} className='flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#EAEAEA] rounded-[30px] px-[40px] text-center text-base text-primary space-y-4 aspect-square'>
            <Icon />
             <span>
               {label}
              </span>
            </UiLink>)
        })}
      </section>

      <BuyInTwoMinutesSection />
      <InsuranceExplanationAccordion
                label="Sağlık Sigortası"
                description="Bizim sigorta şirketimizde sağlık sigortası kategorisi altında beş farklı ürün sunmaktayız. Yabancılar için sağlık sigortası, uluslararası seyahatlerde güvence sağlayarak yabancı misafirlerimizin beklenmedik sağlık sorunlarına karşı korunmalarını sağlar. Tamamlayıcı sağlık sigortası, genel sağlık sigortasının yanı sıra ek kapsamlı hizmetler sunarak müşterilerimizin ihtiyaçlarını tamamlayarak kapsamlı bir koruma sağlar. Özel sağlık sigortası, hastane tedavileri ve özel doktor randevuları gibi özel sağlık hizmetlerine erişim sunarak müşterilerimize özel bir sağlık deneyimi sunar. Ferdi kaza sigortası, müşterilerimizi beklenmedik kaza durumlarında maddi olarak destekleyerek ve tıbbi ihtiyaçlarını karşılayarak güvence altına alır. Son olarak, hamilelik sigortası, anne adaylarının hamilelik dönemi boyunca ortaya çıkabilecek tıbbi masraflarını karşılayarak onların yanında olur ve bu özel süreçte huzur sağlar."
        />
    </>

  )
}

export default SagilikSigortaUrunleriPage