'use client'
import { InsurranceItems } from "@/utils/data";
import useTrans from "@/utils/hooks/useTrans";
import React, { FC } from "react";
// const Fade = require("react-reveal/Fade");
import FingerPointingDown from '@/assets/images/icons/point-down.svg'
import Link from "next/link";


const InsurranceTypes: FC =  () => {
  const t = useTrans()
  return (
    <section className="lg:!mt-[-150px]" id="insurrance-types">
      <div className="flex justify-center mx-auto space-x-2">
      <h2 className="text-accent text-xl font-medium text-center mb-8">{t('ALMAK İSTEDIĞINIZ SIGORTAYI SEÇIN')} </h2>
      <FingerPointingDown /> 
      </div>
      {/* <Fade cascade bottom> */}
        <ul className="container grid grid-cols-2 lg:grid-cols-5 gap-[18px] lg:gap-[30px] ">
          {InsurranceItems.map((insurranceItem) => {
            const { value, label, id, Icon, isActive, isAutomated, visibleOnHomepage } = insurranceItem;
            if(!visibleOnHomepage) return;
            return (
              <li
                key={id}
                className="h-[158px] lg:h-[196px] flex flex-col bg-light-blue lg:bg-white items-center justify-center rounded-3xl lg:rounded-[30px] space-y-3 text-center px-1 relative"
              >
                <Link href={isAutomated ? value : `urunler/${value}`} className="flex justify-center items-center flex-col space-y-3">
                  <Icon className="text-white lg:text-light-blue"/>
                  {/* @ts-ignore */}
                  <span className="text-white lg:text-primary text-xs lg:text-lg font-normal lg:font-medium">{t(label.toUpperCase())}</span>
                  {!isActive && <span className="absolute left-1/2 top-0 -translate-x-1/2 lg:translate-x-0 lg:top-2 lg:left-3 text-sm lg:text-base text-white lg:text-light-blue">{t("YAKINDA")}!</span>}
                </Link>
              </li>
            );
          })}
        </ul>

      {/* </Fade> */}
    </section>
  );
};

InsurranceTypes.displayName = "InsurranceTypes";

export default InsurranceTypes;
