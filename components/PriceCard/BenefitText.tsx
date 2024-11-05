import { UiSpoiler } from '@/lib/index';
import useTrans from '@/utils/hooks/useTrans';
import React, { FC } from 'react'
import RightArrows from '@/assets/images/icons/right-arrows.svg'


interface BenefitTextType {
    benefitName?: string,
    limit?: string,
    limit2?: string,
}


const BenefitText: FC<BenefitTextType> = (props) => {
    const { benefitName, limit2, limit } = props;
    const t = useTrans()
    return (
        


            <p><RightArrows className="inline-block" /><span>{benefitName}</span>: <span>{limit}</span> - <span>{limit2}</span> </p>

      
    )
}

BenefitText.displayName = "BenefitText"

export default BenefitText