import LoginForm from '@/components/LoginForm/LoginForm'
import { UiImage } from '@/lib/index'
import React from 'react'
import LivistLogoWhite from '@/assets/images/icons/logos/livist-logo.svg'
import Logo from '@/components/Logo/Logo'

const LoginPage = () => {
  return (
    <div className='w-full min-h-[95vh] flex items-center'>
      <div className='h-[1024px] w-full grid grid-cols-2 itemc-center '>
        <div className='flex items-center justify-center h-full '>
          <LoginForm />

        </div>
        <div className='relative w-full h-full'>
          <div className='relative z-10 w-full h-full flex items-center justify-center'>
            <div className='w-[307px] h-[159px]'>
              <Logo />

            </div>

          </div>

          <UiImage
            src={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o/app-content%2Fside-view-young-student-doing-homework-design-class%201.png?alt=media&token=f21609dc-78dc-4e36-ad0e-52df0dbed7f2'}
            layout="fill"
            alt='man-working-with-pc'
          />

        </div>
      </div>

    </div>
  )
}

export default LoginPage