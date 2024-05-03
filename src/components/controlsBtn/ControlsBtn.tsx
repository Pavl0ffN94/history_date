import styles from './style.module.sass';
import left from '../../img/left.svg';
import right from '../../img/right.svg';

interface IProprs {
  currentIndex: number;
  final: number;
  updateIndex: (increment: boolean) => void;
}

export function ControlsBtnImpl({currentIndex, final, updateIndex}: IProprs) {
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      updateIndex(false);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < final - 1) {
      updateIndex(true);
    }
  };
  return (
    <div className={styles['controls-container']}>
      <div className={styles['controls-count']}>
        <span>{currentIndex + 1}</span>/<span>{final}</span>
      </div>
      <div className={styles['controls-btn']}>
        <img onClick={handlePrevClick} src={left} />
        <img onClick={handleNextClick} src={right} />
      </div>
    </div>
  );
}
