import { UiSelect } from '@/lib'
import React, { FC, useEffect, useState } from 'react'

interface ProvinceInputPropsType {
    inputValidationProp: any;
    disabled?: boolean
}


const ProvinceInput: FC<ProvinceInputPropsType> = (props) => {
    const {inputValidationProp, disabled = false} = props
    const [provinceList, setProvinceList ] = useState()

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getProvinceList`)
            const provinceList = await res.json()
            const formattedProvincesList = provinceList?.Result?.map((province: {cityName: string, cityId: string}) => ({label: province.cityName, value: province.cityId}))
            setProvinceList(formattedProvincesList)
        }
        fetchCountries()
    },
    [])

  return (
     <UiSelect 
        placeholder='İL'
        {...inputValidationProp}
        data={provinceList}
        searchable
        clearable
        classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
        disabled={disabled}
        />
  )
}

export default ProvinceInput