import ClientLayout from '@/components/Layouts/ClientLayout';
import LoginPage from '@/components/Pages/Auth/LoginPage';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { ReactElement } from 'react'



export const getStaticProps: GetStaticProps = async (context) => {
    // fetch a list of properties from the database
    const {locale} = context
    return {
      props: { ...(await serverSideTranslations(locale as string, ['common'])), },
    };
  };
  


const Login = () => {
  return (
    
        <LoginPage />
  )
}

Login.displayName = "Login"

Login.getLayout = function getLayout(page: ReactElement) {
    return (
      
        <ClientLayout>{page}</ClientLayout>
      
    )
  }
  


export default Login