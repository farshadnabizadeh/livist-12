import useTrans from '@/utils/hooks/useTrans'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import demirHayatLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/demir-sigorta-box.png'
import { UiSpoiler } from '@/lib/index'
import BenefitText from './BenefitText'
import stripHTML from '@/utils/helpers/stripHTML'
import Image from 'next/image'
export interface BenefitType {
    planId?: string
    planName?: string
    planDescription?: string
    benefitCode?: string
    benefitSubCode?: string
    benefitName?: string
    limit?: string
    companyParticipation?: string
    limit2?: string
    companyParticipation2?: string
}

interface PriceCardType {
    planName?: string,
    planDescription?: string,
    planId: string,
    premium: number,
    codeDescription?: string,
    proposalId: number,
    days?: string,
    benefits?: BenefitType[]
}


const PriceCard: FC<PriceCardType> = (props) => {
    const { planId, proposalId, premium, planName, planDescription, codeDescription, days, benefits } = props
    const [ filters, setFilters ] = useState()
    const t = useTrans()

    return (
        <div className='relative border border-[#E1E1E1] rounded-[25px] flex flex-col justify-start items-center space-y-3 px-5 lg:px-[40px] pb-[38px] pt-[39px] cursor-pointer hover:shadow-lg transition-all duration-500'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-[#E1E1E1] rounded-[15px] p-[14px]'>
                <Image src={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fdemir-hayat-logo%202.png?alt=media&token=4837b9fc-7222-4e4b-9781-913102f8e165'} alt='Livist' className="w-[85px] h-[34px]" />

            </div>
            {/* TODO: make this dynamic */}
            <p className='text-center font-medium text-xl text-accent'>{planName ?? "YABANCILAR İÇİN FERDİ SAĞLIK SİGORTASI"}</p>
            <div className='w-full h-[1px] border-t-[1px] border-dashed border-primary'></div>
            {/* <p>{planDescription}</p> */}
            <p className='text-xl font-bold text-primary'>{premium} TL</p>

            {days && <p>Gün: {days}</p>
            }

            <div className='flex flex-col'>
                <UiSpoiler maxHeight={120} showLabel={t("DAHA FAZLA DETAY...")} hideLabel={t("KAPAT")}>
                    {
                        benefits && benefits.map((benefit, index) => {
                            const { benefitName, limit, limit2 } = benefit;
                            return (
                                <BenefitText benefitName={stripHTML(benefitName)} limit={limit} limit2={limit2} key={index}/>
                            )


                        })}

                </UiSpoiler>
                {/* <p className='text-sm'>{planId}</p> */}
            </div>
            <div>
                {/* <span className='font-medium text-xl text-light-blue mr-6'>{premium} TL</span> */}
                <Link href={{ pathname: '/pay', query: `proposalId=${proposalId}` }} className='bg-accent !mt-4 rounded-[51px] text-white text-base font-medium px-[85px] py-3 hover:bg-white border border-accent hover:text-accent transition-all '>{t("SATIN AL")}</Link>
            </div>
        </div>
    )
}

PriceCard.displayName = "PriceCard"

export default PriceCard