import { useAuth } from '@/contexts/NestAuthContext';
import { UiModal } from '@/lib/index';
import { useDisclosure } from '@mantine/hooks';
import React, { FC } from 'react'


interface LogoutmodalType {
  opened?: boolean,
  open?: () => void,
  close?: () => void,
}

const Logoutmodal: FC<LogoutmodalType> = (props) => {
  const { openLogoutModal, closeLogoutModal, isLogoutModalOpen, logout } = useAuth()



  return (

    <UiModal opened={isLogoutModalOpen} onClose={closeLogoutModal} title="Çıkış" centered>
      {/* Modal content */}
      <p>Çıkış yapmak istadiğinizden emin misiniz ?</p>
      <div className='w-full flex justify-between mt-7'>
        <button onClick={closeLogoutModal} className="w-[160px] h-10 rounded-[8px] px-4 flex items-center justify-center border border-grass-green cursor-pointer text-white bg-grass-green hover:bg-white hover:text-grass-green ">
        <span className='translate-y-[2px]'>
          Hayır
        </span>
        </button>
        <button onClick={logout} className="w-[160px] h-10 rounded-[8px] px-4 flex items-center justify-center border border-grass-green cursor-pointer text-grass-green bg-white hover:text-white hover:bg-grass-green">
         
         <span className='translate-y-[2px]'>
           Evet
          </span>

        </button>
      </div>
    </UiModal>


  );
}

export default Logoutmodal