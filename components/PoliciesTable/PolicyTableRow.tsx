import appConfig from '@/app.config';
import formatDate from '@/utils/helpers/formatDate';
import { PolicyType } from '@/utils/types/index'
import React, { FC, useEffect, useState } from 'react'


interface PolicyTableRowType {
    policy: PolicyType
}

const PolicyTableRow: FC<PolicyTableRowType> = (props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [downloadUrl, setDownloadUrl] = useState()
    const { policy } = props;
    useEffect(() => {
        const getPdfUrl = async () => {
            setLoading(true)
            fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getPolicyPdfUrl`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    proposalId: policy?.proposalId
                })
            }).then(async res => {
                const data = await res.json()
                setDownloadUrl(data?.Result)
            }).catch(err => {
                console.error('error while fetching download url')
            })
            setLoading(false)
        }
        getPdfUrl()
    }, [policy])
    return (

        <tr className='px-[21px] py-[33px]'>
            <td className='px-[20px] py-[33px] text-center border-t border-b border-[#C3C3C3] border-l rounded-tl-[15px] rounded-bl-[15px] font-medium text-primary'>{`${policy?.name} ${policy?.surname}`}</td>
            <td className='px-[20px] py-[33px] text-center border-t border-b border-[#C3C3C3] font-medium text-primary'>{policy?.policyAgencyInfo?.agencyName ?? 'Sigortasi'}</td>
            <td className='px-[20px] py-[33px] text-center border-t border-b border-[#C3C3C3] font-medium text-primary'>{policy.OutStartDate && formatDate(policy.OutStartDate)}</td>
            <td className='px-[20px] py-[33px] text-center border-t border-b border-[#C3C3C3] font-medium text-primary'>{policy?.price} TL</td>
            <td className='px-[20px] py-[33px] text-center border-t border-b border-[#C3C3C3] font-medium text-primary'>{policy?.policyType ?? 'Policy type'}</td>
            <td className={`px-[20px] py-[33px] text-center border-t border-b border-[#C3C3C3] border-r rounded-tr-[15px] rounded-br-[15px] font-medium text-primary 
            ${loading && 'opacity-20'}
            `}><a href={downloadUrl} className='bg-grass-green text-white rounded-[64px] border border-grass-green hover:bg-white hover:text-grass-green px-3 py-3 text-base font-medium'>
                <span className='translate-y-[2px] inline-block'>
                    PDF’i İndir
                </span>
            </a>
            </td>
        </tr>
    )
}




export default PolicyTableRow