import { UiImage } from '@/lib/index'
import useTrans from '@/utils/hooks/useTrans'
import React, { FC } from 'react'

const AboutPageHero: FC = () => {
  const t = useTrans()
  return (
    <div className='container relative mt-[30px]'>
        <UiImage 
            src={"https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FRectangle%20103.png?alt=media&token=360b0d2b-f109-4d19-a106-0e0e019a6ec6"}
            width={1446}
            height={280}
            alt="About Lisivst Sigorta hero banner"
        />
        <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center'>
          <h1 className='text-white text-[40px] font-black'>{t("HAKKIMIZDA")}</h1>
        </div>
    </div>
  )
}




export default AboutPageHero