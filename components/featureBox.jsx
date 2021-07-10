import Image from 'next/image'
import { featureBox, headerBox, head, text } from '@styles/components/featureBox.module.css'

const FeatureBox = ({ logoSrc, heading, description }) => {
    return (
        <div className={featureBox}>
            <div className={headerBox}>
                <Image src={logoSrc} alt="Esocial app features" width={60} height={60} />
                <h3 className={head}>{heading}</h3>
            </div>
            <p className={text}>{description}</p>
        </div>
    )
}

export default FeatureBox;