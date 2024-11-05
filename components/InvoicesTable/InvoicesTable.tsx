import formatDate from '@/utils/helpers/formatDate'
import useIsDomLoaded from '@/utils/hooks/useIsDomLoaded'
import { InvoiceType } from '@/utils/types/InvoiceType'
import React, { FC } from 'react'
import ClockIcon from "@/assets/images/icons/clock-icon.svg";
import SheetsIcon from '@/assets/images/icons/sheets-icon.svg'
import BadgeIcon from '@/assets/images/icons/badge-icon.svg'
import EyeIcon from '@/assets/images/icons/eye-icon.svg'


interface InvoicesTableType {
    invoices?: InvoiceType[]
}


const InvoicesTable: FC<InvoicesTableType> = (props) => {
    const { invoices } = props
    const isDomLoaded = useIsDomLoaded()
    return (
        <section className='container px-[210px] mt-[70px]'>
            {
                isDomLoaded &&
                <table className='w-full border-separate border-spacing-x-0 border-spacing-y-4'>
                    <thead>
                        <tr className='text-base text-primary'>
                            <th className='font-light text-left pl-[26px]'>Ödeme Tarihi ve Saati</th>
                            <th className='font-light text-left'>Makbuz / Dekont Numarası</th>
                            <th className='font-light text-left'>Ödeyen</th>
                            <th className='font-light text-left'>Ürün</th>
                            <th className='font-light text-left pr-[21px]'>İşlem</th>
                        </tr>

                    </thead>
                    {!invoices || invoices?.length < 1 && <p>Kayıt Bulunamadı!</p>}
                    <tbody>
                        {
                            invoices && invoices.length > 0 && invoices.map(policy => {
                                const { created_at, order_id, invoice_id, credit_card_no } = policy;
                                return (
                                    <tr className='px-[21px] py-[33px]' key={invoice_id}>
                                        <td className='pl-[26px] py-[33px] text-left border-t border-b border-[#C3C3C3] border-l rounded-tl-[15px] rounded-bl-[15px] font-medium text-primary'>
                                            <div className='flex items-center space-x-2'>
                                                <ClockIcon />
                                                <span>
                                                    {formatDate(created_at)}
                                                </span>

                                            </div>
                                        </td>
                                        <td className='py-[33px] text-left border-t border-b border-[#C3C3C3] font-medium text-primary'>
                                            <div className='flex items-center space-x-2'>
                                                <SheetsIcon />
                                                <span>
                                                    {invoice_id} / {order_id}
                                                </span>
                                            </div>
                                        </td>
                                        <td className=' py-[33px] text-left border-t border-b border-[#C3C3C3] font-medium text-primary'>
                                            <div className='flex items-center space-x-2'>
                                                <BadgeIcon />
                                                <span>
                                                    {credit_card_no}
                                                </span>

                                            </div>
                                        </td>
                                        <td className=' py-[33px] text-left border-t border-b border-[#C3C3C3] font-medium text-primary'>
                                            <div className='flex items-center space-x-2'>
                                                <BadgeIcon />

                                                <span>
                                                    Sigorta
                                                </span>

                                            </div>
                                        </td>
                                        <td className='pr-[21px] py-[33px] text-left border-t border-b border-[#C3C3C3] border-r rounded-tr-[15px] rounded-br-[15px] font-medium text-primary'>
                                            <a href={'#'} className='inline-block p-[9px] rounded-full bg-grass-green text-white border border-grass-green hover:bg-white hover:text-grass-green '>


                                            <EyeIcon className="w-[24px] h-[24px]"/>

                                        </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>


                </table>
            }



        </section>
    )
}


InvoicesTable.displayName = 'InvoicesTable'

export default InvoicesTable