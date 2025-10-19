import '../assets/scss/about.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useAboutHeroSwiper } from './components/about/slider-hero';
import { useAboutStaffSwiper } from './components/about/slider-staff';

useTheme();
useBurger();
useAboutHeroSwiper();
useAboutStaffSwiper();
