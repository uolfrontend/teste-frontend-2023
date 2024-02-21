import 'styled-components';

type ColorAction = {
  colorActionLightest: string;
  colorActionLight: string;
  colorActionMedium: string;
  colorActionDark: string;
  colorActionDarkest: string;
};

type ColorNeutral = {
  colorNeutralLightest: string;
  colorNeutralLight: string;
  colorNeutraMedium04: string;
  colorNeutraMedium03: string;
  colorNeutraMedium02: string;
  colorNeutraMedium01: string;
  colorNeutraDark: string;
  colorNeutraDarkest: string;
};

type ColorAlert = {
  colorAlertInfo: string;
  colorAlertSuccess: string;
  colorAlertAttention: string;
  colorAlertError: string;
  colorAlertInfoDark: string;
  colorAlertSuccessDark: string;
  colorAlertAttentionDark: string;
  colorAlertErrorDark: string;
};

type FontFamily = {
  default: string;
};

type FontWeight = {
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

type FontSize = {
  nano: string;
  micro: string;
  base: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  giant: string;
  huge: string;
};

type LineHeight = {
  tightest: number;
  tight: number;
  medium: number;
  loose: number;
};

type Spacing = {
  nano: string;
  micro: string;
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  giant: string;
  huge: string;
};

type InnerPadding = {
  squishNano: string;
  squishMicro: string;
  squishSm: string;
  squishMd: string;
  squishLg: string;
};

type linesEdges = {
  stroke100: string;
  stroke200: string;
  stroke300: string;
  stroke400: string;
  stroke500: string;
  radius100: string;
  radius200: string;
  radius300: string;
  radius400: string;
  radiusPill: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      action: ColorAction;
      neutral: ColorNeutral;
      alert: ColorAlert;
    };
    fonts: {
      family: string;
      weight: FontWeight;
      size: FontSize;
      lineHeight: LineHeight;
    };
    spacing: Spacing;
    innerPadding: InnerPadding;
    linesEdges: linesEdges;
  }
}
