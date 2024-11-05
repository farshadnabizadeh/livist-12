import { UiSwiper, UiSwiperSlide } from "@/lib";
import React, { FC, useCallback, useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";
import ArrowRight from '@/assets/images/icons/arrow-right.svg'
import { useYabanciSagilicStepsContext } from "@/contexts/InsuranceStepsContexts/YabanciSagilikInsuranceContext";
import YabanciSagilikInfoFormFirstStep from "../YabanciSagilikInfoForm/YabanciSagilikInfoFormFirstStep";
import YabanciSagilikInfoFormSecondStep from "../YabanciSagilikInfoForm/YabanciSagilikInfoFormSecondStep";
import YabanciSagilikInfoFormThirdStep from "../YabanciSagilikInfoForm/YabanciSagilikFormThirdStep";
import { useAuth } from "@/contexts/NestAuthContext";
import YabanciSagilikLoginStep from "../YabanciSagilikInfoForm/YabanciSagilikLoginStep";
import { ImSpinner10 } from "react-icons/im";

const YabanciSagilikInsuranceBuySteps: FC = () => {

    const [swiperRef, setSwiperRef] = useState<SwiperClass>();
    const { values, activeStep, setActiveStep, canGoToTheNextStep, createProposals, stepsSubmitButtons, isLoading } = useYabanciSagilicStepsContext()
    const { user } = useAuth()
    console.log('[YabanciSagilikInsuranceBuySteps] this is the user', user)
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
        if(!user) {
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

    const handleNextStep = useCallback( async () => {
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

    return (
        <section className="container w-full">
            <div className="flex justify-center w-full">
                <div className="w-full lg:w-[796px] px-4 lg:px-0">
                    <UiSwiper
                        className="w-full mt-10 lg:mt-[-140px] xl:mt-[-187px] bg-primary rounded-[30px] relative z-10"
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
                            <div className="h-[400px] w-full">
                                <YabanciSagilikInfoFormFirstStep handleNextStep={handleNextStep} goToTheNextStep={goToTheNextStep} />
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
                            <div className="h-[650px] sm:h-[550px] w-full">
                                <YabanciSagilikInfoFormSecondStep handleNextStep={handleNextStep} goToNextStep={goToTheNextStep} />
                            </div>
                        </UiSwiperSlide>
                        <UiSwiperSlide className="flex flex-col items-center w-full">
                            <div className="h-[550px] w-full">
                                <YabanciSagilikInfoFormThirdStep handleNextStep={handleNextStep} goToTheNextStep={goToTheNextStep}/>
                            </div>
                        </UiSwiperSlide>
                    </UiSwiper>
                    <div className={`flex px-4 lg:px-[51px] -translate-y-1/2 relative z-20 ${activeStep <= 0 ? 'justify-center' : 'justify-between'}`}>
                        <button onClick={handlePrevStep} className={`w-[127px] lg:w-[339px] lg:pl-[18px] flex justify-center lg:justify-start items-center py-[21px] bg-grass-green rounded-[64px] text-white ${activeStep <= 0 ? 'hidden' : 'flex'}`}>
                            <div className="w-1/2 h-full flex justify-between ">
                                <ArrowRight className="w-[24px] h-[24px] rotate-180" />
                                <span className="justify-self-center">Geri</span>

                            </div>
                        </button>
                        <button onClick={handleNextStep} disabled={isLoading} className="w-[127px] lg:w-[339px] lg:pr-[18px] flex justify-center lg:justify-end items-center py-[21px] bg-light-blue rounded-[64px] text-white space-x-5">
                       {isLoading && <ImSpinner10 className="animate-spin" />}
                            <div className="w-1/2 h-full flex justify-between">
                                <span className="lg:justify-self-center">Onay</span>
                                <ArrowRight className="w-[24px] h-[24px] " />

                            </div>
                        </button>

                    </div>


                </div>

            </div>
        </section>
    );
};

YabanciSagilikInsuranceBuySteps.displayName = "YabanciSagilikInsuranceBuySteps";

export default YabanciSagilikInsuranceBuySteps;
