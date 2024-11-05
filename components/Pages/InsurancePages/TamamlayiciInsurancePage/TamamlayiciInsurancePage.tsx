import InsuranceExplanationAccordion from "@/components/InsuranceExplanationAccodion/InsuranceExplanationAccodion";
import InsurancePageHero from "@/components/InsurancePageHero/InsurancePageHero";
import { useYabanciSagilicStepsContext } from "@/contexts/InsuranceStepsContexts/YabanciSagilikInsuranceContext";
import React from "react";
import TamamlayiciInsuranceBuySteps from "./Partials/TamamlayiciInsuranceBuySteps/TamamlayiciInsuranceBuySteps";


const TamamlayiciInsurancePage = (props: any) => {
  const {values} = useYabanciSagilicStepsContext()
  const productsList = props?.productsList
  // console.log('here are the values : ', values)
  return (
    <div>
      <InsurancePageHero
        img="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FTamamlayici%20Insurance%20Banner.jpg?alt=media&token=513c5d19-311c-4b67-82cb-9a43abeed963&_gl=1*py37tn*_ga*NjM0OTExMDUzLjE2Nzc0MDgxNDM.*_ga_CW55HF8NVT*MTY5NzI4NTgwMy4xMzguMS4xNjk3Mjg1ODIzLjQwLjAuMA.."
        title="Tamamlayıcı Sigortası"
        subtitle_one="Tamamen çevrimiçi ve anında!"
        subtitle_two="Sağlığınıza Ek Güvence: Tamamlayıcı Sağlık Sigortası"
        CTAButtonText="Tamamlayici Sigortası Nedir?"
      />
      <TamamlayiciInsuranceBuySteps />
      <div id="insurace-explanation">
        <InsuranceExplanationAccordion
          label="Tamamlayıcı Sigortası Nedir?"
          description="Tamamlayıcı Sağlık Sigortası, temel sağlık sigortanızın kapsamını genişleten ve beklenmedik sağlık harcamalarına karşı ek koruma sağlayan bir tür sigortadır. Temel sağlık sigortası genellikle belirli bir sınıra kadar ödemeler yaparken, tamamlayıcı sağlık sigortası bu sınırları aşan sağlık giderlerini karşılamak için devreye girer. Bu sigorta türü, hastane yatışları, ameliyatlar, özel doktor ziyaretleri ve ilaç masrafları gibi yüksek maliyetli sağlık hizmetlerine ek bir güvence sunar. Tamamlayıcı sağlık sigortası, kişilerin sağlık harcamalarının beklenmedik bir şekilde artabileceği durumlarda mali açıdan daha güvende hissetmelerine yardımcı olur."
        />
      </div>
    </div>
  );
};

TamamlayiciInsurancePage.displayName = "TamamlayiciInsurancePage";

export default TamamlayiciInsurancePage;
