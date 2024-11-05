import formatDate from '@/utils/helpers/formatDate'
import useIsDomLoaded from '@/utils/hooks/useIsDomLoaded'
import Policy from '@/utils/types/PolicyType'
import React, { FC } from 'react'
import PolicyTableRow from './PolicyTableRow'

interface PoliciesTableType {
    policies?: Policy[]
}


const PoliciesTable: FC<PoliciesTableType> = (props) => {
    const { policies } = props
    const isDomLoaded = useIsDomLoaded()
    return (
        <section className='container px-[210px] mt-[70px]'>
            {
                isDomLoaded &&
                <table className='w-full border-separate border-spacing-x-0 border-spacing-y-4'>
                    <thead>
                        <tr className='text-base text-primary'>
                            <th className='font-light'>AD SOYAD</th>
                            <th className='font-light'>SİGORTA ŞİRKETİ</th>
                            <th className='font-light'>BAŞLANGIÇ</th>
                            <th className='font-light'>FİYAT</th>
                            <th className='font-light'>SİGORTA TÜRÜ</th>
                            <th className='font-light'>İŞLEMLER</th>
                        </tr>

                    </thead>
                    {policies && policies?.length < 1 && <p>Kayıt Bulunamadı!</p>}
                    <tbody>
                        {
                            policies && policies.length > 0 && policies.map(policy => {
                                const { } = policy;
                                return (
                                    <PolicyTableRow policy={policy} key={policy?.id}/>
                                )
                            })
                        }

                    </tbody>


                </table>
            }



        </section>
    )
}





PoliciesTable.displayName = "PoliciesTable"

export default PoliciesTable