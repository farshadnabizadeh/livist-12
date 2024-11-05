import React, { FC } from 'react'
import DemirHayatLogo from '@/assets/images/icons/logos/other-agencies-logos/demir-sigorta-logo.svg'
import useTrans from '@/utils/hooks/useTrans'
import Link from 'next/link'


interface PriceRowType {
    policyId: string,
    price: number,
    duration: number,
    refrenceCompany: string,
}


const PriceRow: FC<PriceRowType> = (props) => {
    const {duration, policyId, price, refrenceCompany} = props
    const t = useTrans()
  return (
    <div className='border border-[##E1E1E1] rounded-[15px] py-[34px] px-4 flex justify-between items-center '>
        <DemirHayatLogo />
        <span className='text-xl font-medium text-primary'>{duration} {t("GÜN")} </span>
        <div>
            <span className='font-medium text-xl text-light-blue mr-6'>{price} TL</span>
            <Link href={{pathname: '/pay', query: `proposalId=${policyId}`}} className='bg-grass-green rounded-[51px] text-white text-xl font-medium px-[40px] py-4 hover:bg-white border border-grass-green hover:text-grass-green transition-all'>{t("ÖDEME")}</Link>
        </div>
    </div>
  )
}

PriceRow.displayName = "PriceRow"

export default PriceRow