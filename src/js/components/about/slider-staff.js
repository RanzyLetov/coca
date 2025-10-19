import Swiper from 'swiper';
import 'swiper/css';

export const useAboutStaffSwiper = () => {
    new Swiper('.staff__swiper', {
        loop: true,
        slidesPerView: '1',
        spaceBetween: 12,
        breakpoints: {
            1201: {
                slidesPerView: '3',
                spaceBetween: 32,
            },
            994: {
                slidesPerView: '2.6',
                spaceBetween: 32,
            },
            769: {
                slidesPerView: '2',
                spaceBetween: 16,
            },
            577: {
                slidesPerView: '1.5',
                spaceBetween: 12,
            },
            381: {
                slidesPerView: '1',
                spaceBetween: 12,
            },
        },
    });
};
