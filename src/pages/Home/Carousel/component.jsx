import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getProjects } from '@/utils/content';
import styles from './styles.module.scss';

const ImageCard = ({ href, imgUrl }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
    <div className={styles.card}>
      <img src={imgUrl} alt="" className={styles.cardImg} />
    </div>
  </a>
);

const Carousel = () => {
  const projects = getProjects();

  return (
    <Swiper className={styles.carousel} spaceBetween={24} slidesPerView="auto">
      {projects.map(({ id, source, preview }) => (
        <SwiperSlide key={id} className={styles.slide}>
          <ImageCard href={source} imgUrl={preview} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
