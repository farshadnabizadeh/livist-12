import React, { useEffect, useState } from 'react'
import BuyInTwoMinutesSection from '@/components/BuyInTwoMinutesSection/BuyInTwoMinutesSection'
import ApplicationForm from '@/components/GeneralApplicationForm/GeneralApplicationForm'
import useTrans from '@/utils/hooks/useTrans'
import { useRouter } from 'next/router'
import ShoppoingBag from "@/assets/images//icons/shopping-bag.svg";
import TwentyFourHour from "@/assets/images//icons/twenty-four-hour.svg";
import ShieldIcon from "@/assets/images/icons/shield.svg";
import BackgroundShadow from '@/assets/images/icons/hero-background-shadow.svg'
import { InsuranceItemType } from '@/utils/types'
import { InsurranceItems } from '@/utils/data'

const NotAutomatedProductsPage = () => {
    const [product, setProduct] = useState<InsuranceItemType>()
    const router = useRouter()
    const params = router.query
    const productSlug = params?.productSlug
    const t = useTrans()
    console.log('this is the product Slug: ', productSlug)
    useEffect(() => {
        // console.log('the param changed')
        // console.log('this is the productSlug', productSlug)
        const selectedProduct = InsurranceItems.find(product => product.value === productSlug)
        // console.log('this is the selectedProduct', selectedProduct)
        setProduct(selectedProduct)
    } ,
    [productSlug])

    useEffect(() => {
        console.log('selected product changed: ', product)
    }, [product])

    return (<>
        <BackgroundShadow className="absolute top-0 left-0 w-full z-[-1]" />

        <section className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-16 px-5 lg:px-0'>

                <div className="flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-primary font-black text-[34px] lg:text-[57px] leading-normal ">
                        {t(`${product?.label}`)}
                    </h1>
                    <div className="flex space-x-[6px] lg:space-x-[10px] items-center">
                        <ShieldIcon className="-translate-y-[11px] w-[14px] lg:w-[24px] h-[14px] lg:h-[24px]" />
                        <h2 className="font-semibold text-lg lg:text-[30px] text-accent leading-normal mb-[14px]">{t("3D GÜVENLI ÖDEME, ANINDA POLIÇE")}</h2>
                    </div>
                    <h2 className="mb-8 lg:mb-4 text-sm lg:text-base font-light lg:font-normal text-subtitle ">{t("SIGORTANIZDAN SADECE BIR ADIM UZAKTASINIZ...")}</h2>
                    <div className="flex space-x-2">
                        <button
                            type="button"
                            className="bg-accent flex items-center justify-center px-2 lg:px-9 py-3 w-full lg:w-auto rounded-[120px] text-white space-x-2"
                        >
                            <ShoppoingBag />
                            <span className="font-medium ">{t("TEKLİF AL")}</span>
                        </button>
                        <button
                            type="button"
                            className="bg-transparent flex items-center justify-center px-2 lg:px-9 py-3 w-full lg:w-auto text-primary space-x-2 border-2 border-primary rounded-[120px]"
                        >
                            <TwentyFourHour />
                            <span>{t("CANLI DESTEK")}</span>
                        </button>
                    </div>
                </div>
                <ApplicationForm />
            </div>
        </section>
        <BuyInTwoMinutesSection wrapperClassNames='mt-[100px]' />
    </>
    )
}

export default NotAutomatedProductsPage