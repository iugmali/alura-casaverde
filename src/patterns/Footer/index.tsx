import baseStyles from '../../pages/Home/Home.module.scss';
import styles from './Footer.module.scss';
import Splash from 'assets/img/splash-rodape.svg';
import Logo from 'assets/img/logo.svg';
import Facebook from 'assets/img/icons/facebook.svg';
import Twitter from 'assets/img/icons/twitter.svg';
import Instagram from 'assets/img/icons/instagram.svg';
import {Images} from "../../types/images";
import classNames from "classnames";

export default function Footer() {
  return (
    <footer style={{"--splash": `url(${Splash})`} as Images} className={styles.footer}>
      <img src={Logo} alt="Logo da Casa Verde" className={styles.footer__logo} />
      <ul className={styles.footer__social}>
        <li><a href="#" className={styles['footer__social--midia']} title="Facebook"><img src={Facebook} alt="Facebook"/></a></li>
        <li><a href="#" className={styles['footer__social--midia']} title="Twitter"><img src={Twitter} alt="Twitter"/></a></li>
        <li><a href="#" className={styles['footer__social--midia']} title="Instagram"><img src={Instagram} alt="Instagram"/></a></li>
      </ul>
      <address className={classNames(
        styles.footer__unidade, baseStyles.texto
      )}>
        <span className={styles.footer__unidade__titulo}>Rio de Janeiro</span><br/>
        Rua Siqueira Campos, 171, 303<br />
        Copacabana <br />
        Telefone: (21) 99876-0099 <br />
      </address>
      <address className={classNames(
        styles.footer__unidade, baseStyles.texto
      )}>
        <span className={styles.footer__unidade__titulo}>São Paulo</span><br/>
        Rua Anita Garibaldi, 33, 13<br />
        Sé <br />
        Telefone: (11) 99875-2201 <br />
      </address>
    </footer>
  );
}