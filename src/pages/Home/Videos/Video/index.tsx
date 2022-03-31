import styles from './Video.module.scss';
import videos from '../videos.json';
import Play from '../../../../assets/img/icons/play.svg';
import {Images} from "../../../../types/images";

type Props = typeof videos[0];

export default function Video({name,description,img}:Props) {
    return (
      <li className={styles.video__card}>
        <div style={{"--play": `url(${Play})`} as Images} className={styles.video__card__video}>
            <img src={"https://picsum.photos/278/252"} alt="Banner do video" />
        </div>
        <h3 className={styles.video__card__titulo}>{name}</h3>
        <p>{description}</p>
      </li>
    );
}