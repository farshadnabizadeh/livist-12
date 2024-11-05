'use client'
import React, { FC } from "react";
import GetInTouchSection from "../GetInTouchSection/GetInTouchSection";
import Image from "next/image";
import LogoBlue from "@/assets/images/icons/logos/livist-logo-blue.svg";
import Link from "next/link";
import AlperMediaLogo from "@/assets/images/icons/logos/alper-media-logo.svg";
import { useIsDomLoaded, useIsMobile } from "@/utils/hooks";
import useIsTablet from "@/utils/hooks/useIsTablet";

const Footer: FC = () => {
  const isTablet = useIsTablet()
  const isDomLoaded = useIsDomLoaded()
  return (
    <section className="mt-[50px] mb-[35px]">
      <GetInTouchSection wrapperClassName="mb-[-65px]" />
      <div className="mx-auto w-full max-w-[1446px] h-[372px] bg-[#F0F0F0] rounded-[35px] pt-[119px] grid grid-cols-1 lg:grid-cols-6 px-4 lg:px-[86px]">
        <div className="flex flex-col items-center lg:items-start space-y-3">
          <LogoBlue />
          <p className="text-base font-medium text-subtitle text-center lg:text-start">
            Esentepe Mah. Kasap Sok. 20 <br className="hidden lg:block" />
            C Blok Eser İş Merkezi <br className="hidden lg:block" />
            K.8 D.61 - Şişli –İstanbul
          </p>
        </div>
        <div className="hidden lg:flex justify-center items-center -translate-y-4">
          {/* <Image
            src="https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FUnknown%201.png?alt=media&token=d37ef337-d4a1-4dce-b4e8-4fd4b7fde779"
            width={117}
            height={135}
            alt="barcode"
          /> */}
           <div id="ETBIS">
            <div id="3235773345036665">
              <a
                href="https://etbis.eticaret.gov.tr/sitedogrulama/3235773345036665"
                target="_blank"
              >
                <img
                  style={{width: '100px', height: '120px'}}
                  src="data:image/jpeg;base64, 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"
                />
              </a>
            </div>
          </div>
        </div>
        {!isTablet && isDomLoaded && FooterData.map((footerCol) => {
          const { title, subItems, id } = footerCol;
          return (
            <div key={id}>
              <h6 className="mb-3 text-lg font-semibold text-primary">{title}</h6>
              <ul className="text-black">
                {subItems.map((item: any) => {
                  const { href, id, label } = item;
                  return (
                    <li key={id}>
                      <Link href={href}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="container flex flex-col lg:flex-row spce-y-2 lg:space-y-0 justify-between items-center mt-9">
        <span></span>
        <p className="flex items-center text-subtitle text-base">
          <svg
            width="17"
            height="28"
            viewBox="0 0 17 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mr-2"
          >
            <circle cx="8.5" cy="15.5" r="8" stroke="#7C7C7C" />
            <path
              d="M8.855 19.15C8.065 19.15 7.445 19.02 6.995 18.76C6.545 18.49 6.225 18.06 6.035 17.47C5.855 16.88 5.765 16.1 5.765 15.13C5.765 14.22 5.865 13.49 6.065 12.94C6.275 12.38 6.61 11.975 7.07 11.725C7.53 11.475 8.13 11.35 8.87 11.35C9.04 11.35 9.245 11.365 9.485 11.395C9.735 11.415 9.99 11.445 10.25 11.485C10.51 11.515 10.735 11.545 10.925 11.575L10.88 12.535C10.71 12.515 10.515 12.495 10.295 12.475C10.075 12.455 9.86 12.44 9.65 12.43C9.44 12.41 9.265 12.4 9.125 12.4C8.555 12.4 8.11 12.49 7.79 12.67C7.48 12.85 7.26 13.14 7.13 13.54C7.01 13.93 6.95 14.46 6.95 15.13C6.95 15.86 7.005 16.445 7.115 16.885C7.225 17.315 7.435 17.625 7.745 17.815C8.055 18.005 8.515 18.1 9.125 18.1C9.265 18.1 9.44 18.095 9.65 18.085C9.87 18.065 10.09 18.045 10.31 18.025C10.54 18.005 10.74 17.99 10.91 17.98L10.94 18.94C10.74 18.97 10.51 19 10.25 19.03C9.99 19.06 9.735 19.085 9.485 19.105C9.235 19.135 9.025 19.15 8.855 19.15Z"
              fill="#7C7C7C"
            />
          </svg>
         <span>
           {new Date().getFullYear()} Livist sogorta Her Hakkı Saklıdır.
          </span>
        </p>
        <AlperMediaLogo />
      </div>
    </section>
  );
};

const FooterData = [
  {
    title: "Kurumsal",
    id: "0",
    subItems: [
      {
        label: "Yabancı Sağlık",
        href: "/#",
        id: "0",
      },
      {
        label: "Tamamlayici Sigortası",
        href: "/#",
        id: "1",
      },
      {
        label: "Seyahat Sağlık",
        href: "/#",
        id: "2",
      },
      {
        label: "İncoming Sigortası",
        href: "/#",
        id: "3",
      },
      {
        label: "IMM",
        href: "#",
        id: "4",
      },
      {
        label: "Kasko Sigortası",
        href: "/#",
        id: "5",
      },
    ],
  },
  {
    title: "Ürünlerimiz",
    id: "2",
    subItems: [
      {
        label: "Yabancı Sağlık",
        href: "/#",
        id: "0",
      },
      {
        label: "Tamamlayici Sigortası",
        href: "/#",
        id: "1",
      },
      {
        label: "Seyahat Sağlık",
        href: "/#",
        id: "2",
      },
      {
        label: "İncoming Sigortası",
        href: "/#",
        id: "3",
      },
      {
        label: "IMM",
        href: "/#",
        id: "4",
      },
      {
        label: "Kasko Sigortası",
        href: "/#",
        id: "5",
      },
    ],
  },
  {
    title: "",
    id: "3",
    subItems: [
      {
        label: "Trafik Sigortası",
        href: "/#",
        id: "0",
      },
      {
        label: "Doğum Sigortası",
        href: "/#",
        id: "1",
      },
      {
        label: "Dask",
        href: "/#",
        id: "2",
      },
      {
        label: "Evim Güvende",
        href: "/#",
        id: "3",
      },
    ],
  },

  {
    title: "Sözleşmeler",
    id: "4",
    subItems: [
      {
        label: "Ticari Elektronik İleti Metni",
        href: "/#",
        id: "0",
      },
      {
        label: "Kullancı Sözleşmesi",
        href: "/#",
        id: "1",
      },
      {
        label: "Acente Yetki Belgesi ",
        href: "/#",
        id: "2",
      },
      {
        label: "KVKK Politikası",
        href: "/#",
        id: "3",
      },
      {
        label: "Aydınlatma Metni",
        href: "/#",
        id: "4",
      },
      {
        label: "Çerez Politikası",
        href: "/#",
        id: "5",
      },
    ],
  },
];

Footer.displayName = "Footer";

export default Footer;
