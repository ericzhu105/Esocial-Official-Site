import { button } from '@styles/components/button.module.css'

const Button = ({children}) => {
    return (
        <button className={button}>{children}</button>
    )
}

export default Button;