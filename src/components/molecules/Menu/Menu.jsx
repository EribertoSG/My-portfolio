import Link from 'next/link'
import styles from '@/components/molecules/Menu/menu.module.css'

const Menu = ({ isActive }) => {
    const openPDF = () => {
        window.open('/doc/EribertoSantosGarcia-CV.pdf', '_blank');
    }

    return (
        <div className={`${styles.navbarContainer} ${isActive ? styles.active : ''}`}>
            <nav className={styles.navbar}>
                <Link className={styles.item} href="/projects">Proyectos</Link>
                <Link className={styles.item} href="/about">Conoceme</Link>
            </nav>

            <div className={styles.cv}>
                <button className={styles.buttonResume} onClick={openPDF}>Mi CV</button>
            </div>
        </div>
    )
}

export default Menu