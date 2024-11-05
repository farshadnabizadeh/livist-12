import LoginForm from '@/components/LoginForm/LoginForm'
import React, { FC } from 'react'

interface SaglikTurizmLoginStepType {
    handleNextStep: () => void;
}

const SaglikTurizmLoginStep: FC<SaglikTurizmLoginStepType> = (props) => {
    const { handleNextStep } = props;

    
    return (
        <div>
            <LoginForm />
        </div>
    )
}


SaglikTurizmLoginStep.displayName = "SaglikTurizmLoginStep"


export default SaglikTurizmLoginStep