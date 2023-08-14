import {
  getColorAction,
  getColorNeutral,
  getColorAlert,
  getFontFamily,
  getWeight,
  getSize,
  getLineHeight,
  getSpacing,
  getSquish,
  getStroke,
  getRadius
} from './getters';

import theme from './theme';

describe('Utility Functions', () => {
  test('getColorAction returns the correct color', () => {
    const color = getColorAction('medium', { theme });
    expect(color).toBe('#0070AB');
  });

  test('getColorAction returns the correct color given number', () => {
    const color = getColorAction(0, { theme });
    expect(color).toBe('#B9D7E8');
  });

  test('getColorNeutral returns the correct color', () => {
    const color = getColorNeutral('dark', { theme });
    expect(color).toBe('#202020');
  });

  describe('getColorNeutral function', () => {
    test('returns the correct color given number', () => {
      const color = getColorNeutral(1, { theme });
      expect(color).toBe('#FFFFFF');
    });
  });

  test('getColorAlert returns the correct color', () => {
    const color = getColorAlert('info', { theme });
    expect(color).toBe('#3255E2');
  });

  describe('getColorAlert function', () => {
    test('returns the correct color given number', () => {
      const color = getColorAlert(0, { theme });
      expect(color).toBe('#3255E2');
    });
  });

  test('getFontFamily returns the correct font family', () => {
    const fontFamily = getFontFamily('default', { theme });
    expect(fontFamily).toBe('Roboto, sans-serif');
  });

  test('getWeight returns the correct font weight', () => {
    const weight = getWeight('bold', { theme });
    expect(weight).toBe(700);
  });

  describe('getWeight function', () => {
    test('returns the correct font weight given number', () => {
      const weight = getWeight(0, { theme });
      expect(weight).toBe(400);
    });
  });

  test('getSize returns the correct font size', () => {
    const size = getSize('sm', { theme });
    expect(size).toBe('24px');
  });

  describe('getSize function', () => {
    test('returns the correct font size given number', () => {
      const size = getSize(0, { theme });
      expect(size).toBe('12px');
    });
  });

  test('getLineHeight returns the correct line height', () => {
    const lineHeight = getLineHeight('loose', { theme });
    expect(lineHeight).toBe(1.7);
  });

  describe('getLineHeight function', () => {
    test('returns the correct line height given number', () => {
      const lineHeight = getLineHeight(0, { theme });
      expect(lineHeight).toBe(1);
    });
  });

  test('getSpacing returns the correct spacing', () => {
    const spacing = getSpacing('lg', { theme });
    expect(spacing).toBe('56px');
  });

  describe('getSpacing function', () => {
    test('returns the correct spacing given number', () => {
      const spacing = getSpacing(0, { theme });
      expect(spacing).toBe('4px');
    });
  });

  test('getSquish returns the correct spacing', () => {
    const squish = getSquish('md', { theme });
    expect(squish).toBe('16px 32px');
  });

  describe('getSquish function', () => {
    test('returns the correct squish value given number', () => {
      const squish = getSquish(0, { theme });
      expect(squish).toBe('4px 8px');
    });
  });

  test('getStroke returns the correct stroke width', () => {
    const stroke = getStroke('300', { theme });
    expect(stroke).toBe('4px solid');
  });

  describe('getStroke function', () => {
    test('returns the correct stroke value given number', () => {
      const stroke = getStroke(0, { theme });
      expect(stroke).toBe('1px solid');
    });
  });

  test('getRadius returns the correct radius value', () => {
    const radius = getRadius('400', { theme });
    expect(radius).toBe('16px');
  });

  describe('getRadius function', () => {
    test('returns the correct radius value given number', () => {
      const radius = getRadius(0, { theme });
      expect(radius).toBe('1px');
    });
  });
});
