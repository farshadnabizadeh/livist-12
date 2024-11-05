import { ChangeEvent, FC } from "react"

interface CheckboxPropsType {
    label: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>, checkedInput: string) => void
    value: boolean;
	checkedInputValue: string
}

const Checkbox: FC<CheckboxPropsType> = (props: any) => {
	return <label>
		<input type="checkbox" checked={props.value} value={props.value} onChange={(e) => {props.handleChange(e, props.checkedInputValue)}}/>
		<span className="ml-3 text-primary text-base">{props.label}</span>
	</label>
}

export default Checkbox