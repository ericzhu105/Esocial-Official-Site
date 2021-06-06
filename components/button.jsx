import { button } from '@styles/components/button.module.css'

const Button = ({children, onClickHandler}) => {
    return (
        <button className={button} onClick={onClickHandler}>{children}</button>
    )
}

export default Button;