import styles from './style.module.sass';
import circl from '../../img/circl.svg';

export function CircleIml() {
  return (
    <div className={styles.circl}>
      <img className={styles['circle-img']} src={circl} />
    </div>
  );
}
