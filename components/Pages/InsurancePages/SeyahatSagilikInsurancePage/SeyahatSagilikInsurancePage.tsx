import InsuranceExplanationAccordion from "@/components/InsuranceExplanationAccodion/InsuranceExplanationAccodion";
import InsurancePageHero from "@/components/InsurancePageHero/InsurancePageHero";
import React from "react";
import SeyahatSagilikInsuranceBuySteps from "./Partials/SeyahatSagilikInsuranceBuySteps/SeyahatSagilikInsuranceBuySteps";


const SeyahatSagilikInsurancePage = (props: any) => {
  const productsList = props?.productsList
  // console.log('here are the values : ', values)
  return (
    <div>
      <InsurancePageHero
        img="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fseyahat-sagilik-banner.png?alt=media&token=0491cc65-1b2f-4e6d-8d8b-247fdba6a1fd"
        title="Yurtdışı Seyahat Sağlık Sigortası"
        subtitle_one="Tamamen çevrimiçi ve anında!"
        subtitle_two="Herkes için seyahat sagilik sigortası"
        CTAButtonText="Seyahat Sağilik Sigortası Nedir?"
      />
      <SeyahatSagilikInsuranceBuySteps />
      <div id="insurace-explanation">
        <InsuranceExplanationAccordion
          label="Seyahat Sağlık Sigortası Nedir?"
          description="LIVIST SIGORTA'NIN YABANCI SAĞLIK SIGORTASI, TÜRKIYE'DE IKAMET IZNI SAHIBI OLAN YABANCI VATANDAŞLAR IÇIN ÖZEL OLARAK TASARLANMIŞ BIR GÜVENCE SAĞLAMA POLIÇESIDIR. YABANCI MISAFIRLERIN SAĞLIK IHTIYAÇLARINI KARŞILAMAK VE ONLARI BEKLENMEDIK SAĞLIK SORUNLARINA KARŞI KORUMAK AMACIYLA GELIŞTIRILMIŞTIR. BU ÖZEL SIGORTA POLIÇESI, YABANCI IKAMET SAHIPLERINE TÜRKIYE'DE SAĞLIK HIZMETLERINE SORUNSUZ VE HIZLI BIR ERIŞIM SUNAR. ACIL TIBBI MÜDAHALELERDEN, HASTALIKLARA VE KAZA SONUCU YARALANMALARA KADAR BIR DIZI SAĞLIK OLAYINA KARŞI KORUMA SAĞLAR. BUNA EK OLARAK, POLIÇE SAHIPLERINE TÜRKIYE'NIN ÖNDE GELEN SAĞLIK TESISLERINDE TEDAVI ALMA FIRSATI SUNAR. LIVIST SIGORTA'NIN YABANCI SAĞLIK SIGORTASI, YABANCI MISAFIRLERE GÜVENDE HISSETMELERI VE TÜRKIYE'DE SIKINTISIZ BIR YAŞAM SÜRDÜRMELERI IÇIN GEREKLI OLAN SAĞLIK GÜVENCESINI SUNAR. GENIŞ AĞIMIZ, UZMAN EKIBIMIZ VE 7/24 DESTEK HIZMETIMIZLE, YABANCI IKAMET SAHIPLERINE SAĞLIK SORUNLARIYLA BAŞA ÇIKMA KONUSUNDA TAM BIR GÜVEN SAĞLARIZ. TÜRKIYE'DE IKAMET EDEN YABANCI VATANDAŞLAR IÇIN GÜVENCE VE HUZUR ARIYORSANIZ, LIVIST YABANCI SAĞLIK SIGORTASI SIZIN IÇIN IDEAL SEÇENEKTIR."
        />
      </div>
    </div>
  );
};

SeyahatSagilikInsurancePage.displayName = "SeyahatSagilikInsurancePage";

export default SeyahatSagilikInsurancePage;
