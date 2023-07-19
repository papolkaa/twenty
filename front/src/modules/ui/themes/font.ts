import { grayScale } from './colors';

const common = {
  size: {
    xxs: '0.625rem',
    xs: '0.85rem',
    sm: '0.92rem',
    md: '1rem',
    lg: '1.23rem',
    xl: '1.54rem',
    xxl: '1.85rem',
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  family: 'Inter, sans-serif',
};

export const fontLight = {
  color: {
    primary: grayScale.gray60,
    secondary: grayScale.gray50,
    tertiary: grayScale.gray35,
    light: grayScale.gray30,
    extraLight: grayScale.gray25,
    inverted: grayScale.gray0,
  },
  ...common,
};

export const fontDark = {
  color: {
    primary: grayScale.gray30,
    secondary: grayScale.gray35,
    tertiary: grayScale.gray50,
    light: grayScale.gray55,
    extraLight: grayScale.gray60,
    inverted: grayScale.gray100,
  },
  ...common,
};
