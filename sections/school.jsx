import {section} from '@styles/sections/section.module.css';

import MobileDescription from '@components/mobileDecription'
import MobileTitle from '@components/mobileTitle'

const School = () => {
    return (
        <div className={section}>
            <MobileDescription />
            <MobileTitle textPosition="right" />
        </div>
    )
}

export default School;