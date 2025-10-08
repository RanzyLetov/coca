import '../assets/scss/pricing.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useFooterAccordion } from './components/dropdown';
import { usePriceSwitcher } from './components/pricing/plans';

useTheme();
useBurger();
useFooterAccordion();
usePriceSwitcher();
