import { UiImage } from "@/lib";
import React, { FC } from "react";
import HumanAvatar from "@/assets/images/icons/human-avatar.svg";
import TwentyFourHour from "@/assets/images//icons/twenty-four-hour.svg";
import useTrans from "@/utils/hooks/useTrans";
import useIsMobile from "@/utils/hooks/useIsMobile";

interface InsurancePageProps {
  img: string;
  title: string;
  subtitle_one: string;
  subtitle_two: string;
  CTAButtonText: string;
  textsContainerClassNames?: string
}

const InsurancePageHero: FC<InsurancePageProps> = (props) => {
  const { img, title, subtitle_one, subtitle_two, CTAButtonText, textsContainerClassNames } = props;
  const t = useTrans();
  const isMobile = useIsMobile()
  return (
    <section>
      <div className="container relative ">
        <div className="w-full h-full mt-[29px]">
          <UiImage src={img} width={1446} height={602} alt="insurance banner"  className="min-h-[276px]"/>
        </div>
        <div className={`absolute top-0 left-0 w-full h-full pt-6 lg:pt-[62px] 2xl:pt-[124px] px-5 lg:px-[83px] ${textsContainerClassNames}`}>
          <h1 className="text-white font-black text-xl lg:text-2xl xl:text-[40px] leading-normal">
            {t(title.toUpperCase())}
          </h1>
          <h2 className="tex-base lg:text-xl text-accent lg:mb-[10px] ">{t(subtitle_one.toUpperCase())}</h2>
          <h2 className="text-xs lg:text-base text-white mb-[38px] ">{t(subtitle_two.toUpperCase())}</h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row">

            <button className="w-auto px-2 xl:w-[155px] flex justify-center items-center bg-accent py-[11px] rounded-[120px] space-x-[6px] mr-2 hover:bg-transparent border border-accent transition-all">
              <HumanAvatar className="text-white w-[22px] h-[22px]" />
              <span className="text-white text-xs lg:text-base font-medium">{t("HESABIM")}</span>
            </button>
            <button
              type="button"
              className="w-auto lg:w-[186px] text-xs lg:text-base whitespace-nowrap bg-transparent flex items-center px-2  justify-center  text-white space-x-2 border-2 border-white rounded-[120px]  hover:text-white transition-all py-[11px] mr-5"
            >
              <TwentyFourHour />
              <span>{t("CANLI DESTEK")}</span>
            </button>
            </div>
            <a href="#insurace-explanation">
                <span className="text-white font-medium text-sm lg:text-base underline underline-offset-[15px] mt-4 lg:mt-0 inline-block">
                    {t(CTAButtonText.toUpperCase())}
                </span>

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

InsurancePageHero.displayName = "InsurancePageHero";

export default InsurancePageHero;
