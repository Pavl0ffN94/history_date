import styles from './style.module.sass';

export function DateImpl() {
  return (
    <div className={styles['date_container']}>
      <div className={styles['date_container_left']}>
        <span>2015</span>
      </div>
      <div className={styles['date_container_right']}>
        <span>2022</span>
      </div>
    </div>
  );
}
