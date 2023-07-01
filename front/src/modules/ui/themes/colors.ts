import hexRgb from 'hex-rgb';

export const grayScale = {
  gray100: '#000000',
  gray90: '#0f0f0f',
  gray85: '#141414',
  gray80: '#171717',
  gray75: '#1b1b1b',
  gray70: '#1d1d1d',
  gray65: '#222222',
  gray60: '#292929',
  gray55: '#333333',
  gray50: '#4c4c4c',
  gray45: '#666666',
  gray40: '#999999',
  gray35: '#b3b3b3',
  gray30: '#cccccc',
  gray25: '#d6d6d6',
  gray20: '#ebebeb',
  gray15: '#f5f5f5',
  gray10: '#fcfcfc',
  gray0: '#ffffff',
};

export const color = {
  yellow: '#ffd338',
  yellow80: '#2e2a1a',
  yellow70: '#453d1e',
  yellow60: '#746224',
  yellow50: '#b99b2e',
  yellow40: '#ffe074',
  yellow30: '#ffedaf',
  yellow20: '#fff6d7',
  yellow10: '#fffbeb',
  green: '#55ef3c',
  green80: '#1d2d1b',
  green70: '#23421e',
  green60: '#2a5822',
  green50: '#3f7d2e',
  green40: '#7edc6a',
  green30: '#b9f5a3',
  green20: '#e0fbd1',
  green10: '#f3fde9',
  turquoise: '#15de8f',
  turquoise80: '#1b2d26',
  turquoise70: '#1f3f2b',
  turquoise60: '#244f30',
  turquoise50: '#2e6d3d',
  turquoise40: '#5cbf7a',
  turquoise30: '#9af0b0',
  turquoise20: '#c9fbd9',
  turquoise10: '#e8fde9',
  sskyky: '#00e0ff',
  sky80: '#1a2d2e',
  sky70: '#1e3f40',
  sky60: '#224f50',
  sky50: '#2d6d6d',
  sky40: '#5ac0c0',
  sky30: '#97f0f0',
  sky20: '#c5fbfb',
  sky10: '#e4fdfd',
  blue: '#1961ed',
  lighterBlue: '#f8fafe',
  lightBlue: '#eef2fd',
  purple: '#915ffd',
  purple80: '#2d1d2d',
  purple70: '#3f203f',
  purple60: '#502250',
  purple50: '#6d2e6d',
  purple40: '#bf5ac0',
  purple30: '#f097f0',
  purple20: '#fbc5fb',
  purple10: '#fde4fd',
  pink: '#f54bd0',
  pink80: '#2d1a2d',
  pink70: '#3f1e3f',
  pink60: '#50224f',
  pink50: '#6d2d6d',
  pink40: '#bf5ac0',
  pink30: '#f097f0',
  pink20: '#fbc5fb',
  pink10: '#fde4fd',
  red: '#f83e3e',
  red80: '#2d1a1a',
  red70: '#3f1e1e',
  red60: '#502222',
  red50: '#6d2d2d',
  red40: '#bf5a5a',
  red30: '#f09797',
  red20: '#fbc5c5',
  red10: '#fde4e4',
  orange: '#ff7222',
  orange80: '#2d1a16',
  orange70: '#3f1e19',
  orange60: '#50221c',
  orange50: '#6d2d2d',
  orange40: '#bf5a5a',
  orange30: '#f09797',
  orange20: '#fbc5c5',
  orange10: '#fde4e4',
  gray: grayScale.gray30,
  gray80: grayScale.gray65,
  gray70: grayScale.gray60,
  gray60: grayScale.gray50,
  gray50: grayScale.gray40,
  gray40: grayScale.gray25,
  gray30: grayScale.gray20,
  gray20: grayScale.gray15,
  gray10: grayScale.gray10,
  gray0: grayScale.gray0,
};

export function rgba(hex: string, alpha: number) {
  const rgb = hexRgb(hex, { format: 'array' }).slice(0, -1).join(',');
  return `rgba(${rgb},${alpha})`;
}
