import LoginForm from '@/components/LoginForm/LoginForm'
import React, { FC } from 'react'

interface YabanciSagilikLoginStepType {
    handleNextStep: () => void;
}

const YabanciSagilikLoginStep: FC<YabanciSagilikLoginStepType> = (props) => {
    const { handleNextStep } = props;

    
    return (
        <div>
            <LoginForm />
        </div>
    )
}


YabanciSagilikLoginStep.displayName = "YabanciSagilikLoginStep"


export default YabanciSagilikLoginStep