import { UiSelect } from '@/lib'
import React, { FC, useEffect, useState } from 'react'

interface DistrictInputPropsType {
    inputValidationProp: any;
    cityId?: string,
    disabled?: boolean
}


const DistrictInput: FC<DistrictInputPropsType> = (props) => {
    const {inputValidationProp, cityId, disabled} = props
    const [districtList, setDistrictList ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        const fetchDistricts = async () => {
            
            setIsLoading(true)
            if(!cityId) return
            console.log('the cityId before fetching : ', cityId)
            const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getDistrictList`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cityId
                })
            })
            const DistrictList = await res.json()
            const formattedDistrictList = DistrictList?.Result?.map((district: {districtName: string, districtId: string}) => ({label: district.districtName, value: district.districtId}))
            setDistrictList(formattedDistrictList)
            setIsLoading(false)
        }
        fetchDistricts()
    },
    [cityId])

  return (
     <UiSelect 
        placeholder='İlçe'
        {...inputValidationProp}
        data={districtList}
        searchable
        clearable
        classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
        // disabled={disabled || isLoading}
        />
  )
}

export default DistrictInput