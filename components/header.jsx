import { useRouter } from 'next/router'
import Image from 'next/image'

import Link from 'next/link'
import { header, logoWrapper, logoImage, logoText, link, rightBox } from '@styles/components/header.module.css'
import Button from './button'

const Header = () => {
    const router = useRouter()

    return (
        <header className={header}>

            <Link href="/">
                <div className={logoWrapper}>
                    <img src="/EsocialLogo.svg" className={logoImage}/>
                    <div className={logoText}>
                        Esocial
                    </div>
                </div>
            </Link>

            <nav className={rightBox}>
                <Link href="/"><a className={link}>Home</a></Link>
                <Link href="/career"><a className={link}>Career</a></Link>
                <Button onClickHandler={() => router.push('/contact')}>Contact us</Button>
            </nav>
        </header>
    )
}

export default Header;