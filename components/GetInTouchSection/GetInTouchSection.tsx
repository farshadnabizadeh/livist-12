import { UiImage } from "@/lib";
import React, { FC } from "react";
import Image from "next/image";
import PhoneCallIcon from "@/assets/images/icons/phone-call-icon.svg";
import WhatsAppIcon from "@/assets/images/icons/whatsapp-logo.svg";
import MailIcon from "@/assets/images/icons/mail-icon.svg";
import Link from "next/link";
import useTrans from "@/utils/hooks/useTrans";
import BgPattern from "@/assets/images/icons/bgpattern.svg"
interface GetInTouchSectionType {
  wrapperClassName?: string
}


const GetInTouchSection: FC<GetInTouchSectionType> = ({ wrapperClassName }) => {
  const t = useTrans()
  return (
    <section className={`${wrapperClassName} relative h-[131px] container mb-[0px] translate-y-[50px] max-w-[1280px] px-4 lg:px-0`}>
      <div className="w-full absolute top-0 left-0 z-10">
        <div className="relative w-full py-[30px] rounded-[35px] lg:rounded-[55px] overflow-hidden">
          {/* <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FRectangle%2024.png?alt=media&token=405d3898-658a-4206-a177-60022d039a6a"
            }
            alt={"get in touch section background"}
            fill
            unoptimized
            className="z-10 hidden lg:inline-block"
          /> */}
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fget-in-touch-bg-mobile.png?alt=media&token=b23f09b7-372f-4202-8359-d0d80b8b2092"
            }
            alt={"get in touch section background"}
            fill
            unoptimized
            className="z-10 inline-block lg:hidden"
          />
          <div className="relative z-20 top-0 left-0 w-full h-full flex justify-between items-center flex-col xl:flex-row lg:px-[40px] px-[25px] ">
            <div className="flex flex-col lg:flex-row items-center  mb-2 min-[1535px]:mb-0">
              <PhoneCallIcon className="w-9 h-9 lg:w-[50px] lg:h-[50px] mr-[40px] mb-4 lg:mb-0" />
              <div className="text-white">
                <h3 className="text-lg lg:text-[22px] leading-normal font-semibold whitespace-nowrap ">
                  {t("CANLI DESTEK VE WHATSAPP’LA BIZE ULAŞIBILIRSINIZ")}
                </h3>
                <p className="text-base lg:tracking-normal text-center lg:text-left font-normal">{t("DANIŞMANLIK VEYA SIGORTA SATIN ALMAK IÇIN BIZE ULAŞIN.")}</p>
              </div>
            </div>
            <div className="w-full lg:w-auto h-min py-3 lg:px-[22px] text-white flex lg:hidden flex-col items-center justify-center space-y-2">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=+905538009999&text=Merhabalar ben sigorta hakkında danışmanlık istiyorum"
                }
                className="w-full flex justify-center items-center bg-black bg-opacity-[0.22] py-3 rounded-[55px] "
                target="_blank"
              >
                <WhatsAppIcon className="mr-2" />
                <span className="whitespace-nowrap">+90 (553) 800 99 99</span>
              </Link>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=+902122138899&text=Merhabalar ben sigorta hakkında danışmanlık istiyorum"
                }
                className="w-full flex justify-center items-center bg-black bg-opacity-[0.22] py-3 rounded-[55px] "
                target="_blank"
              >
                <WhatsAppIcon className="mr-2" />
                <span className="whitespace-nowrap">+90 (212) 213 88 99</span>
              </Link>
              <Link
                href={"mailto:info@livist-sigorta.com"}
                className="w-full flex justify-center items-center bg-black bg-opacity-[0.22] py-3 rounded-[55px] "
                target="_blank"
              >
                <MailIcon className="mr-2" />
                <span className="whitespace-nowrap">info@livist-sigorta.com</span>
              </Link>
            </div>
            <div className=" h-min bg-black bg-opacity-[0.22] py-3 px-[22px] text-white hidden lg:flex items-center space-x-5 rounded-[55px]">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=+905538009999&text=Merhabalar ben sigorta hakkında danışmanlık istiyorum"
                }
                className="flex items-center"
                target="_blank"
              >
                <WhatsAppIcon className="mr-2" />
                <span className="whitespace-nowrap">+90 (553) 800 99 99</span>
              </Link>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=+902122138899&text=Merhabalar ben sigorta hakkında danışmanlık istiyorum"
                }
                className="flex items-center"
                target="_blank"
              >
                <WhatsAppIcon className="mr-2" />
                <span className="whitespace-nowrap">+90 (212) 213 88 99</span>
              </Link>
              <Link
                href={"mailto:info@livist-sigorta.com"}
                className="flex items-center"
                target="_blank"
              >
                <MailIcon className="mr-2" />
                <span className="whitespace-nowrap">info@livist-sigorta.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-0">
          <BgPattern className="w-full h-full"/>
      </div>
    </section>
  );
};

GetInTouchSection.displayName = "GetInTouchSection";

export default GetInTouchSection;
