import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    action: {
      colorActionLightest: '#B9D7E8',
      colorActionLight: '#529EC6',
      colorActionMedium: '#0070AB',
      colorActionDark: '#005582',
      colorActionDarkest: '#004266'
    },
    neutral: {
      colorNeutralLightest: '#FFFFFF',
      colorNeutralLight: '#ECECEC',
      colorNeutraMedium04: '#CCCCCC',
      colorNeutraMedium03: '#999999',
      colorNeutraMedium02: '#666666',
      colorNeutraMedium01: '#444444',
      colorNeutraDark: '#202020',
      colorNeutraDarkest: '#000000'
    },
    alert: {
      colorAlertInfo: '#3255E2',
      colorAlertSuccess: '#0A7C2F',
      colorAlertAttention: '#EBBC03',
      colorAlertError: '#CC001B',
      colorAlertInfoDark: '#B7CCE3',
      colorAlertSuccessDark: '#B5EAC6',
      colorAlertAttentionDark: '#FFDD96',
      colorAlertErrorDark: '#EFB4BA'
    }
  },
  fonts: {
    family: 'Roboto, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    size: {
      nano: '0.75rem',
      micro: '0.875rem',
      base: '1rem',
      xxs: '1.125rem',
      xs: '1.25rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '3rem',
      xxl: '3.5rem',
      xxxl: '4.5rem',
      giant: '5.5rem',
      huge: '6.5rem'
    },
    lineHeight: {
      tightest: 1,
      tight: 1.3,
      medium: 1.5,
      loose: 1.7
    }
  },
  spacing: {
    nano: '0.25rem',
    micro: '0.5rem',
    xxxs: '0.75rem',
    xxs: '1rem',
    xs: '1.5rem',
    sm: '2rem',
    md: '2.5rem',
    lg: '3.5rem',
    xl: '5rem',
    xxl: '7.5rem',
    giant: '10rem',
    huge: '12.5rem'
  },
  innerPadding: {
    squishNano: '0.25rem 0.5rem',
    squishMicro: '0.5rem 1rem',
    squishSm: '0.75rem 1.5rem',
    squishMd: '1rem 2rem',
    squishLg: '1.5rem 3rem'
  },
  linesEdges: {
    stroke100: '0.0625rem solid',
    stroke200: '0.125rem solid',
    stroke300: '0.25rem solid',
    stroke400: '0.375rem solid',
    stroke500: '0.5rem solid',
    radius100: '0.0625rem',
    radius200: '0.125rem',
    radius300: '0.25rem',
    radius400: '1rem',
    radiusPill: '50%'
  }
};
