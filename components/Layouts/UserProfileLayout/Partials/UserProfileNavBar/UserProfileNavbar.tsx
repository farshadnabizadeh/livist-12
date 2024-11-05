import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


const menuItems = [
    {
        id: 0,
        label: 'Ana Sayfa',
        href: '/profile',
    },
    {
        id: 0,
        label: 'Poliçelerim',
        href: '/profile/policies',
    },
    {
        id: 0,
        label: 'Ödemelerim',
        href: '/profile/invoices',
    },
    {
        id: 0,
        label: 'Destek',
        href: '#',
    },
    {
        id: 0,
        label: 'Ayarlar',
        href: '#',
    },
]


const UserProfileNavbar = () => {
    const router = useRouter()
    const pathname = router.pathname
    const activeLang = router.locale
    return (
        <ul className='flex space-x-4'>
            {
                menuItems.map(menuItem => {
                    const {id, href, label} = menuItem;
                    return (
                        <li key={id} className={`${pathname === href ? "font-semibold underline underline-offset-8": ""} text-white font-normal `}>
                            <Link href={`/${activeLang}${href}`}>{label}</Link>
                        </li>

                    )
                })
            }
        </ul>
    )
}

export default UserProfileNavbar