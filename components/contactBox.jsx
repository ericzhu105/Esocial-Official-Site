import styles from '@styles/components/contactBox.module.css';

import Input from '@components/input'
import Button from '@components/button'

const ContactBox = () => {
    return (
        <div className={styles.inputBox}>
                <Input type="name" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <textarea rows = "10" placeholder="Message" />

                <Button>Send Message</Button>
        </div>
    )
}

export default ContactBox;