import styles from './style.module.sass';

export function TitleImpl() {
  return (
    <div className={styles['text__primery']}>
      <h1 className={styles['text__primery-text']}>
        Исторические <br /> даты
      </h1>
    </div>
  );
}
