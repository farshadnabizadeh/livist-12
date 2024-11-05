import React, { FC } from "react";
import ClassorWithShield from "@/assets/images/icons/classor-with-shield.svg";
import useTrans from "@/utils/hooks/useTrans";
import AidIcon from "@/assets/images/icons/aid-icon.svg";
import BackgroundLayout from "@/assets/images/icons/backgroundLayout.svg";
import BackgroundLayoutImage from "@/assets/images/icons/BackgroundLayoutImage.svg";
import MobileImages from "@/assets/images/icons/mobileImages.svg";
import MobileImages1 from "@/assets/images/icons/mobile1.svg";
import MobileLivistLayout from "@/assets/images/icons/MobileLivistLayout.svg";
import Demir from "@/assets/images/icons/Demir.svg";
import LogoMobile from "@/assets/images/icons/logoMobile.svg";
const OurTechnologies: FC = () => {
  const t = useTrans();
  return (
    <section className="pt-[93px] pb-[250px] px-5 lg:px-0">
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:items-start relative">
        <div className="w-[70%] mt-[57px] h-full">
          <h2 className="text-accent font-medium text-xl">
            {t("TEKNOLOJİMİZ")}
          </h2>
          <p className="w-full max-w-[818px] text-base font-light text-subtitle mt-2 leading-8 lg:leading-[24px]">
            {t(
              "LIVIST SIGORTA OLARAK, MÜŞTERILERIMIZE EN IYI HIZMETI SUNMAK IÇIN TEKNOLOJIYI KULLANIYOR VE ONLINE SATIN ALMA DENEYIMINI MÜMKÜN OLDUĞUNCA HIZLI VE KOLAY HALE GETIRIYORUZ. SIZ DE SIGORTA IHTIYAÇLARINIZI KARŞILAMAK IÇIN LIVIST SIGORTA'NIN ONLINE PLATFORMUNU KULLANARAK KOLAYLIKLA SIGORTA POLIÇESI SATIN ALABILIRSINIZ."
            )}
          </p>
        </div>
        <div className="relative w-[30%] flex justify-center items-center ">
          <div className="w-full absolute top-0 left-0 z-0">
            <BackgroundLayout />
          </div>
          <div className="w-full flex justify-center items-center absolute top-[60px] -left-[20px] z-[30]">
            <BackgroundLayoutImage className="w-full px-[50px]" />
          </div>
          <div className="w-full h-full absolute z-[50] top-0">
            <div className="w-full h-full relative">
              <div className="w-full absolute top-0 z-0">
                <MobileImages className="w-full" />
              </div>
              <div className="w-full h-[390px] flex justify-center absolute top-0  z-10">
                <div className="w-[50%]">
                  <div className="w-full relative translate-x-[15px] translate-y-[93px]">
                    <div className="w-full h-full absolute top-0">
                      <MobileLivistLayout className="" />
                    </div>
                    <div className="w-full h-full absolute flex justify-center">
                      <LogoMobile className="w-auto -translate-x-[50px] translate-y-[2px]" />
                    </div>
                  </div>
                  <div className="w-full translate-y-[100px] -translate-x-[40px]">
                    <MobileImages1 className="w-full" />
                  </div>
                  <div className="w-full translate-y-[50px] -translate-x-[40px]">
                    <Demir className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ClassorWithShield className="w-[216px] h-[277px] -translate-x-[72%] lg:-translate-x-full !overflow-visible" /> */}
        </div>
        <AidIcon className="absolute top-0 lg:top-3 left-0 lg:-left-8 w-[86px] hidden lg:inline-block " />
        <AidIcon className="absolute bottom-0 lg:bottom-auto top-auto lg:top-[124px] left-[7%] lg:-left-0 w-[195px] opacity-50 lg:opacity-100" />
        <AidIcon className="absolute top-0 lg:top-[73px] left-0 lg:left-[34.7%] w-[45px] " />
        <AidIcon className="absolute top-[75px] lg:top-0 right-[9%] lg:right-[37%] w-[86px] " />
        <AidIcon className="absolute bottom-0 right-0 w-[86px] -translate-x-[10%] translate-y-[90%]" />
      </div>
    </section>
  );
};

OurTechnologies.displayName = "OurTechnologies";

export default OurTechnologies;
