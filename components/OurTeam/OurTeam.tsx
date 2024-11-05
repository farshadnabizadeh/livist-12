import { UiImage } from '@/lib/index'
import useTrans from '@/utils/hooks/useTrans'
import React, { FC } from 'react'


const teamData = [
    {
        id: '0',
        name: 'MESUT ÖZTÜRK',
        image: 'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fmesut%20ozturk.png?alt=media&token=e4f057e4-64ca-4086-8a56-da4fd696250d'
    },
    {
        id: '1',
        name: 'MAJID AL HUSSEIN',
        image: 'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fmajid%20.png?alt=media&token=92c10beb-67d2-4688-bfcc-8a1f7d10bf12'
    },
    {
        id: '2',
        name: 'ELİF TANINMIŞ',
        image: 'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FElif.png?alt=media&token=2387c7a6-950a-4a14-a663-b49b2f976ec9'
    },
    {
        id: '3',
        name: 'MUHAMMET DEMİR',
        image: 'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FMuhammed%20demir.png?alt=media&token=fab772a1-83e2-4a0a-8a62-6ba40df5bee5'
    },
    {
        id: '3',
        name: 'SÜLEYMAN KAYGIN',
        image: 'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2FSuleyman%20kaygin.png?alt=media&token=49eee2ea-fcdf-4854-8cc8-e2dc118f5cc1'
    },
]


const OurTeam:FC = () => {
    const t = useTrans()
  return (
    <section>
        <div className='w-full h-[2px] dashed-border overflow-visible flex justify-center items-center mb-[30px] mt-[91px]'>
            <h1 className='text-center  bg-white inline-block border-x-8 border-white text-xl text-primary font-black'>{t("TAKIMIMIZ")}</h1>
        </div>
        <div className='w-full flex justify-between'>
            {
                teamData.map(member => {
                    const {id, image, name} = member;
                    return (
                        <div key={id} className='flex flex-col items-center font-black text-primary'>
                            <UiImage
                                src={image}
                                width={227}
                                height={277}
                                alt={name}
                                quality={100}
                                className=" border border-white inset-1"
                            />
                            <span className='inline-block mt-[30px]'>{name}</span>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

OurTeam.displayName = "OurTeam"

export default OurTeam