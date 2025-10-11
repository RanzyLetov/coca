import '../assets/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useFooterAccordion } from './components/dropdown';
import { usePhone } from './components/contact/phone';

useTheme();
useBurger();
useFooterAccordion();
usePhone();
