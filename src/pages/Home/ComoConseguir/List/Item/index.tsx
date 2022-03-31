import styles from './Item.module.scss';
import React from "react";
import classNames from "classnames";

interface Props {
    children?: React.ReactNode;
    icone: string;
}

export default function Item({children, icone}:Props) {
    return (
        <li className={styles.item}>
            <span
                className={classNames({
                    [styles.item__icone]:true,
                    [styles[`item__icone--${icone}`]]: true
                })}
            ></span>
            <p>{children}</p>
        </li>
    );
}