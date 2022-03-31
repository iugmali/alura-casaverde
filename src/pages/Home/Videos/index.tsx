import baseStyles from '../Home.module.scss';
import styles from './Videos.module.scss';
import videos from './videos.json';
import Video from "./Video";
import classNames from "classnames";

export default function Videos() {
    return (
        <section className={styles.videos}>
          <h2 className={classNames(baseStyles.titulo, baseStyles['align--center'])}>
            Veja aqui os nossos
            <span className={baseStyles['titulo--destaque']}>vídeos</span>
          </h2>
          <ul>
              {videos.map(video => (
                <Video key={video.id} {...video} />
              ))}
          </ul>
        </section>
    );
}