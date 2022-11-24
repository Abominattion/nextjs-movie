import styles from '../styles/Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="https://cdn-icons-png.flaticon.com/512/1149/1149380.png" />
            </div>
            {/* <nav className={styles.nav}>
                <ul>
                    <l1><a href="/">Home</a></l1>
                    <l1><a href="/">Top filmes</a></l1>
                    <l1><a href="/">Filmes populares</a></l1>
                    <l1><a href="/">Sessão terror</a></l1>
                </ul>
            </nav> */}
            <span>Entrar</span>
        </header>
    )
}