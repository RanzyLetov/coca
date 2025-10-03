import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
    useInsightSlider,
    useTestimonialsSlider,
} from './components/home/slider';
import { useFooterAccordion } from './components/dropdown';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useFooterAccordion();
