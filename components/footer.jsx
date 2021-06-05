import styles from '@styles/components/footer.module.css';

import InstagramSvg from '@assets/social/instagram.svg'
import TwitterSvg from '@assets/social/twitter.svg'
import LinkedInSvg from '@assets/social/linkedin.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.span}>&copy; 2021 Esocial</span>
            <div className={styles.iconsBox}>
                <InstagramSvg />
                <TwitterSvg />
                <LinkedInSvg />
            </div>
            <span className={styles.span}>Privacy Policy</span>
        </footer>
    )
} 

export default Footer;