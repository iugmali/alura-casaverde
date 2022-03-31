import baseStyles from '../../Home.module.scss';
import styles from './Produto.module.scss';
import produtos from '../produtos.json';
import Card from "../../../../components/Card";
import classNames from "classnames";
import Seta from '../../../../assets/img/icons/seta.svg';
import {Images} from "../../../../types/images";

type Produto = typeof produtos[0];

export default function Produto({name,price,img}:Produto) {
    return (
      <Card produto>
          <img src={img} alt="Foto do Produto" className={styles.produto__imagem}/>
          <div className={styles.produto__conteudo}>
              <h3 className={classNames(
                  styles.produto__titulo, baseStyles['titulo--destaque']
              )}>
                  {name}
              </h3>
              <p className={styles.produto__preco}>{price}</p>
              <a href="#" className={styles.produto__comprar}>
                  Comprar
                  <span style={{"--seta": `url(${Seta})`} as Images} className={styles['produto__comprar--icone']}></span>
              </a></div>
      </Card>
    );
}