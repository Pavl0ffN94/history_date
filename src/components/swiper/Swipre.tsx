import styles from './style.module.sass';
import {FreeMode, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import 'swiper/scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import Card from './Card';
import {Fact} from '../../mockData';

export function SwipreImpl({facts}: {facts: Fact[]}) {
  return (
    <div className={styles.swiper}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}>
        {facts.map(fact => {
          return (
            <SwiperSlide key={fact.title}>
              <Card desc={fact.desc} title={fact.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
