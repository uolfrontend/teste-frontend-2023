const theme = {
  color: {
    action: {
      lightest: '#B9D7E8',
      light: '#529EC6',
      medium: '#0070AB',
      dark: '#005582',
      darkest: '#004266'
    },
    neutral: {
      transparent: 'transparent',
      lightest: '#FFFFFF',
      light: '#ECECEC',
      'medium-04': '#CCCCCC',
      'medium-03': '#999999',
      'medium-02': '#666666',
      'medium-01': '#444444',
      dark: '#202020',
      darkest: '#000000'
    },
    alert: {
      info: '#3255E2',
      success: '#0A7C2F',
      attention: '#EBBC03',
      error: '#CC001B',
      'info-dark-theme': '#B7CCE3',
      'success-dark-theme': '#B5EAC6',
      'attention-dark-theme': '#FFDD96',
      'error-dark-theme': '#EFB4BA'
    }
  },
  font: {
    family: {
      default: 'Roboto'
    },
    weight: {
      default: 400,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    size: {
      nano: 12,
      micro: 14,
      base: 16,
      xxs: 18,
      xs: 20,
      sm: 24,
      md: 32,
      lg: 40,
      xl: 48,
      xxl: 56,
      xxxl: 72,
      giant: 88,
      huge: 104
    }
  },
  'line-height': {
    tightest: 1,
    tight: 1.3,
    medium: 1.5,
    loose: 1.7
  },
  spacing: {
    nano: 4,
    micro: 8,
    xxxs: 12,
    xxs: 16,
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
    xxl: 120,
    giant: 160,
    huge: 200
  },
  'spacing-squish': {
    nano: 4,
    micro: 8,
    sm: 12,
    md: 16,
    lg: 24
  },
  stroke: {
    '100': 1,
    '200': 2,
    '300': 4,
    '400': 6,
    '500': 8
  },
  radius: {
    '100': 1,
    '200': 2,
    '300': 4,
    '400': 16,
    pill: 2000
  }
};

// estrutura do objeto theme
export type Theme = typeof theme;

// props que vão ser inseridas pelo styled-components
export type ThemeProps = { theme?: Theme };

export type ColorAction = {
  lightest: string;
  light: string;
  medium: string;
  dark: string;
  darkest: string;
};

export type ColorNeutral = {
  transparent: string;
  lightest: string;
  light: string;
  'medium-04': string;
  'medium-03': string;
  'medium-02': string;
  'medium-01': string;
  dark: string;
  darkest: string;
};

export type ColorAlert = {
  info: string;
  success: string;
  attention: string;
  error: string;
  'info-dark-theme': string;
  'success-dark-theme': string;
  'attention-dark-theme': string;
  'error-dark-theme': string;
};

export type FontWeight = {
  default: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

export type FontSize = {
  nano: number;
  micro: number;
  base: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  giant: number;
  huge: number;
};

export type LineHeight = {
  tightest: number;
  tight: number;
  medium: number;
  loose: number;
};

export type Spacing = {
  nano: number;
  micro: number;
  xxxs: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  giant: number;
  huge: number;
};

export type SpacingSquish = {
  nano: number;
  micro: number;
  sm: number;
  md: number;
  lg: number;
};

export type Stroke = {
  '100': number;
  '200': number;
  '300': number;
  '400': number;
  '500': number;
};

export type Radius = {
  '100': number;
  '200': number;
  '300': number;
  '400': number;
  pill: number;
};

export default theme;
