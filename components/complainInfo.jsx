import styles from '@styles/components/complainInfo.module.css'

const ComplainInfo = () => {
    return (
        <div className={styles.complainInfo}>
            <h1>Complaint</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis condimentum nam at id duis sodales. Nulla non non donec velit odio viverra elit ac. Eget egestas tristique nunc, urna, phasellus sit a sit. Diam scelerisque euismod interdum magna id odio turpis sagittis. Accumsan leo mi eget faucibus. Purus dui id.
            </p>
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

export default ComplainInfo;