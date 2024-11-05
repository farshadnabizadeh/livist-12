import { UiSelect } from '@/lib'
import React, { FC, useEffect, useState } from 'react'

interface CountryInputPropsType {
    inputValidationProp: any
}


const CountryInput: FC<CountryInputPropsType> = (props) => {
    const {inputValidationProp} = props
    const [countriesList, setCountriesList ] = useState()

    useEffect(() => {
        const fetchCountries = async () => {
            const headers = {
                'Accept': 'application/json',
                "A": ""
                // 'If-None-Match': 'W/"3823-CZKQ+pmC+hCUjKXAV5LtT+PIUmk"', // Replace with the correct ETag value
                // 'Cookie': 'plesk_technical_domain=1', // Include relevant cookies if needed
                // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
            };
        
            console.log('this is thr url: ', `${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getNationalityList`)
            const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}demir-hayat/getNationalityList`, {
                headers: {
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br", 
                    "Connection":"keep-alive"
                }
                // credentials: "include",
                // mode: "navigate",


            })
            const countriesList = await res.json()
            const formattedCountriesList = countriesList?.Result?.map((country: {nationalityName: string, nationalityId: string}) => ({label: country.nationalityName, value: country.nationalityId}))
            setCountriesList(formattedCountriesList)
        }
        fetchCountries()
    },
    [])

  return (
     <UiSelect 
        placeholder='Uyruk'
        {...inputValidationProp}
        data={countriesList}
        searchable
        clearable
        classNames={{ input: "!bg-white !rounded-[50px] !border-none" }}
        />
  )
}

export default CountryInput