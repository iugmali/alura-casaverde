import styles from './List.module.scss';
import React from "react";

interface Props {
    children?: React.ReactNode;
}

export default function List({children}:Props) {
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    );
}