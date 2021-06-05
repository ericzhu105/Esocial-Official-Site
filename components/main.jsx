import { main, red, inputBox, title } from '@styles/components/main.module.css';

import Input from '@components/input'
import Button from '@components/button'

const MainContent = () => {
    return (
        <div className={main}>
            <h1 className={title}>Create a better school <span className={red}>Environment</span></h1>

            <div className={inputBox}>
                <Input type="email" placeholder="Your email" />
                <Input type="text" placeholder="School Name" />

                <Button>Subscribe</Button>
            </div>
        </div>
    )
}

export default MainContent;