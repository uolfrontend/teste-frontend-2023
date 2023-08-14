import defaultTheme, {
  ThemeProps,
  ColorAction,
  ColorNeutral,
  ColorAlert,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
  SpacingSquish,
  Stroke,
  Radius
} from './theme';

import theme from './theme';

// função utilitária para servir backup de backup por meio de parâmetro backup
function getTheme(props: ThemeProps) {
  return props.theme && props.theme.color ? props.theme : defaultTheme;
}

export function getColorAction(
  tokenKey: keyof ColorAction | number,
  props: any
) {
  const colorAction = theme.color.action;
  if (typeof tokenKey === 'number') {
    return (
      Object.values(colorAction)[tokenKey] ||
      getTheme(props).color.action.medium
    );
  }
  return colorAction[tokenKey] || getTheme(props).color.action.medium;
}

export function getColorNeutral(
  tokenKey: keyof ColorNeutral | number,
  props: any
) {
  const colorNeutral = theme.color.neutral;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(colorNeutral)[tokenKey] ||
      getTheme(props).color.neutral['medium-02']
    );
  }

  return colorNeutral[tokenKey] || getTheme(props).color.neutral['medium-02'];
}

export function getColorAlert(tokenKey: keyof ColorAlert | number, props: any) {
  const colorAlert = theme.color.alert;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(colorAlert)[tokenKey] || getTheme(props).color.alert.info
    );
  }

  return colorAlert[tokenKey] || getTheme(props).color.alert.info;
}

export function getFontFamily(
  tokenKey: keyof typeof theme.font.family,
  props: any
) {
  const fontFamily = theme.font.family;

  return (
    fontFamily[tokenKey] + ', sans-serif' ||
    getTheme(props).font.family.default + ', sans-serif'
  );
}

export function getWeight(tokenKey: keyof FontWeight | number, props: any) {
  const fontWeight = theme.font.weight;

  if (typeof tokenKey === 'number') {
    return Object.values(fontWeight)[tokenKey] || fontWeight.default;
  }

  return fontWeight[tokenKey] || getTheme(props).font.weight.default;
}

export function getSize(tokenKey: keyof FontSize | number, props: any) {
  const fontSize = theme.font.size;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(fontSize)[tokenKey] + 'px' ||
      getTheme(props).font.size.base + 'px'
    );
  }

  return fontSize[tokenKey] + 'px' || getTheme(props).font.size.base + 'px';
}

export function getLineHeight(tokenKey: keyof LineHeight | number, props: any) {
  const lineHeight = theme['line-height'];

  if (typeof tokenKey === 'number') {
    return (
      Object.values(lineHeight)[tokenKey] ||
      getTheme(props)['line-height'].medium
    );
  }

  return lineHeight[tokenKey] || getTheme(props)['line-height'].medium;
}

export function getSpacing(tokenKey: keyof Spacing | number, props: any) {
  const spacing = theme.spacing;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(spacing)[tokenKey] + 'px' ||
      getTheme(props).spacing['md'] + 'px'
    );
  }

  return spacing[tokenKey] + 'px' || getTheme(props).spacing['md'] + 'px';
}

export function getSquish(tokenKey: keyof SpacingSquish | number, props: any) {
  const spacingSquish = theme['spacing-squish'];

  if (typeof tokenKey === 'number') {
    const value = Object.values(spacingSquish)[tokenKey] || spacingSquish['md'];
    return `${value}px ${value * 2}px`;
  }

  const value = spacingSquish[tokenKey] || spacingSquish['md'];
  return `${value}px ${value * 2}px`;
}

export function getStroke(tokenKey: keyof Stroke | number, props: any) {
  const stroke = theme.stroke;

  if (typeof tokenKey === 'number') {
    const value = Object.values(stroke)[tokenKey] || stroke['200'];
    return `${value}px solid`;
  }

  const value = stroke[tokenKey] || stroke['200'];
  return `${value}px solid`;
}

export function getRadius(tokenKey: keyof Radius | number, props: any) {
  const radius = theme.radius;

  if (typeof tokenKey === 'number') {
    const value = Object.values(radius)[tokenKey] || radius['200'];
    return `${value}px`;
  }

  const value = radius[tokenKey] || radius['200'];
  return `${value}px`;
}
