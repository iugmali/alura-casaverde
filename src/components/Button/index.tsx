import styles from './Button.module.scss';
import React from "react";
import classNames from "classnames";

interface Props {
    children?: React.ReactNode;
    alternate?: boolean;
}

export default function Button({children, alternate = false}:Props) {
    return (
      <button
          className={classNames({
              [styles.button] : true,
              [styles['button--alternate']] : alternate
          })}
      >
          {children}
      </button>
    );
}