import baseStyles from '../Home.module.scss';
import styles from './Produtos.module.scss';
import produtos from './produtos.json';
import Card from "../../../components/Card";
import Produto from "./Produto";
import classNames from "classnames";

export default function Produtos() {
    return (
      <section className={styles.produtos}>
        <h2 className={classNames(baseStyles.titulo, baseStyles['align--center'])}>
            Conheça nossos
            <span className={baseStyles['titulo--destaque']}>produtos</span>
        </h2>
        <ul>
          {produtos.map((produto) => (
            <Produto key={produto.name} {...produto} />
          ))}
        </ul>
      </section>
    );
}