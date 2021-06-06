import {heading, mobileTitleBox, image} from '@styles/components/mobileTitle.module.css';

const MobileTitle = ({imageSrc = "/assets/apple-iphone-12-black-4.webp", title = "Schools", textPosition}) => {
    const rightStyle = {
        position: 'absolute',
        // top: '10%',
        left: `80%`,
        writingMode: `vertical-rl`
    }

    const leftStyle = {
        position: 'absolute',
        left: `-40%`,
        transform: `rotate(180deg)`,
        writingMode: `vertical-lr`
    }

    return (
        <div className={mobileTitleBox}>
            <img className={image} src={imageSrc} alt="Esocial app community features" />
            <h2 className={heading} style={textPosition === 'right' ? rightStyle : leftStyle}>{title}</h2>
        </div>
    )
}

export default MobileTitle;