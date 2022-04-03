export const COLOR_CODE = {
  BLACK: '#030e15',
  BLUE: '#1B91D3',
  DARKGRAY: '#353E44',
  GRAY: '#293238',
  LIGHTGRAY: '#686e73',
  ORANGE: '#EE8800',
  RED: '#E13C26',
  WHITE: '#f7f8fa',
  YELLOW: '#DBB60B',
  SUPER_LIGHTGRAY: '#F6F8FA',
} as const;

export const COLOR = {
  GRAY50: {
    color: '#000000',
    rgb: '0,0,0',
  },
  GRAY200: {
    color: '#2C2C2C',
    rgb: '44,44,44',
  },
  GRAY500: {
    color: '#888888',
    rgb: '136,136,136',
  },
  GRAY700: {
    color: '#CECECE',
    rgb: '206,206,206',
  },
  GRAY900: {
    color: '#E7E7E7',
    rgb: '231,231,231',
  },
  GRAY1000: {
    color: '#FFFFFF',
    rgb: '255,255,255',
  },
  YELLOW50: {
    color: '#F5CD00',
    rgb: '245,205,0',
  },
  YELLOW900: {
    color: '#FFF037',
    rgb: '255,240,55',
  },
  RED900: {
    color: '#FF385C',
    rgb: '255,56,92',
  },
  BLUE50: {
    color: '#0072F0',
    rgb: '0,114,240',
  },
  BLUE900: {
    color: '#32CDFF',
    rgb: '50,205,205',
  },
  ERROR: {
    color: '#EB4851',
    rgb: '235, 72, 81',
  },
  FANZA_BLUE900: {
    color: '#1B91D3',
    rgb: '27,145,211',
  },
  TRANSPARENT: 'transparent',
} as const;

export const FONT_SIZE = {
  XXS: 10,
  XS: 12,
  S: 14,
  M: 16,
  L: 20,
  XL: 30,
  XXL: 36,
} as const;

export const ICON_SIZE = {
  XS: {
    width: 12,
    height: 12,
  },
  S: {
    width: 14,
    height: 14,
  },
  M: {
    width: 16,
    height: 16,
  },
  L: {
    width: 20,
    height: 20,
  },
  XL: {
    width: 24,
    height: 24,
  },
  XXL: {
    width: 32,
    height: 32,
  },
  XXXL: {
    width: 48,
    height: 48,
  },
} as const;

export const FONT_SIZE_TV = {
  XXS: 24,
  XS: 30,
  S: 36,
  M: 42,
  L: 48,
  XL: 60,
  XXL: 102,
} as const;

export const ICON_SIZE_TV = {
  XS: {
    width: 24,
    height: 24,
  },
  S: {
    width: 32,
    height: 32,
  },
  M: {
    width: 40,
    height: 40,
  },
  L: {
    width: 48,
    height: 48,
  },
  XL: {
    width: 56,
    height: 56,
  },
  XXL: {
    width: 64,
    height: 64,
  },
  XXXL: {
    width: 72,
    height: 72,
  },
} as const;

export type ColorCodeType = keyof typeof COLOR_CODE;
export type ColorType = keyof typeof COLOR;
export type FontSizeType = keyof typeof FONT_SIZE;
export type IconSizeType = keyof typeof ICON_SIZE;

export type ColorCodeTypeValues = typeof COLOR_CODE[ColorCodeType];
