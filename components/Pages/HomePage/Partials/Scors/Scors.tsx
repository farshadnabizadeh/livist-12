import React from 'react';
import Image from 'next/image';
import Section from '@/assets/images/icons/Section.png';
const Scors = () => {
    const Items = [
        {
            quantity: 1000,
            title: 'İş Ortağı',
            status: false,
        },
        {
            quantity: 20,
            title: 'Sigorta Şirketi',
            status: false,
        },
        {
            quantity: 500,
            title: 'Müşterilerimiz',
            status: true,
        },
        {
            quantity: 600,
            title: 'Poliçeler',
            status: false,
        },
        {
            quantity: 8,
            title: 'Yıl Hizmetindeyiz',
            status: false,
        },
    ]
    return (
        <div className='w-full h-[174px] relative'>
            <div className='w-full h-full absolute top-0 z-10'>
                <Image src={Section} alt='Section' className='absolute object-cover w-full h-full' />
            </div>
            <div className='w-full h-full absolute z-10 px-[40px]'>
                <div className='w-full h-full flex justify-between'>
                    {
                        Items.map((item, index) => (
                            <div key={index} className='flex-1 h-full flex justify-center items-center'>
                                <div className={`w-[140px] h-[140px] rounded-full flex justify-center items-center ${item.status ? 'bg-[#B81C27]' : ''}`}>
                                    <div className='w-full cursor-pointer'>
                                        <div className='text-white text-[32px] text-center font-semibold'>+{item.quantity}{index == 2 || index == 3 ? 'B' : ''}</div>
                                        <div className='text-white text-[16px] text-center'>{item.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Scors
