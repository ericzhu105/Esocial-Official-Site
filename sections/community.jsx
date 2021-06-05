import {section} from '@styles/sections/section.module.css';

import MobileDescription from '@components/mobileDecription'
import MobileTitle from '@components/mobileTitle'

const Community = () => {
    return (
        <div className={section}>
            <MobileTitle title="Community" textPosition="left" />
            <MobileDescription textAlign="right" />
        </div>
    )
}

export default Community;