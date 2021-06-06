import { input } from '@styles/components/input.module.css'

const Input = ({...props}) => {
    return (
        <input className={input} {...props} />
    )
}

export default Input;