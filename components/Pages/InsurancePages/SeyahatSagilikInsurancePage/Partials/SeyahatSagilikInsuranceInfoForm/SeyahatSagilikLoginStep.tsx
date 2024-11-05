import LoginForm from '@/components/LoginForm/LoginForm'
import React, { FC } from 'react'

interface SeyahatSagilikLoginStepType {
    handleNextStep: () => void;
}

const SeyahatSagilikLoginStep: FC<SeyahatSagilikLoginStepType> = (props) => {
    const { handleNextStep } = props;

    
    return (
        <div>
            <LoginForm />
        </div>
    )
}


SeyahatSagilikLoginStep.displayName = "SeyahatSagilikLoginStep"


export default SeyahatSagilikLoginStep