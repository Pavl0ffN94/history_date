import {Circle} from './components/circle';
import {ControlsBtn} from './components/controlsBtn';
import {Date} from './components/date';
import {MySwapper} from './components/swiper';
import {Title} from './components/title';

import './styleApp.sass';

function App() {
  return (
    <div className='container'>
      <Title />
      <Circle />
      <Date />
      <ControlsBtn />
      <MySwapper />
    </div>
  );
}

export default App;
