import UserProfileLayout from '@/components/Layouts/UserProfileLayout/UserProfileLayout'
import ProfilePage from '@/components/Pages/Profile/ProfilePage/ProfilePage'
import { useAuth } from '@/contexts/NestAuthContext';
import { useProfileContext } from '@/contexts/UserProfileContext';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react'

export const getStaticProps: GetStaticProps = async (context) => {

  const { locale } = context
  return {
    props: { ...(await serverSideTranslations(locale as string, ['common'])), },
  };
};





const Profile = () => {
  const { userInfo } = useProfileContext()
  const { user, loading } = useAuth()
  const router = useRouter()
  console.log('this is the userInfo', userInfo)

  useEffect(() => {
    if(!user && !loading) {
      router.push('/login?callbackurl=/profile')
    }
  }, 
  [user, loading])


  return (
    <>
    {
      loading && <h1 className='text-center mt-10'>Loading ...</h1>
    }
      {!loading && !user && <h1 className='text-center mt-10'>Please login!</h1>}
      {
        user && !loading && <ProfilePage />
      }
    </>
  )
}



Profile.getLayout = function getLayout(page: ReactElement) {
  return (

    <UserProfileLayout>{page}</UserProfileLayout>

  )
}


export default Profile 