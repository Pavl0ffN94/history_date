import {useState, useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import styles from './style.module.sass';
import {DataSection, HISTORY_DATE} from '../../mockData';

interface CircleProps {
  currentIndex: number;
  updateIndex: (increment: boolean) => void;
}

export function CircleIml({currentIndex, updateIndex}: CircleProps) {
  const [clickedCircle, setClickedCircle] = useState<number | null>(null);
  const circleRef = useRef<SVGSVGElement | null>(null);

  const points = HISTORY_DATE.map((_section: DataSection, index: number) => {
    const angle = (360 / HISTORY_DATE.length) * index + 90;
    const x = 50 + Math.cos((angle * Math.PI) / 180) * 40;
    const y = 50 + Math.sin((angle * Math.PI) / 180) * 40;
    const textAnchor = angle > 270 || angle < 90 ? 'start' : 'end';

    return {
      angle,
      x,
      y,
      textAnchor,
    };
  });

  const handleCircleClick = (index: number) => {
    updateIndex(true);
    const angle = 215 - (360 / HISTORY_DATE.length) * index;
    gsap.to(circleRef.current, {
      duration: 1,
      rotation: angle,
      transformOrigin: '50% 50%',
    });
  };

  useEffect(() => {
    const angle = 215 - (360 / HISTORY_DATE.length) * currentIndex;
    setClickedCircle(currentIndex);

    gsap.to(circleRef.current, {
      duration: 1,
      rotation: angle,
      transformOrigin: '50% 50%',
    });
  }, [currentIndex]);
  return (
    <div className={styles['circle-container']}>
      <svg ref={circleRef} viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='50%'
          cy='50%'
          r='40%'
          fill='none'
          stroke='#42567a57'
          strokeWidth='0.5'
        />

        {points.map((point, index) => {
          const {x, y, textAnchor} = point;

          const isClicked = clickedCircle === index;
          const className = isClicked
            ? `${styles.point} ${styles.clicked}`
            : styles.point;

          const handleClick = () => handleCircleClick(index);

          return (
            <g key={index + 1}>
              <circle
                className={className}
                cx={`${x}%`}
                cy={`${y}%`}
                r='1'
                fill='#fff'
                stroke='#42567A'
                strokeWidth='0.3'
                onClick={handleClick}
              />
              {isClicked && (
                <text
                  x={`${x + 5}%`}
                  y={`${y + 5}%`}
                  textAnchor={textAnchor}
                  dominantBaseline='middle'
                  className={styles.number}>
                  {/* <tspan dy='-0.35em'>{HISTORY_DATE[index].title}</tspan> */}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default CircleIml;
