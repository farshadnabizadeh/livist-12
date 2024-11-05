import type { ReactElement } from 'react'
import ClientLayout from '../../Layouts/ClientLayout'
import { NextPageWithLayout } from '@/pages/_app'
import useTrans from '@/utils/hooks/useTrans'
import HeroSection from './Partials/HeroSection/HeroSection'
import HeroShadowBg from '@/assets/images/icons/hero-shadow-bg.svg'
import InsurranceTypes from './Partials/InsurranceTypes/InsurranceTypes'
import Motto from './Partials/Motto/Motto'
import BlueWaveBG from '@/assets/images/icons/blue-wave-bg.svg'
import WhyLivistSection from './Partials/WhyLivistSection/WhyLivistSection'
import { UiImage } from '@/lib'
import OurTechnologies from './Partials/OurTechnologies/OurTechnologies'
import Collaborators from './Partials/Collaborators/Collaborators'
import HelpDeskSection from './Partials/HelpDeskSection/HelpDeskSection'
import StepsToBuy from './StepsToBuy/StepsToBuy'
import Scors from './Partials/Scors/Scors'
import Login from './Partials/Login/Login'
const HomePage: NextPageWithLayout = () => {
  const t = useTrans()
  return (
    <>
      <HeroShadowBg className="absolute top-0 left-0 w-full z-[-1]" />
      <HeroSection />
      <div className=' space-y-[18px] lg:space-y-[50px] py-5 relative mt-6 lg:mt-[150px] px-4 lg:px-0' >
        {/* <BlueWaveBG className="absolute top-0  w-full h-full z-[-1]" /> */}
        <UiImage
          src={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fblue-wave-bg.png?alt=media&token=1d4716d7-a2b7-411b-9228-ab1d82a41bb9'}
          layout='fill'
          alt='blue-wave-bg'
          className="absolute w-full left-0 !top-[8%] lg:!top-0 !h-[45%] lg:!h-[81%] z-[-1] object-cover object-top "
          quality={100}
          unoptimized
        />
        <InsurranceTypes />
        <Motto />
        <WhyLivistSection />

      </div>
      <OurTechnologies />
      <div className='w-full'>
        <div className='container mb-6'>
          <Scors />
        </div>
      </div>
      <div className='w-full'>
        <div className='container'>
          <Login />
        </div>
      </div>
      <Collaborators />
      <HelpDeskSection />
      <StepsToBuy />
    </>

  )
}


export default HomePage