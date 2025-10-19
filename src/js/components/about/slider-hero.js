import Swiper from 'swiper';
import 'swiper/css';

export const useAboutHeroSwiper = () => {
    new Swiper('.hero__swiper', {
        loop: true,
        slidesPerView: '1',
        spaceBetween: 16,
        slidesPerGroup: 1,
        breakpoints: {
            1201: {
                slidesPerView: '2.25',
                spaceBetween: 32,
                slidesPerGroup: 1,
            },
            769: {
                slidesPerView: '2',
                spaceBetween: 16,
            },
            577: {
                slidesPerView: '1.5',
                // spaceBetween: 12,
                // centeredSlides: true,
            },
            554: {
                slidesPerView: '1.2',
                // spaceBetween: 10,
                // slidesPerGroup: 1,
            },
            381: {
                slidesPerView: '1',
                spaceBetween: 16,
                slidesPerGroup: 1,
            },
        },
    });
};
