// import Card from './Card';
import styles from './style.module.sass';
import {FreeMode, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import 'swiper/scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import Card from './Card';

export function SwipreImpl() {
  return (
    <div className={styles.swiper}>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}>
        <SwiperSlide>{<Card key={1} desc='dwqdwqdwqd' title='cascasdADF' />}</SwiperSlide>
        <SwiperSlide>{<Card key={2} desc='GFsdgsdfgsd' title='TSCQW' />}</SwiperSlide>
      </Swiper>
    </div>
  );
}
