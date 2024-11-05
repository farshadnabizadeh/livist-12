import { UiLink } from '@/lib'
import useTrans from '@/utils/hooks/useTrans'
import React, { FC } from 'react'

interface ContactButtonType {
    className?: string,
}

const ContactButton: FC<ContactButtonType> = ({className}) => {
    const t = useTrans()
    return (

        <UiLink 
        href={'https://api.whatsapp.com/send/?phone=+905538009999&text=Merhabalar%20ben%20sigorta%20hakk%C4%B1nda%20dan%C4%B1%C5%9Fmanl%C4%B1k%20istiyorum'}
        className={`${className} px-14  py-3 font-normal bg-white text-base text-primary hover:text-white hover:bg-accent rounded-[120px] transition-all`} >
           {t('BİZE ULAŞIN')}
        </UiLink>

    )
}


ContactButton.displayName = 'ContactButton'



export default ContactButton