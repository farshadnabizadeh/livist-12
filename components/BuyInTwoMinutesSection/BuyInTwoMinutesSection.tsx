import React, { FC } from 'react'
import MobileImage from '@/assets/images/icons/phone-image.svg'
import { UiImage, UiLink } from '@/lib'
import RightArrow from '@/assets/images/icons/right-arrow-with-circle.svg'
import InsuranceExplanationAccordion from '../InsuranceExplanationAccodion/InsuranceExplanationAccodion'


interface BuyInTwoMinutesSectionType {
    wrapperClassNames?: string
}



const BuyInTwoMinutesSection: FC<BuyInTwoMinutesSectionType> = (props) => {
    const {wrapperClassNames} = props;
    return (
        <section className={`container ${wrapperClassNames}`}>
            <div className='grid grid-cols-1 lg:grid-cols-2'>

            <div className='flex flex-col justify-center px-5 lg:px-0 text-center lg:text-left'>
                <h2 className='text-accent font-medium text-xl '>Sadece 2 dakikada tüm teklifleri kolayca karşılaştır</h2>
                <p className='text-[#7C7C7C] font-light mt-5'>20+ sigorta şirketinden teklifleri tek platformda karşılaştır, internete özel indirimlerle uygun fiyata sigortan anında başlasın.</p>
                <UiLink href={'#'} className='text-primary text-xl font-medium flex justify-center lg:justify-start items-center space-x-4 mt-5' >
                    <span>
                        Hemen Teklif Al
                    </span>
                    <RightArrow />
                </UiLink>
            </div>
            <div className='flex justify-center lg:justify-end'>
                <div className='relative w-[456px] aspect-square'>
                <UiImage src={"https://firebasestorage.googleapis.com/v0/b/dansfabrika-893cf.appspot.com/o/mobile-with-insurance-items.png?alt=media&token=71f2ae0d-c1ce-4036-af36-a4a526583bff"}
                 alt={'livist-sigorta-mobile'}
                 fill                    
                />

                </div>
            </div>

            </div>
            {/* <InsuranceExplanationAccordion
                label="Tamamlayıcı Sigortası Nedir?"
                description="Livist Sigorta olarak, seyahat sağlık sigortası kategorimiz altında müşterilerimize geniş kapsamlı koruma sunuyoruz. Yurt Dışı Sağlık Sigortası, tüm dünya ve Schengen ülkeleri dahil olmak üzere uluslararası seyahatlerinizde olası sağlık sorunlarına karşı kapsamlı bir güvence sağlar. Türkiye'ye Gelen Seyahat Sigortası ise yabancı ziyaretçiler için özel olarak tasarlanmış olup, Türkiye'ye seyahat edenlerin beklenmedik sağlık durumlarına karşı korunmalarını sağlar. Her iki ürünümüz de müşterilerimizin seyahatlerini güvenle yapmalarını ve olası risklere karşı hazırlıklı olmalarını sağlayarak, keyifli ve güvenli bir seyahat deneyimi sunmayı hedefler."
        /> */}
        </section>
    )
}

export default BuyInTwoMinutesSection