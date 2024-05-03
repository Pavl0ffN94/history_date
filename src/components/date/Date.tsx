import styles from './style.module.sass';

export function DateImpl({start, end}) {
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
