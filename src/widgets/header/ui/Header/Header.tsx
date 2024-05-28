import Logo from '@/shared/ui/Logo/Logo'
import styles from './styles.module.css'
import { RegisterButton } from '@/features/register'
import { LoginButton } from '@/features/login'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />

            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Our story</a>
                    </li>
                </ul>

                <div className={styles.buttons}>
                    <LoginButton />
                    <RegisterButton />
                </div>
            </nav>
        </header>
    )
}

export default Header