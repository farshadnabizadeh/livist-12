import ClientLayout from '@/components/Layouts/ClientLayout'
import Payment from '@/components/Pages/Payment/Payment'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { ReactElement } from 'react'

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  
  return {
      props: {
        ...(await serverSideTranslations(locale as string, ["common"])) },
    };
}


const Pay = () => {
  return (
    <div>
      <Payment />
    </div>
  )
}


Pay.getLayout = function getLayout(page: ReactElement) {
  return (
    
      <ClientLayout>{page}</ClientLayout>
    
  )
}


export default Pay