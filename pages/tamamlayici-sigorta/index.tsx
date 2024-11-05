import Image from "next/image";
import { Inter, Vazirmatn } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import useTrans from "@/utils/hooks/useTrans";
import { ReactElement } from "react";
import ClientLayout from "@/components/Layouts/ClientLayout";
import YabanciSagilikInsurancePage from "@/components/Pages/InsurancePages/YabanciSagilikInsurancePage/YabanciSagilikInsurancePage";
import { YabanciSagilikInsuranceStepsProvider } from "@/contexts/InsuranceStepsContexts/YabanciSagilikInsuranceContext";
import { TamamlayiciInsuranceStepsProvider } from "@/contexts/InsuranceStepsContexts/TamamlayiciInsuranceContext";
import TamamlayiciInsurancePage from "@/components/Pages/InsurancePages/TamamlayiciInsurancePage/TamamlayiciInsurancePage";

const inter = Inter({ subsets: ["latin"] });

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});



// export async function getStaticProps() {
//   const res = await fetch('/api/demirHayat/getProductsList')
//   const productsList = await res.json()
//   console.log('ths products list from hte getstaticprops: ',productsList )
//   return {
//     props: {
//       productsList,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 60 , // In seconds this is equivalent to one minute
//   }
// }
 






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

function YabanciSagilikInsurance(props: any) {
  const t = useTrans();
  // console.log('this is the products list form the page: ', props.productsList?.product)
  
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${vazirmatn.className}`}
    // >
    <TamamlayiciInsuranceStepsProvider 
      TamamlayiciProduct={props?.yabanciSagilikProduct}
      TamamlayiciPesinPlan={props?.yabanciSagilikPesinPlan}
      >
      <TamamlayiciInsurancePage />
    </TamamlayiciInsuranceStepsProvider>
    // </main>
  );
}

YabanciSagilikInsurance.getLayout = function getLayout(page: ReactElement) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default YabanciSagilikInsurance;
