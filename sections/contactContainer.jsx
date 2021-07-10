import styles from '@styles/sections/contactContainer.module.css';

import ContactInfo from '@components/contactInfo'
import ContactBox from '@components/contactBox'

const ContactSection = () => {
    return (
      <div className={styles.contactContainer}>
        <ContactInfo />
        <ContactBox />
      </div>
    )
}

export default ContactSection;