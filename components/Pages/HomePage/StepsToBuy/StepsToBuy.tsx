import React, { FC } from "react";
import QuestionMark from "@/assets/images/icons/question-mark-inside-shield.svg";
import useTrans from "@/utils/hooks/useTrans";
import MouseClick from "@/assets/images/icons/mouse-click.svg";
import TextIcon from "@/assets/images/icons/text-icon.svg";
import ReflectionIcon from "@/assets/images/icons/reflection.svg";
import SubtitleIcon from "@/assets/images/icons/fr-subtitles-icon.svg";
import HandWithHeart from "@/assets/images/icons/hand-with-heart.svg";
import ThreeDLayerShadow from "@/assets/images/icons/three-d-layer-shadow.svg";
import ThreeDNumberOne from "@/assets/images/icons/three-d-number-01.svg";
import ThreeDNumberTwo from "@/assets/images/icons/three-d-numbers-02.svg";
import ThreeDNumberThree from "@/assets/images/icons/three-d-numbers-03.svg";
import ThreeDNumberFour from "@/assets/images/icons/three-d-numbers-04.svg";
import ThreeDNumberFive from "@/assets/images/icons/three-d-number-05.svg";
import AidIcon from "@/assets/images/icons/aid-icon.svg";

const StepsToBuy: FC = () => {
  const t = useTrans();
  return (
    <section className="my-[70px] relative">
      <div className="container w-full flex flex-col items-center">
        <QuestionMark />
        <h2 className="text-xl font-medium text-primary mt-5 mb-[30px]">
          {t("NASIL SATIN ALABILIRSINIZ?")}
        </h2>
        <div className="steps grid grid-cols-2 lg:grid-cols-5 lg:gap-[83px] px-4 lg:px-0 gap-y-[30px] lg:gap-y-0 overflow-visible">
          {stepsToBuyData.map((step) => {
            const { id, label, Icon, NumberIcon, description, color, firstLayerColor } = step;
            return (
              <div className="step_1 three-d-layers-parent" key={id}>
                <div className="relative h-[150px]">
                  <NumberIcon className="relative left-[30px]"/>
                  <div className={`absolute top-2 left-[25%] l w-[100px] h-[100px] flex items-center justify-center rounded-[15px] three-d-layer first-three-d-layer z-30 `} style={{backgroundColor : firstLayerColor}}>
                    <Icon className="reverse-the-3d-layer" />
                  </div>
                  <div className={`bg-${color} absolute top-3 left-[25%] w-[100px] h-[100px] flex items-center justify-center rounded-[15px] three-d-layer second-three-d-layer z-20`}></div>
                  <ThreeDLayerShadow className={`relative left-[2%] top-[-30px] layers-shadow`} style={{color: `var(--color-${color})` }}/>
                </div>
                <div className="text-center">
                  <span className={`text-lg font-medium border-b-2`} style={{color: `var(--color-${color})`, borderColor: `var(--color-${color})`}} >{label}</span>
                  <p className="max-w-[176px] mt-[14px] text-sm font-normal text-subtitle">{description}</p>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
          <AidIcon className="w-[389px] lg:w-[531px] absolute top-0 left-0 opacity-50 z-[-1] translate-x-[-41%] lg:translate-x-[-21%] translate-y-[-37%] lg:translate-y-[-61%]" />
          <AidIcon className="w-[98px] absolute bottom-0 left-[18.1%] opacity-50 z-[-1]" />
          <AidIcon className="w-[98px] absolute top-[75px] right-[35.6%] opacity-50 z-[-1]" />
          <AidIcon className="hidden lg:inline-block w-[296px] absolute bottom-0 right-6 opacity-50 z-[-1] translate-y-[38%]" />
    </section>
  );
};

const stepsToBuyData = [
  {
    id: "1",
    Icon: MouseClick,
    label: "Ürünü Seçin",
    description: "Sunduğumuz sigortalardan birini veya birkaçını seçin.",
    NumberIcon: ThreeDNumberOne,
    color: "light-blue",
    firstLayerColor: '#E6E9FE'
  },
  {
    id: "2",
    Icon: TextIcon,
    label: "Bilgilerinizi Girin",
    description:
      "Sigorta ihtiyacınıza uygun bilgileri girerek hızlı teklifleri alın.",
    NumberIcon: ThreeDNumberTwo,
    color: "accent",
    firstLayerColor: '#FCD7DA'
  },
  {
    id: "3",
    Icon: ReflectionIcon,
    label: "Poliçenizi Özelleştirin",
    description:
      "İhtiyaçlarınıza uygun kapsam seviyelerini ve teminatları seçerek poliçenizi özelleştirin.",
    NumberIcon: ThreeDNumberThree,
    color: "light-blue",
    firstLayerColor: '#E6E9FE'
  },
  {
    id: "4",
    Icon: SubtitleIcon,
    label: "Ödeme Yapın",
    description:
      "Güvenli ödeme yöntemlerinden birini seçerek ödemenizi tamamlayın.",
    NumberIcon: ThreeDNumberFour,
    color: "accent",
    firstLayerColor: '#FCD7DA'
  },
  {
    id: "5",
    Icon: HandWithHeart,
    label: "Poliçenizi Alın",
    description:
      "Ödemenizi tamamladıktan sonra anında poliçenizi alın ve güvence altına alın.",
    NumberIcon: ThreeDNumberFive,
    color: "light-blue",
    firstLayerColor: '#E6E9FE'
  },
];

StepsToBuy.displayName = "StepsToBuy";

export default StepsToBuy;
// rotateX(44.343deg) rotateY(0deg) rotateZ(45deg) translateZ(7px)
