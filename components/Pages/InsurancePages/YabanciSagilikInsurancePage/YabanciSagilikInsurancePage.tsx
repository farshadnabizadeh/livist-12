import InsuranceExplanationAccordion from "@/components/InsuranceExplanationAccodion/InsuranceExplanationAccodion";
import InsurancePageHero from "@/components/InsurancePageHero/InsurancePageHero";
import { useYabanciSagilicStepsContext } from "@/contexts/InsuranceStepsContexts/YabanciSagilikInsuranceContext";
import React from "react";
import YabanciSagilikInsuranceBuySteps from "./Partials/YabanciSagilikInsuranceBuySteps/YabanciSagilikInsuranceBuySteps";


const YabanciSagilikInsurancePage = (props: any) => {
  const {values} = useYabanciSagilicStepsContext()
  const productsList = props?.productsList
  // console.log('here are the values : ', values)
  return (
    <div>
      <InsurancePageHero
        img="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fyabanci-sagilik-banner.png?alt=media&token=40d1d3ab-0616-42ff-a919-24517147eaae"
        title="Yabancı Sağlık Sigortası"
        subtitle_one="Tamamen çevrimiçi ve anında!"
        subtitle_two="Yabancılar için özel sağlık sigortası"
        CTAButtonText="Yabancı Sağlık Sigortası Nedir?"
      />
      <YabanciSagilikInsuranceBuySteps />
      <div id="insurace-explanation">
        <InsuranceExplanationAccordion
          label="Yabancı Sağlık Sigortası Nedir?"
          description="LIVIST SIGORTA'NIN YABANCI SAĞLIK SIGORTASI, TÜRKIYE'DE IKAMET IZNI SAHIBI OLAN YABANCI VATANDAŞLAR IÇIN ÖZEL OLARAK TASARLANMIŞ BIR GÜVENCE SAĞLAMA POLIÇESIDIR. YABANCI MISAFIRLERIN SAĞLIK IHTIYAÇLARINI KARŞILAMAK VE ONLARI BEKLENMEDIK SAĞLIK SORUNLARINA KARŞI KORUMAK AMACIYLA GELIŞTIRILMIŞTIR. BU ÖZEL SIGORTA POLIÇESI, YABANCI IKAMET SAHIPLERINE TÜRKIYE'DE SAĞLIK HIZMETLERINE SORUNSUZ VE HIZLI BIR ERIŞIM SUNAR. ACIL TIBBI MÜDAHALELERDEN, HASTALIKLARA VE KAZA SONUCU YARALANMALARA KADAR BIR DIZI SAĞLIK OLAYINA KARŞI KORUMA SAĞLAR. BUNA EK OLARAK, POLIÇE SAHIPLERINE TÜRKIYE'NIN ÖNDE GELEN SAĞLIK TESISLERINDE TEDAVI ALMA FIRSATI SUNAR. LIVIST SIGORTA'NIN YABANCI SAĞLIK SIGORTASI, YABANCI MISAFIRLERE GÜVENDE HISSETMELERI VE TÜRKIYE'DE SIKINTISIZ BIR YAŞAM SÜRDÜRMELERI IÇIN GEREKLI OLAN SAĞLIK GÜVENCESINI SUNAR. GENIŞ AĞIMIZ, UZMAN EKIBIMIZ VE 7/24 DESTEK HIZMETIMIZLE, YABANCI IKAMET SAHIPLERINE SAĞLIK SORUNLARIYLA BAŞA ÇIKMA KONUSUNDA TAM BIR GÜVEN SAĞLARIZ. TÜRKIYE'DE IKAMET EDEN YABANCI VATANDAŞLAR IÇIN GÜVENCE VE HUZUR ARIYORSANIZ, LIVIST YABANCI SAĞLIK SIGORTASI SIZIN IÇIN IDEAL SEÇENEKTIR."
        />
      </div>
    </div>
  );
};

YabanciSagilikInsurancePage.displayName = "YabanciSagilikInsurancePage";

export default YabanciSagilikInsurancePage;
