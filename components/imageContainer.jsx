import {imageBox, image1, image2, image3, image4, image5, midBox, metricBox, headNumber, spanText } from '@styles/components/images.module.css';
import Image from 'next/image'

const ImageContainer = () => {
    return (
        <div className={imageBox}>
            <img 
                className={image1} 
                src="/assets/apple-iphone-12-black-1.webp"
                alt="Home Page of Esocial App"
            />
            <img className={image2} alt="Students talking in Esocial App" src="/assets/apple-iphone-12-black-2.webp" />
            <img 
                className={image3}
                alt="A University Profile in Esocial App"
                src="/assets/apple-iphone-12-black-3.webp"
             />
            <img className={image4} alt="Chatting in ESocial App" src="/assets/apple-iphone-12-black-4.webp" />
            <img className={image5} alt="Scheduling online meetings in Esocial App" src="/assets/apple-iphone-12-black-5.webp" />

            <div className={midBox}>
                <div className={metricBox}>
                    <h2 className={headNumber}>50</h2>
                    <span className={spanText}>Students</span>
                </div>
                <div className={metricBox}>
                    <h2 className={headNumber}>46k+</h2>
                    <span className={spanText}>Reachable Students</span>
                </div>
                <div className={metricBox}>
                    <h2 className={headNumber}>1.6k+</h2>
                    <span className={spanText}>Reachable Clubs</span>
                </div>
            </div>
        </div>
    )
}

export default ImageContainer;