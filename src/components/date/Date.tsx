import styles from './style.module.sass';
interface Iprops {
  start: number;
  end: number;
}
export function DateImpl({start, end}: Iprops) {
  return (
    <div className={styles['date_container']}>
      <div className={styles['date_container_left']}>
        <span>{start}</span>
      </div>
      <div className={styles['date_container_right']}>
        <span>{end}</span>
      </div>
    </div>
  );
}
