import useTrans from "@/utils/hooks/useTrans";
import React, { FC } from "react";
import ShieldIcon from "@/assets/images/icons/shield.svg";
import ShoppoingBag from "@/assets/images//icons/shopping-bag.svg";
import TwentyFourHour from "@/assets/images//icons/twenty-four-hour.svg";
import { UiImage, UiLink } from "@/lib";
import FirstAidKit from '@/assets/images/icons/first-aid-kit.svg'
import VioletHalo from '@/assets/images/icons/violet-halo.svg'
import BlueHalo from '@/assets/images/icons/BlueHalo.svg'
import Redhalo from '@/assets/images/icons/red-halo.svg'
import HouseClipArt from '@/assets/images/icons/house-clipart.svg'
import SeyahatSigortasi from '@/assets/images/icons/seyahat-sigortasi.svg'
import AracSigortasi from '@/assets/images/icons/arac-sigortasi.svg'
import UmbrellaIcon from '@/assets/images/icons/umbrella.svg'



const uiInsuranceCategories = [
  {
    id: '0',
    label: 'Sağlık Sigortası',
    value: '/categories/sagilik-sigorta-urunleri',
    Icon: FirstAidKit,
    classNames: 'lg:-translate-x-[70%]'
  },
  {
    id: '1',
    label: 'Konut Sigortası',
    value: '/categories/konut-sigortasi',
    Icon: HouseClipArt,
    classNames: 'lg:-translate-x-1/2'
  },
  {
    id: '2',
    label: 'Seyahat Sigortası',
    value: '/categories/seyahat-urunleri',
    Icon: SeyahatSigortasi,
    classNames: 'lg:-translate-x-0'
  },
  {
    id: '4',
    label: 'Araç Sigortası',
    value: '/categories/arac-sigortasi',
    Icon: AracSigortasi,
    classNames: 'lg:-translate-x-1/2'
  },
  {
    id: '5',
    label: 'Diğer Sigortalar',
    value: '/categories/diger-sigortalar',
    Icon: UmbrellaIcon,
    classNames: 'lg:-translate-x-[70%]'
  },
]



const HeroSection: FC = () => {
  const t = useTrans();
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 pt-[61px] px-4 lg:px-0">
        <div className="flex flex-col justify-center">
          <h1 className="text-primary font-black text-[34px] lg:text-[57px] leading-normal ">
            {t("BİZİMLE SİGORTALI OLUN")}
          </h1>
          <div className="flex space-x-[6px] lg:space-x-[10px] items-center">
            <ShieldIcon className="-translate-y-[11px] w-[14px] lg:w-[24px] h-[14px] lg:h-[24px]" />
            <h2 className="font-semibold text-lg lg:text-[30px] text-accent leading-normal mb-[14px]">{t("3D GÜVENLI ÖDEME, ANINDA POLIÇE")}</h2>
          </div>
          <h2 className="mb-8 lg:mb-4 text-sm lg:text-base font-light lg:font-normal text-subtitle ">{t("SIGORTANIZDAN SADECE BIR ADIM UZAKTASINIZ...")}</h2>
          <div className="flex space-x-2">
            <UiLink
              target="_blank"
              href={'https://api.whatsapp.com/send/?phone=+905538009999&text=Merhabalar%20ben%20sigorta%20hakk%C4%B1nda%20dan%C4%B1%C5%9Fmanl%C4%B1k%20istiyorum'}
              type="button"
              className="bg-accent flex items-center justify-center px-2 lg:px-9 py-3 w-full lg:w-auto rounded-[120px] text-white space-x-2"
            >
              <ShoppoingBag />
              <span className="font-medium ">{t("TEKLİF AL")}</span>
            </UiLink>
            <UiLink
              href={'https://api.whatsapp.com/send/?phone=+905538009999&text=Merhabalar%20ben%20sigorta%20hakk%C4%B1nda%20dan%C4%B1%C5%9Fmanl%C4%B1k%20istiyorum'}
              target="_blank"
              type="button"
              className="bg-transparent flex items-center justify-center px-2 lg:px-9 py-3 w-full lg:w-auto text-primary space-x-2 border-2 border-primary rounded-[120px]"

            >
              <TwentyFourHour />
              <span>{t("CANLI DESTEK")}</span>
            </UiLink>
          </div>
        </div>
        <div className="flex justify-center items-center lg:justify-center lg:pr-[83px] mt-[52px] lg:mt-0">

          <button className="hidden lg:inline-block relative h-min bg-accent text-white px-6 py-[22px] rounded-[15px]  transition-all mr-[149px] cursor-default" >
            <span>
              Tüm Ürünlerimiz
            </span>
            <VioletHalo className="absolute -right-10 top-0 -translate-y-1/3 " />
            <BlueHalo className="absolute -right-[49px] top-0 -translate-y-[38%] rotate-[-36deg] " />
            <Redhalo className="absolute -right-[60px] top-0 -translate-y-[37%]" />
          </button>

          <div className="w-full lg:w-auto flex flex-col space-y-6">
            {uiInsuranceCategories.map(sigortaCategory => {
              const { label, value, id, Icon, classNames } = sigortaCategory;
              return (
                <UiLink href={value} className={` flex justify-center items-center bg-primary text-white hover:bg-accent transition-all px-3 py-[22px] rounded-2xl translate-0 cursor-pointer ${classNames}`} key={id}>
                  <Icon />
                  <span className="ml-2">
                    {label}
                  </span>
                </UiLink>
              )
            })}
          </div>

          {/* <div className="w-[342px] h-[338px] lg:w-[439px] lg:h-[434px] relative">
            <UiImage
              src={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fhero-section-image.png?alt=media&token=b5205ed3-7bdd-4693-a8a1-7742a14cdce4'}
              fill
              alt="insurance image"
              unoptimized
            />

          </div> */}
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
