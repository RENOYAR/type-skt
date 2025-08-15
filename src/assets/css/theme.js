import {DefaultTheme} from 'styled-components';

const pxToRem = size => `${size / 16}rem`;

const color = {
  primary: '#4130DF',
  violet50: '#E0E5FF',
  violet100: '#CED3FF',
  violet200: '#B3BFFF',
  violet300: '#939EFF',
  violet400: '#6F7DFB',
  violet600: '#3F3DF7',
  violet700: '#3325D7',
  violet800: '#1F0C96',
  violet900: '#0D0660',

  orange: '#F18360',
  yellow: '#FEB63D',
  blue: '#5B93FF',
  green: '#7CC038',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF5555',

  gray1: '#F0F1F4',
  gray2: '#DADCE4',
  gray3: '#C2C5D2',
  gray4: '#A0A4B6',
  gray5: '#868BA2',
  gray6: '#6A7190',
  gray7: '#575E7D',
  gray8: '#434860',
  gray9: '#2E3242',
  gray10: '#212430',

  footerbg: '#F6F6F6',
  footerborder: '#CCCCCC',

  text1: '#212430',
  text2: '#434860',
  text3: '#575E7D',
  text4: '#868BA2',
  text5: '#A0A4B6',
  textDimed: '#CDCDCD',
  textError: '#FF5555',
  textSub: '#455DD7',

  tagColor: '#455DD7',

  opacityDimed: 0.5,

  boxShadow: '0 0 15px #0000001a',
};

const fontSize = {
  fontSize1: pxToRem(12), // 0.75rem
  fontSize2: pxToRem(13), // 0.8125rem
  fontSize3: pxToRem(14), // 0.875rem
  fontSize4: pxToRem(15), // 0.9375rem
  fontSize5: pxToRem(16), // 1rem
  fontSize6: pxToRem(18), // 1.125rem
  fontSize7: pxToRem(20), // 1.25rem
  fontSize8: pxToRem(24), // 1.5rem
};

const theme = {
  fontSize,
  color,
};

export default theme;
