import React, { FC } from 'react'
interface SelectInputs {
    class1?: string,
}
const SelectInputs: FC<SelectInputs> = ({
    class1,
}) => {
    return (
        <div className={class1}>
            <select className='w-full h-full placeholder:translate-y-2 bg-transparent text-[#acabab] focus:outline-none px-5 flex items-center' placeholder='Sigorta Ürünü Seçin'>
                <option className=''>Sigorta Ürünü Seçin</option>
            </select>
        </div>
    )
}

export default SelectInputs
