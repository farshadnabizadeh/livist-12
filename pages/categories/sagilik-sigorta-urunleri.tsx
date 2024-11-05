import ClientLayout from '@/components/Layouts/ClientLayout';
import SagilikSigortaUrunleriPage from '@/components/Pages/Categories/SagilikSigortaUrunleriPage';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { ReactElement } from 'react'




export const getStaticProps: GetStaticProps = async (context) => {
    // fetch a list of properties from the database
    const { locale } = context;
 
  
    return {
      props: {
        // yabanciSagilikPesinPlan,
        // yabanciSagilikProduct,
        ...(await serverSideTranslations(locale as string, ["common"])) },
      revalidate: 60 , // In seconds this is equivalent to one minute
    };
  };
  



const SagilikSigortaUrunleri = () => {
  return (
    <div>
        <SagilikSigortaUrunleriPage />
    </div>
  )
}




SagilikSigortaUrunleri.getLayout = function getLayout(page: ReactElement) {
    return <ClientLayout>{page}</ClientLayout>;
  };
  



export default SagilikSigortaUrunleri