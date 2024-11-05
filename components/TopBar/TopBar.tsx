
import React, { FC } from "react";
import Logo from "../Logo/Logo";
import LangSelect from "../LangPicker/LangPicker";
import appConfig, { supportLine } from '@/app.config'
import PhoneIcon from '@/assets/images/icons/phone-icon.svg'


const TopBar: FC = () => {
  return (
    <section id="top-bar" className="px-[36px] mx-auto hidden lg:block">
      <div className="w-full h-full flex justify-between items-center">
        {/* <Logo /> */}
        <a href={`tel:${supportLine}`} className="flex items-center py-4 text-primary">
          <PhoneIcon className="mr-2 w-[15px] h-[15px]"/>
          {appConfig.supportLine}
        </a>
        <LangSelect />

      </div>
    </section>
  );
}; 

TopBar.displayName = "TopBar";

export default TopBar;
