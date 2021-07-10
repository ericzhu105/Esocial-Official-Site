import {section} from '@styles/sections/section.module.css';

import MobileDescription from '@components/mobileDecription'
import MobileTitle from '@components/mobileTitle'

const Ecosystem = () => {
    return (
        <div className={section}>
            <MobileDescription />
            <MobileTitle title="Ecosystem" textPosition="right" />
        </div>
    )
}

export default Ecosystem;