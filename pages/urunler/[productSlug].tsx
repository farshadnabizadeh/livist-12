import ClientLayout from "@/components/Layouts/ClientLayout";
import PricesPage from "@/components/Pages/Prices/PricesPage";
import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NotAutomatedProductsPage from "@/components/Pages/NotAutomatedProductsPage/NotAutomatedProductsPage";


export const getServerSideProps: GetStaticProps = async (context) => {
    const { locale } = context;
    
    return {
        props: {
          ...(await serverSideTranslations(locale as string, ["common"])) },
      };
}

const Prices = () => {
  return (
    <div>
      <NotAutomatedProductsPage />
    </div>
  );
};

Prices.getLayout = function getLayout(page: ReactElement) {
    return <ClientLayout>{page}</ClientLayout>;
  };
  

export default Prices;
