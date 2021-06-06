import Image from 'next/image'
import styles from '@styles/sections/work.module.css'
import MouseSvg from '@assets/mouse.svg'

const WorkAtEsocial = () => {
    return (
        <div className={styles.main}>
            <section className={styles.section}>
                <span>We are Hiring</span>
                <h1>Work at Esocial</h1>
                <p>Esocial is home to passionate people <br /> Who value our mission</p>

                <div className={styles.scrollDown}>
                    <MouseSvg />
                    <span>Scroll Down</span>
                </div>
            </section>
            <img alt="Work Illustration" src="/assets/illustration.webp" />
        </div>
    )
}

export default WorkAtEsocial;