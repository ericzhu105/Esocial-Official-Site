import styles from '@styles/components/jobBox.module.css';

import Button from '@components/button'

const JobBox = () => {
    return (
        <article className={styles.jobBox}>
            <img src="/assets/job.webp" alt="Job Image" className={styles.leftImage} />

            <div className={styles.rightBox}>
                <div className={styles.heading}>
                    <h2>Visual Designer</h2>
                    <div className={styles.iconsBox}>
                        <img src="/logos/jobLogos/adobe-xd.webp" alt="Adobe XD" />
                        <img src="/logos/jobLogos/figma.webp" alt="Figma" />
                        <img src="/logos/jobLogos/sketch.webp" alt="Sketch" />
                        <img src="/logos/jobLogos/pencil.webp" alt="Pencil" />
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque semper posuere sit vestibulum consectetur cursus. Semper egestas odio donec semper lectus aliquam ut donec. Bibendum massa feugiat curabitur vitae tristique turpis pulvinar lobortis sagittis. Fames arcu duis dictumst egestas.
                </p>
                <div className={styles.information}>
                    <p>Working Type: <span>Remote</span></p>
                    <Button>Apply Now</Button>
                </div>
            </div>
        </article>
    )
}

export default JobBox;