import { useRouter } from 'next/router'
import Image from 'next/image'

import Link from 'next/link'
import { header, logo, link, rightBox } from '@styles/components/header.module.css'
import Button from './button'

const Header = () => {
    const router = useRouter()

    return (
        <header className={header}>
            <Image src="/logo.webp" alt="Esocial Logo" height={40} width={150} className={logo} onClick={() => router.push('/')} />

            <nav className={rightBox}>
                <Link href="/"><a className={link}>Home</a></Link>
                <Link href="/career"><a className={link}>Career</a></Link>
                <Button onClickHandler={() => router.push('/contact')}>Contact us</Button>
            </nav>
        </header>
    )
}

export default Header;