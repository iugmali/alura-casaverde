import baseStyles from '../Home.module.scss';
import styles from './Chamada.module.scss';
import ImagemChamada from 'assets/img/imagem-chamada.png';
import SplashChamada from 'assets/img/splash-chamada.svg';
import InputEmail from "../../../components/InputEmail";
import Button from "../../../components/Button";
import {Images} from "../../../types/images";
import classNames from "classnames";

export default function Chamada() {
  return (
    <section style={{"--splash-chamada": `url(${SplashChamada})`} as Images} className={styles.chamada}>
      <h2 className={baseStyles.titulo}>
        Sua casa com as
        <span className={baseStyles['titulo--destaque']}>melhores plantas</span>
      </h2>
      <p className={classNames(baseStyles.texto, styles.chamada__texto)}>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca
      </p>
      <img className={styles.chamada__imagem} src={ImagemChamada} alt="Foto do Produto" />
      <form action="#" className={styles.chamada__form}>
        <InputEmail />
        <Button>Assinar newsletter</Button>
      </form>
    </section>
  );
}