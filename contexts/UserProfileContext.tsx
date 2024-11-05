import { useRouter } from "next/navigation";
import nookies from "nookies";
import { createContext, useEffect, useState, useContext, SetStateAction, useMemo, useLayoutEffect } from "react";
import { auth, db } from "@/utils/config/firebase";
import isObjectEmpty from "@/utils/helpers/isObjectEmpty";
import { UserInfoForProfileType, UserType } from "@/utils/types";
import UserTypeV2 from "@/utils/types/UserTypeV2";
import { jwtDecode } from "jwt-decode";
import React from 'react'
import { useAuth } from "./NestAuthContext";
import { InvoiceType } from "@/utils/types/InvoiceType";
interface UserProfileContexType {
    userInfo: UserInfoForProfileType | null,
    invoices?: InvoiceType[],

}
// @ts-ignore
const UerProfileContext = createContext<UserProfileContexType>({
    userInfo: null,
});

export const useProfileContext = () => {
    return useContext(UerProfileContext);
};

export function UserProfileProvider({ children }: any) {
    const [userInfo, setUserInfo] = useState<UserInfoForProfileType | null>(null);
    const [invoices, setInvoices] = useState<InvoiceType[]>()
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [numberSentForVarification, setNumberSentForVarification] = useState<Number>()
    const router = useRouter();
    const { user } = useAuth()

    const getPageInfo = async () => {
        // setLoading(true)
        // try {
        //     const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}users/getuser`, {

        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${user?.access_token}`
        //         },
        //         body: JSON.stringify({
        //             phoneNo: user?.phoneNo,
        //             withPolicies: true
        //         }),
        //     }
        //     )
        //     const userInfo = await res.json()
        //     setUserInfo(userInfo[0])

        // } catch (err) {
        //     throw new Error("fetching page info was not successfull ", { cause: err })
        // }
        setLoading(false)
        return;
    }



    const getInvoices = async () => {
        setLoading(true)
        const res = fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}payment/getInvoices`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user?.access_token}`
            },
            body: JSON.stringify({
                phoneNo: user?.phoneNo,
            }),
        }
        ).then(res => {
            res.json().then((data) => {
                setInvoices(data)
            })
            setLoading(false)
            return res.json()
        }).catch(err => {
            console.log("error in fetching Invoices: ", err)
        })
    }


    useEffect(() => {
        getPageInfo()
        getInvoices()
    },
        [user])

    useEffect(() => {
        console.log("AuthContext Errors: ", errors);
    }, [errors]);



    const value = useMemo<UserProfileContexType>(
        () => (
            {
                userInfo,
                invoices,


            }

        )
        ,
        [
            userInfo,
            invoices,

        ]
    )

    return (
        <UerProfileContext.Provider
            value={value}
        >
            {children}
        </UerProfileContext.Provider>
    );
}
