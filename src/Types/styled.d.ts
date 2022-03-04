import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gray: string;
      error: string;
      warning: string;
      info: string;
      success: string;
      background: string;
      white: string;
      text: string;
    };
    spacing: {
      none: string;
      extraTight: string;
      tight: string;
      snug: string;
      regular: string;
      loose: string;
      extraLoose: string;
    };
    borderRadius: {
      none: string;
      extraSmall: string;
      small: string;
      regular: string;
      large: string;
      extraLarge: string;
    };
    breakpoints: {
      mobile: number;
      phablet: number;
      tablet: number;
      desktop: number;
      hd: number;
    };
    font: {
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      };
      weights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
    shadow: {
      shadow1: string;
      shadow2: string;
    };
    transition: {
      default: string;
      slow: string;
    };
  }
}
