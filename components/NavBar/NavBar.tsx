import { UiLink } from '@/lib'
import MainMenuItems from '@/utils/data/mainMenuItems'
import useTrans from '@/utils/hooks/useTrans'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface NavBarType {
  itemsWrapperClassName?: string,
  itemClassName?: string
}

const NavBar: FC<NavBarType> = ({itemsWrapperClassName, itemClassName}) => {
  const t = useTrans()
  const router = useRouter()
  const handleScroll = (id: string) => {
    router.push('/').then(() => {
      const element = document?.querySelector(id)
     
      const elementTop = element?.getBoundingClientRect()?.y
      if(!elementTop) return;
      window.scrollTo({left: 0, top: elementTop + window.scrollY - 100, behavior: 'smooth'})
    })
    // const element = document?.querySelector(id)
    // const elementTop = element?.getBoundingClientRect()?.y
    // if(!elementTop) return;
    // window.scrollTo({left: 0, top: elementTop + window.scrollY - 100, behavior: 'smooth'})
  }

  return (

    <ul className={itemsWrapperClassName}>
      {
        MainMenuItems.map(menuItem => {
          const { label, href, id } = menuItem
          return (
            <li key={id} className={itemClassName}>
             {href && <UiLink href={href} >{t(label.toUpperCase())}</UiLink>}
              {!href && <span onClick={() => handleScroll(id)} className={'cursor-pointer whitespace-nowrap'}>{t(label.toUpperCase())}</span>}
            </li>
          )
        })
      }
    </ul>
  )
    }

NavBar.displayName = "NavBar"

export default NavBar