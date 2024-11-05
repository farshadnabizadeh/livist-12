import React, { FC } from "react";
import CheckMark from "@/assets/images/icons/check-mark-with-zig-zag-border.svg";
import useTrans from "@/utils/hooks/useTrans";
import LoveAtmosphere from "@/assets/images/icons/love-atmosphere.svg";
import BarMeter from "@/assets/images/icons/bar-meter.svg";
import Umbrella from "@/assets/images/icons/umbrella.svg";
import Money from "@/assets/images/icons/money-icon.svg";
import ResizeIcon from "@/assets/images/icons/resize-icon.svg";
import CommentsIcon from "@/assets/images/icons/comments-icon.svg";
import AidIcon from "@/assets/images/icons/aid-icon.svg";

const WhyLivistSection: FC = () => {
  const t = useTrans();
  return (
    <section className="w-full !mt-[81px]">
      <div className="container w-full bg-white py-12 lg:py-[66px] flex flex-col items-center justify-center space-y-[30px] rounded-[30px] px-3 lg:px-[132px] relative shadow-[0px_0px_40px_0px_rgba(0,_0,_0,_0.05)] ">
        <div className="absolute top-[-2px] lg:top-0 left-0 w-full h-[102%] lg:h-full bg-accent rounded-[30px] z-[-1] skew-y-[5deg] lg:skew-y-0 lg:rotate-[1.178deg] "></div>
        <div className="flex flex-col items-center justify-center space-y-4 !my-0">
          <CheckMark />
          <h2 className="text-primary font-semibold text-lg lg:text-xl">
            {t("NEDEN LIVIST SIGORTA?")}
          </h2>
        </div>
        <p className="text-subtitle text-base font-light !mt-9 lg:!mt-4">
          {t(
            "LIVIST SIGORTA'NIN ONLINE SATIŞ IMKANLARI HAKKINDA KONUŞABILIRIZ. HIZLI VE KOLAY BIR ŞEKILDE SIGORTA SATIN ALMAK GÜNÜMÜZDE OLDUKÇA ÖNEMLIDIR VE MÜŞTERILER IÇIN BÜYÜK BIR AVANTAJ SAĞLAR. İŞTE LIVIST SIGORTA'NIN HIZLI VE KOLAY SATIN ALMA DENEYIMI HAKKINDA BAZI NOKTALAR."
          )}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[50px] pl-[28px] lg:pl-0">
          {FeaturesItems.map((feature) => {
            const { Icon, id, label } = feature;
            return (
              <div
                className="flex items-center justify-center flex-col space-y-2 group cursor-default"
                key={id}
              >
                <Icon className="group-hover:rotate-[360deg] transition-all duration-500 text-accent" />
                <span className="text-center whitespace-nowrap text-accent text-base font-normal">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <AidIcon className="absolute right-[31px] lg:right-[51px] top-[37px] lg:top-[47px] w-[97px] !my-0" />
        <AidIcon className="absolute right-[288px] lg:right-[325px] top-[50px] w-[71px] !my-0 opacity-50" />
        <AidIcon className="absolute hidden lg:inline-block left-[466px] top-[95px] w-[71px] !my-0 opacity-40" />
        <AidIcon className="absolute right-[89px] bottom-[46px] w-[71px] !my-0 opacity-40" />
        <AidIcon className="absolute right-[471px] bottom-[78px] w-[71px] !my-0 opacity-40" />
      </div>
    </section>
  );
};

interface FeatrureType {
  id: string;
  label: string;
  Icon: any;
}

const FeaturesItems: FeatrureType[] = [
  {
    id: "0",
    label: "Kullanıcı Dostu Arayüz",
    Icon: LoveAtmosphere,
  },
  {
    id: "1",
    label: "Hızlı Teklif Alma",
    Icon: BarMeter,
  },
  {
    id: "2",
    label: "Özelleştirilmiş Seçenekler",
    Icon: Umbrella,
  },
  {
    id: "3",
    label: "Kolay Ödeme",
    Icon: Money,
  },
  {
    id: "4",
    label: "Anında Poliçe ",
    Icon: ResizeIcon,
  },
  {
    id: "5",
    label: "Müşteri Desteği",
    Icon: CommentsIcon,
  },
];

WhyLivistSection.displayName = "WhyLivistSection";

export default WhyLivistSection;
