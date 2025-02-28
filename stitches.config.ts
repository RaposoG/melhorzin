import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      yellow: '#ffff80',
      pink: '#ff80bf',
      purple: '#9580ff',
      red: '#ed4337',
      orange: '#ffca80',
      green: '#8aff80',
      cyan: '#80ffea',
      blue: '#3378ff',
      primary: '#f2f2f2',
      secondary: '#8f9ba8',
      background: '#08070b',
      bgscroll: '#151413',
      hover: '#212024',
      command: 'rgba(255, 255, 255, 0.05)',
      linkedin: '#0077b5',
      instagram: '#e1306c',
      github: '#777777',
      //dev colors
      legs: '#000',
      legsin: '#212121',
      notebook: '#292A2D',
      milogo: '#eee'
    },
    fonts: {
      body: 'Biotif, sans-serif',
      code: 'Fira Code, monospace',
      heading: 'Neuzeit Grotesk Bold, sans-serif'
    },
    space: {
      navHeightDesktop: '3.75rem',
      navHeightMobile: '6.875rem'
    },
    transitions: {
      duration: '0.2s'
    },
    radii: {
      borderRadius: '0.5rem'
    }
  },
  media: {
    bp0: '(max-width: 425px)',
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 860px)',
    bp3: '(max-width: 860px)',
    bp4: '(max-width: 780px)',
    bp5: '(max-width: 1024px)',
    bp6: '(min-width: 1024px)'
  },
  utils: {
    size: (value: string) => ({
      width: value,
      height: value
    })
  }
});

export const darkTheme = createTheme('dark', {
  colors: {
    yellow: '#ffff80',
    pink: '#ff80bf',
    purple: '#9580ff',
    red: '#ed4337',
    orange: '#ffca80',
    green: '#8aff80',
    cyan: '#80ffea',
    blue: '#3378ff',
    primary: '#0d0d0d',
    secondary: '#706457',
    background: '#f7f8f4',
    bgscroll: '#151413',
    hover: '#dedfdb',
    command: 'rgba(0, 0, 0, 0.05)',
    linkedin: '#0077b5',
    instagram: '#e1306c',
    github: '#777777',
    //dev colors
    legs: '#ccc',
    legsin: '#aaa',
    notebook: '#c2c2c2',
    milogo: '#111'
  }
});

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body'
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    border: 0
  },
  '::-webkit-scrollbar': {
    width: '0.375rem'
  },
  '::-webkit-scrollbar-track': {
    background: '$bgscroll'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$primary',
    borderRadius: '10px',
    border: '10px solid $primary'
  },
  kbd: {
    color: '$background',
    background: '$secondary',
    padding: '0.0625rem 0.375rem',
    borderRadius: '0.25rem',
    transition: 'background $duration ease-in-out',
    fontFamily: '$code',
    fontSize: '0.875rem'
  },
  svg: {
    width: '2rem',
    height: '2rem'
  },
  figure: {
    margin: 0
  },
  twitterwidget: {
    margin: '0 auto'
  },
  code: {
    background: '#151417',
    borderRadius: '$borderRadius',
    color: '$primary',
    fontFamily: '$code',
    fontSize: '0.9375rem'
  },
  ':not(pre) > code': {
    padding: '0.25rem'
  },
  h1: {
    fontFamily: '$heading',
    fontSize: '3rem',
    lineHeight: '3.125rem',
    margin: '0 0 0.1rem',
    color: '$primary'
  },
  h2: {
    color: '$primary',
    margin: '3.75rem 0 0',
    fontSize: '1.5rem'
  },
  'h3, h3 a': {
    color: '$primary',
    fontSize: '1.125rem',
    margin: '1.25rem 0 0'
  },
  ul: {
    margin: 0
  },
  img: {
    borderRadius: '0.5rem',
    minWidth: '100%',
    maxWidth: '100%'
  },
  p: {
    margin: '1.25rem 0',
    color: '$secondary'
  },
  strong: {
    color: '$primary',
    fontWeight: 500
  },
  blockquote: {
    borderLeft: '0.25rem solid $hover',
    color: '$secondary',
    fontStyle: 'italic',
    margin: '0',
    paddingLeft: '1.25rem'
  },
  a: {
    borderBottom: '1px solid $primary',
    color: '$primary',
    textDecoration: 'none',
    transition: 'opacity $duration ease-in-out'
  },
  'a:hover, a:focus': {
    opacity: '0.8'
  },
  '@font-face': [
    {
      fontFamily: 'Neuzeit Grotesk Bold',
      src: `url("/static/font/NeuzeitGrotesk-Bold.woff2") format("woff2"),
        url("/static/font/NeuzeitGrotesk-Bold.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Fira Code',
      src: `url("/static/font/FiraCode-Regular.woff2") format("woff2"),
        url("/static/font/FiraCode-Regular.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Bold.woff2") format("woff2"),
        url("/static/font/Biotif-Bold.woff") format("woff")`,
      fontWeight: 'bold',
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Book.woff2") format("woff2"),
        url("/static/font/Biotif-Book.woff") format("woff")`,
      fontWeight: 500,
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-Regular.woff2") format("woff2"),
        url("/static/font/Biotif-Regular.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Biotif',
      src: `url("/static/font/Biotif-RegularItalic.woff2") format("woff2"),
        url("/static/font/Biotif-RegularItalic.woff") format("woff")`,
      fontWeight: 'normal',
      fontStyle: 'italic'
    }
  ]
});

globalStyles();
