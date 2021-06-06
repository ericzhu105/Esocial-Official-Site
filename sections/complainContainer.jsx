import styles from '@styles/sections/contactContainer.module.css';

import ComplainInfo from '@components/complainInfo'
import ContactBox from '@components/contactBox'

const ComplainSection = () => {
    return (
      <div className={styles.contactContainer}>
        <ComplainInfo />
        <ContactBox />
      </div>
    )
}

export default ComplainSection;