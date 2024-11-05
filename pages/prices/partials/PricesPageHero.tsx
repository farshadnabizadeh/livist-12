import { UiImage } from "@/lib";
import React, { FC } from "react";
import HumanAvatar from "@/assets/images/icons/human-avatar.svg";
import TwentyFourHour from "@/assets/images//icons/twenty-four-hour.svg";
import useTrans from "@/utils/hooks/useTrans";
import CheckMark from '@/assets/images/icons/checkmark-insinde-shield.svg'
import formatDate from "@/utils/helpers/formatDate";


interface InsurancePageProps {
  img: string;
  title: string;
  userName?: string;
  nameSurname?: string;
  passOrIdNo?: string;
  birthDate?: Date;
  startDate?: Date;
}

const PricesPageHero: FC<InsurancePageProps> = (props) => {
  const { img, title, birthDate, passOrIdNo, startDate, userName, nameSurname } = props;
  const t = useTrans();
  return (
    <section>
      <div className="container relative px-5 lg:px-0">
        <div className="w-full h-full mt-[29px]">
          <UiImage src={img} width={1446} height={602} alt="insurance banner" />
        </div>
        <div className="lg:absolute top-0 left-0 w-full h-full lg:pt-[124px] lg:px-[83px] mt-14 lg:mt-0">
          <h1 className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 lg:relative text-white font-black text-lg lg:text-[40px] leading-normal text-center lg:text-left mt-5 lg:mt-0 z-30">
            {t(title?.toUpperCase())}
          </h1>
          <div className="w-full py-12 lg:py-[34px] bg-light-blue rounded-[15px] lg:mt-[125px] px-5 lg:px-[47px] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center space-x-2 bg-accent text-white font-semibold rounded-[120px] px-4 py-[10px]">
                <CheckMark className="-translate-y-[2px] flex-shrink-0" />
              <span>Hesabınız oluşturuldu</span>
            </div>
            <p className="text-base text-white">
              <span className="text-base font-semibold">
                {t("KULLANICI ADI")}
              </span>
              <span>:</span>
              <span className="ml-1">{nameSurname}</span>
            </p>
            <p className="text-base text-white">
              <span className="text-base font-semibold">
                {t("Pasaport / T.C.K.N.")}
              </span>
              <span>:</span>
              <span className="ml-1">{passOrIdNo}</span>
            </p>
            <p className="text-base text-white">
              <span className="text-base font-semibold">{t("Ad Soyad")}</span>
              <span>:</span>
              <span className="ml-1">{nameSurname}</span>
            </p>
            <p className="text-base text-white">
              <span className="text-base font-semibold">{t("Doğum Tarihi")}</span>
              <span>:</span>
              <span className="ml-1">{formatDate(birthDate as unknown as string)}</span>
            </p>
            <p className="text-base text-white">
              <span className="text-base font-semibold">
                {t("poliçe Başlangıç tarihi")}
              </span>
              <span>:</span>
              <span className="ml-1">{formatDate(startDate as unknown as string)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

PricesPageHero.displayName = "PricesPageHero";

export default PricesPageHero;
