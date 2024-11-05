import Image from "next/image";
import { Inter, Vazirmatn } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import useTrans from "@/utils/hooks/useTrans";
import { ReactElement } from "react";
import ClientLayout from "@/components/Layouts/ClientLayout";
import YabanciSagilikInsurancePage from "@/components/Pages/InsurancePages/YabanciSagilikInsurancePage/YabanciSagilikInsurancePage";
import { YabanciSagilikInsuranceStepsProvider } from "@/contexts/InsuranceStepsContexts/YabanciSagilikInsuranceContext";
import { SaglikTurizmInsuranceStepsProvider } from "@/contexts/InsuranceStepsContexts/SaglikTurizmInsuranceContext";
import SaglikTurizmInsurancePage from "@/components/Pages/InsurancePages/SaglikTurizmInsurancePage/SaglikTurizmInsurancePage";



export const getStaticProps: GetStaticProps = async (context) => {
  // fetch a list of properties from the database
  const { locale } = context;
//  getting the information about the yabanci-sagilik sigortasi
  // const ProductListRes = await fetch(`${process.env.APIS_BASE_URL}/demir-hayat/getProductsList`)
  // const productsList = await ProductListRes.json()
  // // console.log("", productsList)
  // const yabanciSagilikProduct = productsList?.Result?.filter((product: any) => product.productId === 'SES' && product.productTarifId === '72' )[0]
  // console.log('the yabanciSagilikProduct', yabanciSagilikProduct)

  // const yabanciSagilikPlanListRes = await fetch(`${process.env.APIS_BASE_URL}/demir-hayat/getPaymentPlanList`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     "branchId":"S",
  //     "productId": "SES",
  //     "productTariffId": yabanciSagilikProduct.productTarifId,
  //     "productversionId": yabanciSagilikProduct.productVersionId
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'userName': process.env.DEMIR_HAYAT_USER_NAME!,
  //     'password': process.env.DEMIR_HAYAT_PASSWORD!,
  //     },
  // })

  // const yabanciSagilikPlanList = await yabanciSagilikPlanListRes.json()
  // const yabanciSagilikPesinPlan = yabanciSagilikPlanList?.Result?.filter((plan: any) => plan.planId === 'Peşin')[0]
  // console.log('yabanciSagilikPlanList', yabanciSagilikPlanList)
  // getting the payment plans for the yabanciSagilikProduct 

  return {
    props: {
      // yabanciSagilikPesinPlan,
      // yabanciSagilikProduct,
      ...(await serverSideTranslations(locale as string, ["common"])) },
    revalidate: 60 , // In seconds this is equivalent to one minute
  };
};

function SaglikTourism(props: any) {
  const t = useTrans();
  // console.log('this is the products list form the page: ', props.productsList?.product)
  
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${vazirmatn.className}`}
    // >
    <SaglikTurizmInsuranceStepsProvider 
     branchId="T"
     paymentPlanId="8660"
     paymentTypeId="H"
     productVersionId="006"
     productId="SYHT"
     productTarifId="103"
      >
      <SaglikTurizmInsurancePage />
    </SaglikTurizmInsuranceStepsProvider>
    // </main>
  );
}

SaglikTourism.getLayout = function getLayout(page: ReactElement) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default SaglikTourism;
