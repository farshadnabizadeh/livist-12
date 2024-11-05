import { UiLink } from '@/lib'
import useTrans from '@/utils/hooks/useTrans'
import React from 'react'
import { FC } from 'react'

interface ApplyButtonType {
    className?: string
}

const ApplyButton: FC<ApplyButtonType> = ({className}) => {
  const t = useTrans()
  const handleScroll = (id: string) => {
    const element = document.querySelector(id)
    const elementTop = element?.getBoundingClientRect()?.y
    if(!elementTop) return;
    window.scrollTo({left: 0, top: elementTop + window.scrollY - 100, behavior: 'smooth'})
  }
  return (
    <button onClick={() => {handleScroll('#insurance-types')}} className={`${className} px-14  py-3 font-normal bg-accent hover:bg-white hover:text-accent text-base text-white rounded-[120px] transition-all`} >
        {t('BAŞVURU')}
    </button>
  )
}

ApplyButton.displayName = "ApplyButton"


export default ApplyButton