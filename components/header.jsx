import Image from 'next/image'
import Link from 'next/link'
import { header, logo, link, rightBox } from '@styles/components/header.module.css'
import Button from './button'

const Header = () => {
    return (
        <header className={header}>
            <Link href="/">
                <Image src="/logo.svg" alt="Esocial Logo" height={40} width={150} className={logo} />
            </Link>

            <nav className={rightBox}>
                <Link href="/"><a className={link}>Home</a></Link>
                <Link href="/career"><a className={link}>Career</a></Link>

                <Button>Contact us</Button>
            </nav>
        </header>
    )
}

export default Header;