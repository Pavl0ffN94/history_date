import {useRef, useState} from 'react';
import styles from './style.module.sass';

import gsap from 'gsap';

export function CircleIml() {
  const [clickedCircle, setClickedCircle] = useState(null);
  const circleRef = useRef();
  const circleNumber = ['1', '2', '3', '4'];

  const handleClick = circleNumber => {
    setClickedCircle(circleNumber);

    const angle = (360 / 4) * circleNumber + 215;
    gsap.to(circleRef.current, {
      duration: 1,
      rotation: angle,
      transformOrigin: '50% 50%',
    });
  };
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

        {circleNumber.map(circleNum => {
          const x = [90, 50, 10, 50][circleNum - 1];
          const y = [50, 10, 50, 90][circleNum - 1];
          return (
            <g key={circleNum}>
              <circle
                className={`${styles.point} ${
                  clickedCircle === circleNum ? styles.clicked : ''
                }`}
                cx={`${x}%`}
                cy={`${y}%`}
                r='1'
                fill='#fff'
                stroke='#42567A'
                strokeWidth='0.3'
                onClick={() => handleClick(circleNum)}
              />
              {clickedCircle === circleNum && (
                <text
                  x={`${x}%`}
                  y={`${y}%`}
                  textAnchor='middle'
                  dominantBaseline='middle'
                  className={styles.number}></text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
