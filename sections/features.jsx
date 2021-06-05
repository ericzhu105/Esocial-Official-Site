import { container, mobile, featuresBox } from '@styles/sections/features.module.css';
import FeatureBox from '@components/featureBox'

const Features = () => {
    return (
        <div className={container}>
            <img className={mobile} alt="Lock Security in Esocial App" src="/assets/apple-iphone-12-black-11.webp" />

            <div className={featuresBox}>
                <FeatureBox 
                    logoSrc="/logos/privacy.svg" 
                    heading="Privacy" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque justo egestas turpis proin venenatis massa in porttitor. Tincidunt mauris, mauris, mauris, nunc, a iaculis. Est vitae adipiscing leo gravida volutpat eu nisi iaculis aenean. Sed sit nisl aliquam ullamcorper augue ante eu amet." 
                />
                <FeatureBox 
                    logoSrc="/logos/freedom.svg" 
                    heading="Freedom" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque justo egestas turpis proin venenatis massa in porttitor. Tincidunt mauris, mauris, mauris, nunc, a iaculis. Est vitae adipiscing leo gravida volutpat eu nisi iaculis aenean. Sed sit nisl aliquam ullamcorper augue ante eu amet." 
                />
            </div>
        </div>
    )
}

export default Features;