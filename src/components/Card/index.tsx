import styles from './Card.module.scss';
import React from "react";
import classNames from "classnames";

interface Props {
    children?: React.ReactNode;
    produto?: boolean
}

export default function Card({children, produto = false} : Props) {
    return (
      <article
          className={classNames({
              [styles.card] : true,
              [styles.card__produto] : produto
          })}
      >
          {children}
      </article>
    );
}
