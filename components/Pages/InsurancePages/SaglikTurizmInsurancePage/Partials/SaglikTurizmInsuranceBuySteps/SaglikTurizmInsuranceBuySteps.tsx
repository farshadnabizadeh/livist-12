import { UiSwiper, UiSwiperSlide } from "@/lib";
import React, { FC, useCallback, useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";
import ArrowRight from '@/assets/images/icons/arrow-right.svg'
import { useAuth } from "@/contexts/NestAuthContext";
import { useSaglikTurizmStepsContext } from "@/contexts/InsuranceStepsContexts/SaglikTurizmInsuranceContext";
import SaglikTurizmInfoFormFirstStep from "../SaglikTurizmInfoForm/SaglikTurizmInfoFormFirstStep";
import SaglikTurizmInfoFormSecondStep from "../SaglikTurizmInfoForm/SaglikTurizmInfoFormSecondStep";
import SaglikTurizmInfoFormThirdStep from "../SaglikTurizmInfoForm/SaglikTurizmFormThirdStep";
import dynamic from 'next/dynamic';
import sagilikTurizmiPlans from "@/utils/data/saglik-turizmi-plan-ids";
import ProductPlansType from "@/utils/types/productPlansType";
import { BiArrowFromBottom, BiArrowToTop, BiChevronUp, BiSolidChevronUp } from "react-icons/bi";
// const SwiperClass = dynamic(() => import('swiper/react'), { ssr: false });
import RightArrow from '@/assets/images/icons/right-arrow-with-circle.svg'





const SaglikTurizmInsuranceBuySteps: FC = () => {

    const [swiperRef, setSwiperRef] = useState<SwiperClass>();
    const { values, setValues, activeStep, setActiveStep, canGoToTheNextStep, createProposals, stepsSubmitButtons } = useSaglikTurizmStepsContext()
    const { user } = useAuth()
    console.log('[SaglikTurizmInsuranceBuySteps] this is the user', user)
    const handlePrevStep = useCallback(() => {
        console.log('the handlePrevStep called CurrentStep:  ', activeStep)
        if (!swiperRef) return;
        if (activeStep <= 0) return
        // console.log('activeStep is zero returning...')
        setActiveStep((prevState: any) => prevState - 1)
        swiperRef.slidePrev();

    }, [swiperRef, activeStep, setActiveStep]);

    const goToTheNextStep = () => {
        if (!swiperRef) return;
        if (!user) {
            console.log('no user returning ...')
            return
        };
        if (activeStep >= 1) {
            console.log('this is the last step')
            createProposals()
            return
        }
        setActiveStep(prevState => prevState + 1)
        swiperRef.slideNext();
    }

    const handleNextStep = useCallback(async () => {
        console.log('the handleNextStep called Current Step :', activeStep)
        console.log('canGoToTheNextStep', canGoToTheNextStep)
        console.log('this is the stepsSubmitButton', stepsSubmitButtons)
        // if the current active form returs true then we can go to the next step
        const currentStepSubmitButton = await stepsSubmitButtons.find(buttonRef => buttonRef.id == activeStep)?.submitButtonRef.current?.click()
        // if (!canGoToTheNextStep) return
        // if (!swiperRef) return;
        // if(!user) {
        //     console.log('no user returning ...')
        //     return
        // };
        // if (activeStep >= 2) {
        //     console.log('this is the last step')
        //     createProposals()
        //     return
        // }
        // setActiveStep(prevState => prevState + 1)
        // swiperRef.slideNext();


    }, [swiperRef, activeStep, setActiveStep, canGoToTheNextStep]);

    useEffect(() => {
        console.log('activeStep: ', activeStep)
    },
        [activeStep])


    const handlePlanClick = (plansInfo: ProductPlansType[], planCategory: string) => {
        console.log('this is the plansInfo', plansInfo)
        setValues(({ ...values, selectedPlans: plansInfo, selectedPlanCategory: planCategory }))
    }

    return (
        <section className="container w-full">
            <div className="relative grid grid-cols-2 lg:grid-cols-5 px-5 lg:px-[83px] gap-[34px] mt-10 lg:mt-[-38px] z-10">
                {sagilikTurizmiPlans.map(plans => {
                    const { Icon, key, label, plansInfo, id } = plans;
                    const isActive = key == values.selectedPlanCategory
                    return (
                        <div className={`max-w-[229px] flex flex-col justify-center items-center bg-[#EAEAEA] pt-[48px] pb-[24px] px-4 rounded-[30px] hover:scale-105 transition-all cursor-pointer ${isActive ? 'bg-primary text-white scale-105' : ''}`} onClick={() => { handlePlanClick(plansInfo, key) }} key={id}>
                            <Icon />
                            <h3 className="text-center mt-4 whitespace-normal">{label}</h3>
                        </div>
                    )

                }
                )}

            </div>
            {
                !values.selectedPlanCategory && <div className="text-red-500 mt-4 ml-5 flex items-center space-x-3">
                    <span className="inline-block">
                        Lütfen Sigorta Planını Seçin
                    </span>
                    <ArrowRight className="w-[34px] -rotate-90" /></div>
            }
            <div className="flex justify-center w-full">
                <div className="w-full lg:w-[796px] px-4 lg:px-0 ">
                    <UiSwiper
                        className="w-full mt-10  bg-primary rounded-[30px] relative z-10"
                        spaceBetween={12}
                        slidesPerView={1}
                        // onSwiper={swiper => {
                        //     swiperRef.current = swiper;
                        // }}
                        onSwiper={setSwiperRef}
                        draggable={false}
                        allowTouchMove={false}
                    >
                        <UiSwiperSlide className="flex flex-col items-center w-full">
                            <div className="h-[500px] w-full">
                                <SaglikTurizmInfoFormFirstStep handleNextStep={handleNextStep} goToTheNextStep={goToTheNextStep} />
                            </div>
                        </UiSwiperSlide>
                        {/* { !user && 
                            <UiSwiperSlide className="flex flex-col items-center w-full">
                                <div className="h-[400px] w-full">
                                    <YabanciSagilikLoginStep handleNextStep={handleNextStep} />

                                </div>
                            </UiSwiperSlide>
                        } */}
                        <UiSwiperSlide className="flex flex-col items-center w-full">
                            <div className="pb-8 md:pb-0 sm:h-[400px] w-full">
                                <SaglikTurizmInfoFormSecondStep handleNextStep={handleNextStep} goToNextStep={goToTheNextStep} />
                            </div>
                        </UiSwiperSlide>
                        {/* <UiSwiperSlide className="flex flex-col items-center w-full border-2 border-pink-400">
                            <div className="h-[550px] w-full">
                                <SaglikTurizmInfoFormThirdStep handleNextStep={handleNextStep} goToTheNextStep={goToTheNextStep}/>
                            </div>
                        </UiSwiperSlide> */}
                    </UiSwiper>
                    <div className={`flex px-[51px] -translate-y-1/2 relative z-20 ${activeStep <= 0 ? 'justify-center' : 'justify-between'}`}>
                        <button onClick={handlePrevStep} className={`w-[127px] lg:w-[339px] lg:pl-[18px] flex justify-center lg:justify-start items-center py-[21px] bg-grass-green rounded-[64px] text-white ${activeStep <= 0 ? 'hidden' : 'flex'}`}>
                            <div className="w-1/2 h-full flex justify-between ">
                                <ArrowRight className="w-[24px] h-[24px] rotate-180" />
                                <span className="justify-self-center">Geri</span>

                            </div>
                        </button>
                        <button onClick={handleNextStep} className="w-[127px] lg:w-[339px] pr-4 flex justify-center lg:justify-end items-center py-[21px] bg-light-blue rounded-[64px] text-white">
                            <div className="w-1/2 h-full flex justify-between">
                                <span className="justify-self-center">Onay</span>
                                <ArrowRight className="w-[24px] h-[24px] " />

                            </div>
                        </button>

                    </div>


                </div>

            </div>
        </section>
    );
};

SaglikTurizmInsuranceBuySteps.displayName = "SaglikTurizmInsuranceBuySteps";

export default SaglikTurizmInsuranceBuySteps;
