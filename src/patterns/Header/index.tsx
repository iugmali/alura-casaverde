import styles from './Header.module.scss';
import Logo from 'assets/img/logo.svg';
import Cart from 'assets/img/icons/carrinho.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo da Casa Verde" className={styles.header__logo}/>
      <a href="#" aria-label="Meu Carrinho de Compras">
        <img src={Cart} alt="Carrinho" className={styles.header__cart}/>
      </a>
    </header>
  );
}