import styles from './InputEmail.module.scss';
import classNames from "classnames";

export default function InputEmail() {
    return (
      <input className={classNames(
        styles.input, styles['input--email'], styles['input--icone']
      )} placeholder="Insira seu e-mail"/>
    );
}