import useTrans from "@/utils/hooks/useTrans";
import React, { FC } from "react";
import GamepadIcon from "@/assets/images/icons/gamepad.svg";
import ClockIcon from "@/assets/images/icons/clock.svg";
import Vector from '@/assets/images/icons/Vector.svg';
import UserSalary from '@/assets/images/icons/user-salary.svg';
import Support24 from '@/assets/images/icons/Support24.svg';
const Motto: FC = () => {
  const t = useTrans();
  return (
    <section>
      <div className="container bg-light-blue text-white px-[21px] lg:px-[67px] py-[34px] lg:py-[27px] rounded-[25px] lg:rounded-[105px] relative">
        <p className="font-base font-light relative z-10">
          {t("GÜNÜMÜZÜN HIZLI TEMPOLU DÜNYASINDA, SIGORTA IHTIYAÇLARINIZI KARŞILAMAK IÇIN ÇÖZÜMLER ARARKEN ZAMANINIZIN SINIRLI OLDUĞUNU BILIYORUZ. LIVIST SIGORTA OLARAK, MÜŞTERILERIMIZE EN IYI ONLINE SIGORTA DENEYIMINI SUNMAYI HEDEFLIYORUZ. HIZLI VE KOLAY BIR ŞEKILDE SIGORTA POLIÇESI SATIN ALMANIZI SAĞLAYARAK HAYATINIZI DAHA DA BASIT VE GÜVENLI HALE GETIRIYORUZ.")}
        </p>
        <div className="relative w-min lg:w-auto lg:absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white py-[10px] px-[18px] lg:px-5 rounded-[42px] flex  space-x-[5px] z-20 mb-[21px] lg:mb-0">
          <button className="flex items-center border-2 border-primary rounded-[42px] group relative overflow-hidden">
            <div className="w-0 h-full group-hover:w-full absolute top-0 left-0 bg-primary transition-[width] duration-500 z-10 rounded-[40px]"></div>

            <div className="bg-primary w-[40px] h-[40px] rounded-full flex justify-center items-center relative z-20">
              <Vector />
            </div>
            <span className="text-primary translate-y-[1px] ml-2 mr-3 group-hover:text-white transition-all duration-500 relative z-20">{t("Doğru Ürün")}</span>
          </button>
          <button className="flex items-center border-2 border-primary rounded-[42px] group relative overflow-hidden">
            <div className="w-0 h-full group-hover:w-full absolute top-0 left-0 bg-primary transition-[width] duration-500 z-10 rounded-[40px]"></div>

            <div className="bg-primary w-[40px] h-[40px] rounded-full flex justify-center items-center relative z-20">
              <UserSalary />
            </div>
            <span className="text-primary translate-y-[1px] ml-2 mr-3 group-hover:text-white transition-all duration-500 relative z-20">{t("İyi Fiyat")}</span>
          </button>
          <button className="flex items-center border-2 border-primary rounded-[42px] group relative overflow-hidden">
            <div className="w-0 h-full group-hover:w-full absolute top-0 left-0 bg-primary transition-[width] duration-500 z-10 rounded-[40px]"></div>

            <div className="bg-primary w-[40px] h-[40px] rounded-full flex justify-center items-center relative z-20">
              <GamepadIcon />
            </div>
            <span className="text-primary translate-y-[1px] ml-2 mr-3 group-hover:text-white transition-all duration-500 relative z-20">{t("KOLAYCA")}</span>
          </button>
          <button className="flex items-center border-2 border-primary rounded-[42px] relative overflow-hidden group">
            <div className="w-0 h-full group-hover:w-full absolute top-0 left-0 bg-primary transition-[width] duration-500 z-10 rounded-[40px]"></div>
            <div className="bg-primary w-[40px] h-[40px] rounded-full flex justify-center items-center relative z-20">
              <ClockIcon />
            </div>
            <span className="text-primary translate-y-[1px] ml-2 mr-3 relative z-20 group-hover:text-white transition-all duration-500">
              {t("HIZLI")}
            </span>
          </button>
          <button className="flex items-center border-2 border-primary rounded-[42px] relative overflow-hidden group">
            <div className="w-0 h-full group-hover:w-full absolute top-0 left-0 bg-primary transition-[width] duration-500 z-10 rounded-[40px]"></div>
            <div className="bg-primary w-[40px] h-[40px] rounded-full flex justify-center items-center relative z-20">
              <Support24 />
            </div>
            <span className="text-primary translate-y-[1px] ml-2 mr-3 relative z-20 group-hover:text-white transition-all duration-500">
              {t("24/7 Support")}
            </span>
          </button>
        </div>
        <div className="ghost_background absolute bottom-[-14px] left-0 w-full h-full bg-[rgba(100,_121,_191,_0.15)] rounded-[25px] lg:rounded-[105px]"></div>
      </div>
    </section>
  );
};

export default Motto;
