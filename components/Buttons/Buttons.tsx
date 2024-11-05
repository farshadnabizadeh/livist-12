import React, { FC } from 'react'
interface ButtonsProp {
    class1?: string,
    title?: string,
    spanclass?: string,
}
const Buttons: FC<ButtonsProp> = ({
    class1,
    title,
    spanclass
}) => {
    return (
        <button className={class1}>
            <span className={spanclass}>{title}</span>
        </button>
    )
}

export default Buttons
