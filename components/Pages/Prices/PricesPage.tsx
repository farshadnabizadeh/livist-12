import Checkbox from '@/components/Checkbox/Checkbox'
import InsuranceExplanationAccordion from '@/components/InsuranceExplanationAccodion/InsuranceExplanationAccodion'
import PriceCard from '@/components/PriceCard/PriceCard'
import { useAuth } from '@/contexts/NestAuthContext'
import PriceRow from '@/pages/prices/partials/PriceRow'
import PricesPageHero from '@/pages/prices/partials/PricesPageHero'
import { policiesInfo } from '@/utils/data/policiesInfo'
import doesThePolicyHavePlans from '@/utils/helpers/doesPolicyhavePlans'
import formatDate from '@/utils/helpers/formatDate'
import { PolicyInfoType } from '@/utils/types/PolicyInfoType'
import { useRouter } from 'next/router'
import React, { ChangeEvent, FC, use, useEffect, useLayoutEffect, useState } from 'react'
import { filtersDefinitions } from '@/utils/data/filters'

interface PolicyPriceDataType {
  price: number,
  duration?: number,
  refrenceCompany?: string,
}


const PricesPage: FC = () => {
  const [policyPriceInfo, setPolicyPriceInfo] = useState<PolicyPriceDataType[]>([])
  const [policyInfo, setPolicyInfo] = useState<PolicyInfoType[]>([])
  const [filteredPolicies, setFilteredPolicies] = useState<PolicyInfoType[]>([])
  const [productsCategoryInfo, setProductsCategoryInfo ] = useState<any>()
  const [filters, setFilters] = useState<{
    title: string;
    fields: {
      lable: string;
      value: string;
      productRelationId: string;
      isChecked: boolean
    }[]
  }[]>()

  const policyHasPlans: boolean | null = doesThePolicyHavePlans(policyInfo[0]?.productId, policyInfo[0]?.productTarifId, policyInfo[0]?.productVersionId)
  const router = useRouter()
  const { user } = useAuth()


  const handleFilter = (e: ChangeEvent<HTMLInputElement>, checkedInputValue: string) => {
    const value = e.currentTarget.value
    
    const appliedFilter = filters?.map(filterItem => ({
      ...filterItem, fields: (filterItem.fields.map(filterField => {
        if (checkedInputValue == filterField.value) {
          return ({ ...filterField, isChecked: !filterField.isChecked })
        } else {
          return (filterField)

        }
      }))
    }))

    setFilters(appliedFilter)

  }

  const params = router.query
  // @ts-expect-error
  const policiesId = params?.id?.split(',')


  const findFilters = () => {
    if (!Array.isArray(policyInfo) || (Array.isArray(policyInfo) && policyInfo.length == 0)) return
    const mainFetchedPolicy = policyInfo[0]
    if (!mainFetchedPolicy) return
    const matchedPolicyType = policiesInfo.find(policy => (policy.branchId == mainFetchedPolicy.branchId && policy.productTarifId == mainFetchedPolicy.productTarifId && policy.productVersionId == mainFetchedPolicy.productVersionId));
    const categoryId = matchedPolicyType?.categoryId;
    if (!categoryId) return;
    const filtersList = filtersDefinitions.find(filterDefinition => filterDefinition.categoryId == categoryId)
    if (!filtersList) return
    // add the property isChecked to the filterfields:
    const filtersToSet = filtersList.filters.map(filterItem => ({ ...filterItem, fields: (filterItem.fields.map(filterField => ({ ...filterField, isChecked: false }))) }))
    console.log('here are the filter: ', filters)
    setFilters(filtersToSet)

  }

  const hanldeFilterApplication = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()
  
    const selectedFields = filters?.flatMap(item => item.fields.filter(field => field.isChecked));
    const selectedProductsRelationalData = policiesInfo.filter(policy =>
      selectedFields?.some(filter => policy.relationId === filter.productRelationId)
  );



  if(selectedFields?.length == 0 ){
    clearFilters()
    return;
  }


    const filteredPolicies = policyInfo.filter(policy =>
      selectedProductsRelationalData?.some(filter => (policy.branchId == filter.branchId && policy.productId == filter.productId && policy.productVersionId == filter.productVersionId && policy.productTarifId == filter.productTarifId))
  );

  setFilteredPolicies(filteredPolicies)

  }

  const clearFilters = () => {
    setFilteredPolicies(policyInfo)
  }


  useEffect(() => {
    const getPrices = async () => {
      const policiesRes = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/get-policies-from-prooposal-array-list`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${user?.access_token}`,
          "Content-Type": "application/json",

        },
        body: JSON.stringify({

          proposalIds: policiesId
        })

      })
      const policies = await policiesRes.json()
      console.log('these are the policies: ', policies)
      // const policyRes = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/get-policy/${policyId}`, {
      //   headers: {
      //     "Authorization": `Bearer ${user?.access_token}`

      //   }
      // })
      // const policy = await policyRes.json()
      // console.log('this is the proposal,', policy)

      // Filter the array to keep only unique objects based on the specified fields

      setPolicyInfo(policies)

      // console.log('his is the user vbefore getProposalPremiumParams', user)
      // const getPricesRes = await fetch(
      //     `${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getProposalPremiumParams`,
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //         "Authorization": `Bearer ${user?.access_token}`
      //       },
      //       body: JSON.stringify({
      //         branchId: "S",
      //         proposalId: policy?.proposalId ,
      //       }),
      //     }
      //   );
      // if( getPricesRes.status !== 201 ) return;
      // const prices = await getPricesRes.json()

      // console.log('here is the prices', prices)
      //   setPolicyPriceInfo(prevState => ([...prevState, 
      //     {
      //         duration: 1,
      //         price: prices?.Result?.Premium,
      //         refrenceCompany: 'demir-hayat'
      //     }
      // ]))
      //   return getPricesRes
    }
    getPrices()
  }, [user])


  useEffect(() => {
    findFilters()
    // handleFilter()
    
  }, [policyInfo])

  useEffect(() => {
    clearFilters()
    const productsCategory = policiesInfo.find(item => item.productTarifId == policyInfo[0]?.productTarifId)
    console.log('here is the productsCategory', productsCategory)
    setProductsCategoryInfo(productsCategory)
  }, [policyInfo,clearFilters,policiesId,findFilters])


  return (
    <div>
      {policyInfo && Array.isArray(policyInfo) && policyInfo.length > 0 && (
        <>
          <PricesPageHero
            img='https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fyabanci-sagilik-banner.png?alt=media&token=40d1d3ab-0616-42ff-a919-24517147eaae'
            title={productsCategoryInfo?.productName}
            birthDate={policyInfo[0]?.birthDate as unknown as Date}
            nameSurname={`${policyInfo[0]?.name} ${policyInfo[0].surname}`}
            passOrIdNo={policyInfo[0]?.passportNo ?? policyInfo[0].TCIdNo}
            startDate={policyInfo[0]?.policyStartDate as unknown as Date}
          />
          <div>

          </div>
          <div className='container  '>
            <div className='my-[51px] flex justify-center'>

              <h2 className='text-primary font-medium text-xl text-center'>İsteğiniz sigorta şirketini seçin</h2>
              <div></div>
            </div>
            <div className='container flex'>
              {
              filters &&  <div className='w-[284px] mt-[-22px] mr-[13px]'>
                
                    <h3 className='text-xl text-primary font-medium mb-[21px]'>Filtre</h3>

              
                  {
                    Array.isArray(filters) && filters?.length > 0 && 
                  <div className='flex flex-col border border-#[E1E1E1] rounded-[15px] py-[31px] px-6'>
                    <form onSubmit={(e) => hanldeFilterApplication(e)}>
                      {
                      filters.map(filter => {
                          const { title, fields } = filter;
                          return (
                            <div className='flex flex-col' key={title}>
                              <span className='text-primary font-bold text-base mb-[26px]'>{title}</span>
                              {
                                fields.map(field => {
                                  const { lable, value, productRelationId, isChecked } = field
                                  return (
                                    <Checkbox handleChange={handleFilter} label={lable} key={value} value={isChecked} checkedInputValue={value} />
                                  )
                                })
                              }
                            </div>
                          )
                        })

                      }
                      <button type='submit' className='w-full flex items-center justify-center bg-primary rounded-xl text-white py-[14px] mt-7 hover:bg-white hover:text-primary transition-all border border-primary'>
                        <span className='inline-block'>Filtrele</span>
                      </button>
                    </form>
                  </div>
                  }
                  </div>

              }
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[27px] justify-between px-5 lg:px-0'>


                {
                  // policyHasPlans 
                  // ?
                  // when policy has different plans:
                  Array.isArray(filteredPolicies) && filteredPolicies.length >= 1 && filteredPolicies.map(policy => {
                    const { proposalId, days, planNo, price, description, benefits } = policy;
                    const benefitsArray = benefits?.Result;
                    return (
                      <div className='w-full max-w-[438px] my-[27px] lg:mx-[13px]' key={proposalId}>

                        <PriceCard planId={planNo} premium={price} proposalId={proposalId} days={days} planName={description} planDescription={description} benefits={benefitsArray} />
                      </div>
                    )
                    // :
                    //  <PriceRow duration={Number(days)} price={premiumParam} refrenceCompany={'Demir Hayat'} policyId={proposalId as unknown as string} key={index} />

                  })
                }
                {/* {
                policyInfo.map((policyInfo, index) => {
                  // const {price, duration = 1, refrenceCompany = 'Demir Hayat'} = policyInfo
                  const { days, price, proposalId } = policyInfo
                  const premiumParam = typeof price === 'number' ? price : price?.Result?.Premium
                    return (
                      policyHasPlans
                      ? <div>policy card</div>
                      : <PriceRow duration={Number(days)} price={premiumParam} refrenceCompany={'Demir Hayat'} policyId={proposalId as unknown as string} key={index} />
                    )
                  
                  // return (

                  //     <PriceRow duration={Number(days)} price={price?.Result?.Premium} refrenceCompany={'Demir Hayat'} policyId={ proposalId as unknown as string} key={index}/>

                  //     )
                })
              } */}

              </div>

            </div>

          </div>
          <div id="insurace-explanation">
            <InsuranceExplanationAccordion
              label="Yabancı Sağlık Sigortası Nedir?"
              description="LIVIST SIGORTA'NIN YABANCI SAĞLIK SIGORTASI, TÜRKIYE'DE IKAMET IZNI SAHIBI OLAN YABANCI VATANDAŞLAR IÇIN ÖZEL OLARAK TASARLANMIŞ BIR GÜVENCE SAĞLAMA POLIÇESIDIR. YABANCI MISAFIRLERIN SAĞLIK IHTIYAÇLARINI KARŞILAMAK VE ONLARI BEKLENMEDIK SAĞLIK SORUNLARINA KARŞI KORUMAK AMACIYLA GELIŞTIRILMIŞTIR. BU ÖZEL SIGORTA POLIÇESI, YABANCI IKAMET SAHIPLERINE TÜRKIYE'DE SAĞLIK HIZMETLERINE SORUNSUZ VE HIZLI BIR ERIŞIM SUNAR. ACIL TIBBI MÜDAHALELERDEN, HASTALIKLARA VE KAZA SONUCU YARALANMALARA KADAR BIR DIZI SAĞLIK OLAYINA KARŞI KORUMA SAĞLAR. BUNA EK OLARAK, POLIÇE SAHIPLERINE TÜRKIYE'NIN ÖNDE GELEN SAĞLIK TESISLERINDE TEDAVI ALMA FIRSATI SUNAR. LIVIST SIGORTA'NIN YABANCI SAĞLIK SIGORTASI, YABANCI MISAFIRLERE GÜVENDE HISSETMELERI VE TÜRKIYE'DE SIKINTISIZ BIR YAŞAM SÜRDÜRMELERI IÇIN GEREKLI OLAN SAĞLIK GÜVENCESINI SUNAR. GENIŞ AĞIMIZ, UZMAN EKIBIMIZ VE 7/24 DESTEK HIZMETIMIZLE, YABANCI IKAMET SAHIPLERINE SAĞLIK SORUNLARIYLA BAŞA ÇIKMA KONUSUNDA TAM BIR GÜVEN SAĞLARIZ. TÜRKIYE'DE IKAMET EDEN YABANCI VATANDAŞLAR IÇIN GÜVENCE VE HUZUR ARIYORSANIZ, LIVIST YABANCI SAĞLIK SIGORTASI SIZIN IÇIN IDEAL SEÇENEKTIR."
            />
          </div>
        </>
      )
      }
    </div>
  )
}

PricesPage.displayName = 'PricesPage'

export default PricesPage