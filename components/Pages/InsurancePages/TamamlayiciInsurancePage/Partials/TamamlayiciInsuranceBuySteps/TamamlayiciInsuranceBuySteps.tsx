import { UiSwiper, UiSwiperSlide } from "@/lib";
import React, { FC, useCallback, useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";
import ArrowRight from '@/assets/images/icons/arrow-right.svg'
import { useTamamlayiciStepsContext } from "@/contexts/InsuranceStepsContexts/TamamlayiciInsuranceContext";
import TamamlayiciInfoFormFirstStep from "../TamamlayiciInfoForm/TamamlayiciInfoFormFirstStep";
import TamamlayiciInfoFormSecondStep from "../TamamlayiciInfoForm/TamamlayiciInfoFormSecondStep";
import TamamlayiciInfoFormThirdStep from "../TamamlayiciInfoForm/TamamlayiciFormThirdStep";
import { useAuth } from "@/contexts/NestAuthContext";


const TamamlayiciInsuranceBuySteps: FC = () => {

    const [swiperRef, setSwiperRef] = useState<SwiperClass>();
    const { values, activeStep, setActiveStep, canGoToTheNextStep, createProposals, stepsSubmitButtons } = useTamamlayiciStepsContext()
    const { user } = useAuth()

    const handlePrevStep = useCallback(() => {
        console.log('the handlePrevStep called CurrentStep:  ', activeStep)
        if (!swiperRef) return;
        if (activeStep <= 0) return
        // console.log('activeStep is zero returning...')
        setActiveStep(prevState => prevState - 1)
        swiperRef.slidePrev();

    }, [swiperRef, activeStep, setActiveStep]);

    const goToTheNextStep = () => {
        if (!swiperRef) return;
        if (!user) {
            console.log('no user returning ...')
            return
        };
        if (activeStep >= 2) {
            console.log('this is the last step')
            createProposals()
            return
        }
        setActiveStep(prevState => prevState + 1)
        swiperRef.slideNext();
    }


    // const handleNextStep = useCallback(() => {
    //     console.log('the handleNextStep called Current Step :', activeStep)
    //     console.log('canGoToTheNextStep', canGoToTheNextStep)
    //     if (!canGoToTheNextStep) return
    //     if (!swiperRef) return;
    //     if (activeStep >= 2) {
    //         console.log('this is the last step')
    //         createProposals()
    //         return
    //     }
    //     setActiveStep(prevState => prevState + 1)
    //     swiperRef.slideNext();


    // }, [swiperRef, activeStep, setActiveStep, canGoToTheNextStep]);

    const handleNextStep = useCallback(async () => {
        console.log('the handleNextStep called Current Step :', activeStep)
        console.log('canGoToTheNextStep', canGoToTheNextStep)
        console.log('this is the stepsSubmitButton', stepsSubmitButtons)
        // if the current active form returs true then we can go to the next step
        const currentStepSubmitButton = await stepsSubmitButtons.find(buttonRef => buttonRef.id == activeStep)?.submitButtonRef.current?.click()



    }, [swiperRef, activeStep, setActiveStep, canGoToTheNextStep]);


    useEffect(() => {
        console.log('activeStep: ', activeStep)
    },
        [activeStep])

    return (
        <section className="w-full">
            <div className="flex justify-center w-full">
                <div className="w-[796px] ">
                    <UiSwiper
                        className="w-full mt-[-187px] bg-primary rounded-[30px] relative z-10"
                        spaceBetween={12}
                        slidesPerView={1}
                        // onSwiper={swiper => {
                        //     swiperRef.current = swiper;
                        // }}
                        onSwiper={setSwiperRef}
                        draggable={false}
                    // allowTouchMove={false}
                    >
                        <UiSwiperSlide className="flex flex-col items-center w-full">
                            <div className="h-[400px] w-full">
                                <TamamlayiciInfoFormFirstStep handleNextStep={handleNextStep} goToTheNextStep={goToTheNextStep} />
                            </div>
                        </UiSwiperSlide>
                        <UiSwiperSlide className="flex flex-col items-center w-full ">
                            <div className="h-[550px] w-full">
                                <TamamlayiciInfoFormSecondStep handleNextStep={handleNextStep} goToNextStep={goToTheNextStep}/>
                            </div>
                        </UiSwiperSlide>
                        <UiSwiperSlide className="flex flex-col items-center w-full">
                            <div className="h-[550px] w-full">
                                <TamamlayiciInfoFormThirdStep handleNextStep={handleNextStep} goToNextStep={goToTheNextStep}/>
                            </div>
                        </UiSwiperSlide>
                    </UiSwiper>
                    <div className={`flex px-[51px] -translate-y-1/2 relative z-20 ${activeStep <= 0 ? 'justify-center' : 'justify-between'}`}>
                        <button onClick={handlePrevStep} className={`w-auto lg:w-[339px] pl-[18px] flex justify-start items-center py-[21px] bg-grass-green rounded-[64px] text-white ${activeStep <= 0 ? 'hidden' : 'flex'}`}>
                            <div className="w-1/2 h-full flex justify-between ">
                                <ArrowRight className="w-[24px] h-[24px] rotate-180" />
                                <span className="justify-self-center">Geri</span>

                            </div>
                        </button>
                        <button onClick={handleNextStep} className="w-auto lg:w-[339px] pr-[18px] flex justify-end items-center py-[21px] bg-light-blue rounded-[64px] text-white">
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

TamamlayiciInsuranceBuySteps.displayName = "TamamlayiciInsuranceBuySteps";

export default TamamlayiciInsuranceBuySteps;
