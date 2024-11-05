import React from 'react'
import LivistLogoWhite from '@/assets/images/icons/logos/livist-logo-white.svg'



const UserProfileFooter = () => {
  return (
    <section className='w-full px-9 py-6 bg-primary flex justify-between items-center'>
        <p className='text-white font-light text-base'>Bu sistemin herhangi bir şekilde kötüye kullanılması veya tasarımının ve içeriğinin kopyalanması hakkında dava açılacaktır.</p>
        <LivistLogoWhite />
    </section>
  )
}



export default UserProfileFooter