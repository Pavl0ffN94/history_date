import styles from './style.module.sass';
interface ICard {
  title: string;
  desc: string;
}

export default function Card({title, desc}: ICard) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <span className={styles.decs}>{desc}</span>
    </div>
  );
}
