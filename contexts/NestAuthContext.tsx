import { useRouter } from "next/router";
import nookies from "nookies";
import { createContext, useEffect, useState, useContext, SetStateAction, useMemo, useLayoutEffect } from "react";
import { auth, db } from "@/utils/config/firebase";
import isObjectEmpty from "@/utils/helpers/isObjectEmpty";
import { UserType } from "@/utils/types";
import UserTypeV2 from "@/utils/types/UserTypeV2";
import { jwtDecode } from "jwt-decode";
import React from 'react'
interface AuthContextType {
  user: UserTypeV2 | null;
  signIn: (phoneNo: string, smsCode: string | number, callbackUrl?: string, callbackFunction?: () => void) => void;
  signUp: (
    phoneNo: string,
  ) => void;
  logout: () => void;
  loading: boolean;
  errors: { errorCode?: string; errorMessage?: string };
  numberSentForVarification: string | undefined
  setNumberSentForVarification: React.Dispatch<SetStateAction<string | undefined>>
  isVarificationNumberSent: boolean
  setIsVarificationNumberSent: React.Dispatch<SetStateAction<boolean>>
  isLogoutModalOpen: boolean
  openLogoutModal: () => void
  closeLogoutModal: () => void

}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => null,
  signUp: () => null,
  logout: () => null,
  loading: true,
  errors: {},
  numberSentForVarification: undefined,
  setNumberSentForVarification: () => null,
  isVarificationNumberSent: false,
  setIsVarificationNumberSent: () => null,
  isLogoutModalOpen: false,
  openLogoutModal: () => null,
  closeLogoutModal: () => null
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<UserTypeV2 | null>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [isVarificationNumberSent, setIsVarificationNumberSent] = useState<boolean>(false)
  const [isPassowrdResetEmailSent, setIsPasswordResetEmailSent] = useState<undefined | boolean>()
  const [numberSentForVarification, setNumberSentForVarification] = useState<string>()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const router = useRouter();

  const signUp = async (
    phoneNo: string,

  ) => {
    try {

      setLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            phoneNo: phoneNo
          }
        )
      })
      setLoading(false)
      setIsVarificationNumberSent(true)
      return res.json()

    } catch (err) {
      console.error("error from registering", err);
      setIsVarificationNumberSent(false)
      return null
    }
  };

  const signIn = async (phoneNo: string, smsCode: string | number, callbackURL?: string, callbackFunction?: () => void) => {
    console.log('sign in called: ')
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_APIS_BASE_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            username: phoneNo,
            password: smsCode
          }
        )
      })
      const user = await res.json();
      if (res.status !== 201) {
        console.log('this is the res from signIn', res)
        setErrors(res)
        return;
      }
      setUser(user)
      setLoading(false)
      setIsVarificationNumberSent(false)
      // TODO: use cookies instead of the localstorage
      localStorage.setItem('ac', user?.access_token)
      console.log('this is the user from sign in', user)
      callbackFunction && callbackFunction()
      const callbackUrl = router.query.callbackurl
      callbackUrl && typeof callbackUrl == 'string' && router.push(callbackUrl)
      return user

    } catch (err) {
      console.error('error signing in : ', err)
    }
    setLoading(false)
  };


  const openLogoutModal = () => {
    setIsLogoutModalOpen(true)
  }

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false)
  }

  useEffect(() => {
    console.log("AuthContext Errors: ", errors);
  }, [errors]);


  // useEffect(() => {
  //   console.log("userFromFirebase", userFromFirebase);
  // }, [userFromFirebase]);
  // TODO: remove nookie token on logout

  const logout = async () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem('ac')
    if(isLogoutModalOpen) {
      closeLogoutModal()
    }
    // router.push('/login')
    setLoading(false);
  };

  // listen for token changes
  // call setUser and write new token as a cookie
  useLayoutEffect(() => {
    setLoading(false);
    const jwtFromLocalStorate = localStorage.getItem('ac')
    console.log('jwtFromLocalStorate', jwtFromLocalStorate)
    if (jwtFromLocalStorate && typeof jwtFromLocalStorate == 'string' && jwtFromLocalStorate !== 'undefined') {

      let user: any = jwtDecode(jwtFromLocalStorate)
      console.log('this is ther user from decoded jwt:', user)
      user = { ...user, access_token: jwtFromLocalStorate }
      setUser(user as UserTypeV2)

    } else {
      setUser(null)
    }
    setLoading(false);
  }, [])

  useEffect(() => {
    console.log('user Changed', user)
  }, [user]);

  // force refresh the token every 10 minutes

  const value = useMemo<AuthContextType>(
    () => (
      {
        user,
        signIn,
        signUp,
        logout,
        loading,
        errors,
        numberSentForVarification,
        setNumberSentForVarification,
        isVarificationNumberSent,
        setIsVarificationNumberSent,
        isLogoutModalOpen,
        openLogoutModal,
        closeLogoutModal
      }

    )
    ,
    [
      user,
      signIn,
      signUp,
      logout,
      loading,
      errors,
      numberSentForVarification,
      setNumberSentForVarification,
      isVarificationNumberSent,
      setIsVarificationNumberSent,
      isLogoutModalOpen,
      setIsLogoutModalOpen
    ]
  )

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}
