import '../assets/scss/blog.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useFooterAccordion } from './components/dropdown';
import { useBlogActivitySwiper } from './components/blog/slider-activity';

useTheme();
useBurger();
useFooterAccordion();
useBlogActivitySwiper();
