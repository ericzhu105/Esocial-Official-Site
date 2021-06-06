import styles from '@styles/components/contactInfo.module.css'

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <h1>Get In Touch</h1>

            <div className={styles.infoBox}>
                <h2>We are based on</h2>
                <span>Toronto ON - Canada</span>
            </div>
            <div className={styles.infoBox}>
                <h2>Email Helpline</h2>
                <span>help@esocial.info</span>
            </div>
            <div className={styles.infoBox}>
                <h2>Call us at</h2>
                <span>+1 (384) 399 9948</span>
            </div>
        </div>
    )
}

export default ContactInfo;