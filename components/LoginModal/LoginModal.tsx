import { useAuth } from '@/contexts/NestAuthContext';
import { UiModal, UiUseDisclosure } from '@/lib/index'
import React, { FC } from 'react'
import LoginForm from '../LoginForm/LoginForm';



interface LoginModalType {
   opened: boolean,
   open: () => void,
   close: () => void,
   callback?: () => void;
}


const LoginModal: FC<LoginModalType> = (props) => {
    const {open, close, opened = false, callback} = props;
    
  return (
    <>
      <UiModal
        opened={opened}
        onClose={close}
        withinPortal
        radius={0}
        centered
        transitionProps={{ transition: 'fade', duration: 200 }}
        classNames={{
            overlay: '!z-[1000]',
            inner: '!z-[1001]',
            content: '!rounded-[25px] pb-6',
            title: 'text-center'
        }}
      >
        {/* Modal content */}
        <LoginForm callback={callback}/>
      </UiModal>

      {/* <Button onClick={open}>Open Modal</Button> */}
    </>
  )
}

export default LoginModal