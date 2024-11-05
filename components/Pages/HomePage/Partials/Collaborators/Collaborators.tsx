import React, { FC } from "react";
import CommentCheckIcon from "@/assets/images/icons/comment-check.svg";
import useTrans from "@/utils/hooks/useTrans";
import { UiSwiperSlide, UiSwiper, UiSwiperPagination, Autoplay } from "@/lib/Swiper";
import AnadoluSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/anadolu-sigorta-box.png'
import AnkaraSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/ankara-sigorta-box.png'
import DemirSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/demir-sigorta-box.png'
import DogaSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/doga-sigorta-box.png'
import AllianzSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/allianz-sigorta-box.png'
import AtlasSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/atlas-mutuel-sigorta-box.png'
import CorpusSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/corpus-sigorta-box.png'
import BereketSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/bereket-sigorta-box.png'
import DubaiSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/dubai-sigorta-box.png'
import RaySigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/ray-sigorta-box.png'
import TurkNipponLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/turk-nippon-sigorta-box.png'
import AkSigorta from '@/assets/images/icons/logos/other-agencies-logos/png-files/ak-sigorta-box.png'
import UnicoSigorta from '@/assets/images/icons/logos/other-agencies-logos/png-files/uni-co-sigorta-box.png'
import AegonSigortaLogo from '@/assets/images/icons/logos/other-agencies-logos/png-files/aegon-sigorta-box.png'
import EurokaBox from '@/assets/images/icons/logos/other-agencies-logos/png-files/eureko-sigorta-box.png'
import GroupamaBox from '@/assets/images/icons/logos/other-agencies-logos/png-files/groupama-sigorta-box.png'
import HDIBox from '@/assets/images/icons/logos/other-agencies-logos/png-files/hdi-sigorta-box.png'
import KuruSigortaBox from '@/assets/images/icons/logos/other-agencies-logos/png-files/koru-sigorta-box.png'
import GulfSigortabox from '@/assets/images/icons/logos/other-agencies-logos/png-files/gulf-gig-sigorta-box.png'
import SompoBox from '@/assets/images/icons/logos/other-agencies-logos/png-files/sompo-sigorta-box.png'
import TMTBox from '@/assets/images/icons/logos/other-agencies-logos/png-files/tmt-sigorta-box.png'
import TurkiyeSigortaBox from '@/assets/images/icons/logos/other-agencies-logos/png-files/turkiye-sigorta-box.png'
import { UiImage } from "@/lib";



const Collaborators: FC = () => {
  const t = useTrans();
  const pagination = {
    el: '.my-custom-pagination-div',
    clickable: true,
    renderBullet: function (index: number, className:string) {
      return '<span class="' + className + '">' + '</span>';
    },
  };
  return (
    <section>
      <div className="flex flex-col justify-center items-center px-4 lg:px-0" id={'collaborators'}>
        <CommentCheckIcon />
        <h2 className="text-xl font-medium text-primary mt-5">{t("YETKILI ACENTELIKLERIMIZ")}</h2>
        <p className="mt-7 lg:mt-5 font-light text-subtitle text-base">{t("SUNDUĞUMUZ ÜRÜNLERIN, HIZMETLERIN VE FIYATLARIN EN IYISINI SUNABILMEK ADINA RESMI ACENTESI OLDUĞUMUZ ŞIRKETLERIMIZ ILE IŞ BIRLIĞI YAPIYORUZ.")}</p>
        <div className="w-full relative pb-5">

            <UiSwiper
                slidesPerView={3}
                modules={[UiSwiperPagination, Autoplay]}
                autoplay
                pagination={pagination}
                className="py-10"
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }}
            >
            {

                CollabolatorsData.map(item => {
                    const {Icon, id} = item;
                    return (
                        <UiSwiperSlide key={id} >
                            <UiImage src={Icon} alt="id" height={120} width={230} quality={100} />
                        </UiSwiperSlide>
                    )
                })
            }

            </UiSwiper>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#D9D9D9] rounded-xl">
                <div className="my-custom-pagination-div px-1 py-0 translate-y-[-87%] h-[10px]" />

            </div>
        </div>
      </div>
    </section>
  );
};


interface CollaboratorsItemType {
    id: string,
    Icon: any,

}

const CollabolatorsData: CollaboratorsItemType[] = [
    {
        id: 'anadolu-sigorta',
        Icon: AnadoluSigortaLogo
    },
    {
        id: 'ankara-sigorta',
        Icon: AnkaraSigortaLogo
    },
    {
        id: 'demir-sigorta',
        Icon: DemirSigortaLogo
    },
    {
        id: 'doga-sigorta',
        Icon: DogaSigortaLogo
    },
    {
        id: 'allianz-sigorta',
        Icon: AllianzSigortaLogo
    },
    {
        id: 'atlas-sigorta',
        Icon: AtlasSigortaLogo
    },
    {
        id: 'corpus-sigorta',
        Icon: CorpusSigortaLogo
    },
    {
        id: 'bereket-sigorta',
        Icon: BereketSigortaLogo
    },
    {
        id: 'dubai-sigorta',
        Icon: DubaiSigortaLogo
    },
    {
        id: 'ray-sigorta',
        Icon: RaySigortaLogo
    },
    {
        id: 'turk-nippon-sigorta',
        Icon: TurkNipponLogo
    },
    {
        id: 'unico',
        Icon: UnicoSigorta
    },
    {
        id: 'ak',
        Icon: AkSigorta
    },
    {
        id: 'aegon',
        Icon: AegonSigortaLogo
    },
    {
        id: 'euroka',
        Icon: EurokaBox
    },
    {
        id: 'groupama',
        Icon: GroupamaBox
    },
    {
        id: 'hdi',
        Icon: HDIBox
    },
    {
        id: 'kuru',
        Icon: KuruSigortaBox
    },
    {
        id: 'gulf',
        Icon: GulfSigortabox
    },
    {
        id: 'sompo',
        Icon: SompoBox
    },
    {
        id: 'tmt',
        Icon: TMTBox
    },
    {
        id: 'turkiye',
        Icon: TurkiyeSigortaBox
    },
]



Collaborators.displayName = "Collaborators";

export default Collaborators;
