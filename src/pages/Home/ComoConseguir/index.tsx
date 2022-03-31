import baseStyles from '../Home.module.scss';
import styles from './ComoConseguir.module.scss';
import classNames from "classnames";
import List from "./List";
import Item from "./List/Item";
import Card from "../../../components/Card";

export default function ComoConseguir() {
  return (
    <section className={styles['como-conseguir']}>
      <Card>
        <h2 className={classNames(baseStyles.titulo, baseStyles['align--center'])}>
          Como conseguir
          <span className={baseStyles['titulo--destaque']}>minha planta</span>
        </h2>
        <List>
          <Item icone="cursor">Escolha suas plantas</Item>
          <Item icone="cart">Faça seu pedido</Item>
          <Item icone="truck">Aguarde na sua casa</Item>
        </List>
      </Card>
    </section>
  );
}