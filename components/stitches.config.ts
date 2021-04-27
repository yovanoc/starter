import { createCss } from "@stitches/react";

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  config,
} = createCss({
  theme: {
    colors: {
      aGold: "#c0a172",
      aDarkBlue: "#141e37",
      aLightBlue: "#32c8ff",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    fonts: {
      main: "DharmaGothic, Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {},
  utils: {},
  prefix: "",
  // insertionMethod: "prepend",
  // themeMap: {},
});

export const globalStyles = global({
  "@font-face": {
    fontFamily: "DharmaGothic",
    src: 'local("DharmaGothic"), url("fonts/dharma_gothic.ttf")',
  },
  "*": {
    fontFamily: "$main",
    fontSize: "$3",
    margin: 0,
    padding: 0,
  },
  h1: {
    color: "$aGold",
    fontFamily: "$mono",
  },
});
