import styles from './style.module.sass';
import left from '../../img/left.svg';
import right from '../../img/right.svg';

export function ControlsBtnImpl() {
  return (
    <div className={styles['controls-container']}>
      <div className={styles['controls-count']}>
        <span>06</span>/<span>06</span>
      </div>
      <div className={styles['controls-btn']}>
        <img src={left} />
        <img src={right} />
      </div>
    </div>
  );
}
