import { UiImage } from "@/lib";
import React, { FC } from "react";
import HumanAvatar from "@/assets/images/icons/human-avatar.svg";
import TwentyFourHour from "@/assets/images//icons/twenty-four-hour.svg";
import useTrans from "@/utils/hooks/useTrans";
import useIsMobile from "@/utils/hooks/useIsMobile";


interface InsurancePageProps {
    img: string;
    title: string;
    subtitle?: string;
    //   subtitle_two: string;
    //   CTAButtonText: string;
    //   textsContainerClassNames?: string
}

const CategoriesPageHero: FC<InsurancePageProps> = (props) => {
    const { img, title, subtitle } = props;
    const t = useTrans();
    const isMobile = useIsMobile()
    return (
        <section>
            <div className="container relative ">
                <div className="w-full h-full mt-[29px]">
                    <UiImage src={img} width={1446} height={602} alt="insurance banner" className="min-h-[276px]" />
                </div>
                <div className={`absolute top-0 left-0 w-full h-full pt-6 flex flex-col justify-center items-center px-5 lg:px-[83px] `}>
                    <h1 className="text-white font-black text-xl lg:text-2xl xl:text-[40px] leading-normal">
                        {t(title.toUpperCase())}
                    </h1>
                    {
                        subtitle && <h2 className="text-xl text-white mt-6">{subtitle}</h2>

                    }
                </div>
            </div>
        </section>
    );
};

CategoriesPageHero.displayName = "CategoriesPageHero";

export default CategoriesPageHero;
