import {useCallback, useState} from 'react';
import {Circle} from './components/circle';
import {ControlsBtn} from './components/controlsBtn';
import {Date} from './components/date';
import {MySwapper} from './components/swiper';
import {Title} from './components/title';

import './styleApp.sass';
import {HISTORY_DATE} from './mockData';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const final = HISTORY_DATE.length;
  const currentSecrion = HISTORY_DATE[currentIndex];
  const {date, facts} = currentSecrion;
  const {start, end} = date;

  const updateCurrentIndex = useCallback(
    (increment: boolean) => {
      setCurrentIndex(prevIndex => {
        let newIndex = prevIndex + (increment ? 1 : -1);
        newIndex = Math.min(Math.max(newIndex, 0), final - 1);
        return newIndex;
      });
    },
    [final],
  );

  return (
    <div className='container'>
      <Title />
      <Circle currentIndex={currentIndex} updateIndex={updateCurrentIndex} />
      <Date start={start} end={end} />
      <ControlsBtn
        currentIndex={currentIndex}
        updateIndex={updateCurrentIndex}
        final={final}
      />
      <MySwapper facts={facts} />
    </div>
  );
}

export default App;
