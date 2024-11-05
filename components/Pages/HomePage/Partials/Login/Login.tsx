import React from 'react'
import Image from 'next/image';
import Pls from '@/assets/images/icons/Pls.svg';
import Pls2 from '@/assets/images/icons/Pls2.svg';
import Inputs from '@/components/Inputs/Inputs';
import SelectInputs from '@/components/SelectInputs/SelectInputs';
import Buttons from '@/components/Buttons/Buttons';
const Login = () => {
    return (
        <div className='w-full h-[340px] relative'>
            <div className='w-full h-full absolute top-0 left-0 z-0'>
                <div className='w-full h-full relative'>
                    <Pls2 className="absolute top-0 left-0" />
                    <Pls className="absolute bottom-0 left-[30px]" />
                </div>
            </div>
            <div className='w-full h-full absolute top-0 left-0 z-10 flex'>
                <div className='flex-1 h-full'>
                    <div className='text-[#E22D3A] text-[20px] font-medium mt-[70px] mx-[30px]'>Online Teklif Formu</div>
                    <div className='text-[#7C7C7C] text-[16px] font-light px-[30px] mt-4'>
                        Fiyat teklifi almak için formu doldurun, meslektaşlarımız bir saatten kısa sürede sizinle iletişime geçecektir.
                    </div>
                    <div className='text-[#1D2E66] text-[20px] font-medium mt-10 mx-[30px]'>
                        0212 213 8899
                    </div>
                </div>
                <div className='flex-1 h-full p-2'>
                    <div className='w-full h-full bg-[#6479BF] rounded-[35px]'>
                        <div className='w-full pt-[60px] pb-[10px] flex justify-center items-end text-white font-normal text-[18px]'>
                            Başvuru Formu doldurun!
                        </div>
                        <div className='w-full px-[60px]'>
                            <div className='w-full'>
                                <div className='w-full flex space-x-5'>
                                    <div className='flex-1'>
                                        <Inputs
                                            class1={`w-full h-[40px] bg-[#FFFFFF] rounded-[50px] flex`}
                                            placeholder={'Ad'}
                                        />
                                    </div>
                                    <div className='flex-1'>
                                        <Inputs
                                            class1={`w-full h-[40px] bg-[#FFFFFF] rounded-[50px] flex`}
                                            placeholder={'Soyad'}
                                        />
                                    </div>
                                </div>
                                <div className='w-full flex space-x-5 mt-[25px]'>
                                    <div className='flex-1'>
                                        <Inputs
                                            class1={`w-full h-[40px] bg-[#FFFFFF] rounded-[50px] flex`}
                                            placeholder={'T.C veya Pasaport Numarası'}
                                        />
                                    </div>
                                    <div className='flex-1'>
                                        <Inputs
                                            class1={`w-full h-[40px] bg-[#FFFFFF] rounded-[50px] flex`}
                                            placeholder={'Telefon Numarası'}
                                        />
                                    </div>
                                </div>
                                <div className='w-full flex space-x-5 mt-[25px]'>
                                    <div className='flex-1'>
                                        <SelectInputs
                                            class1={`w-full h-[40px] bg-[#FFFFFF] rounded-[50px] flex items-center`}
                                        />
                                    </div>
                                    <div className='flex-1'>
                                        <Buttons
                                            class1={`w-full h-full bg-[#E22D3A] rounded-[50px] text-white flex items-center justify-center`}
                                            title={`Kayıt`}
                                            spanclass={`translate-y-[5px]`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
