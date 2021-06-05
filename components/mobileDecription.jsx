import { mobileDescriptionBox, image, description } from '@styles/components/mobileDescription.module.css';

const MobileDescription = ({imageSrc = '/assets/apple-iphone-12-black-4.webp', textAlign}) => {
    return (
        <div className={mobileDescriptionBox}>
            <img className={image} src={imageSrc} alt="Esocial app chatting features" />

            <p className={description} style={{ textAlign }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim eget aliquam habitant velit consectetur scelerisque nec, phasellus. Pellentesque nulla malesuada elementum in in. Ullamcorper sollicitudin id nulla sagittis metus. Tincidunt pellentesque egestas viverra arcu. Sed purus pellentesque laoreet sed.
            </p>
        </div>
    )
}

export default MobileDescription;