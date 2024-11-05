import React,{FC} from 'react'
interface InputsProbs{
    class1?:string,
    placeholder?:string,
}
const Inputs:FC<InputsProbs> = ({
    class1,
    placeholder
}) => {
    return (
        <div className={class1}>
            <input className='w-full h-full bg-transparent focus:outline-none px-5 flex items-center text-[15px]' placeholder={placeholder}/>
        </div>
    )
}

export default Inputs
