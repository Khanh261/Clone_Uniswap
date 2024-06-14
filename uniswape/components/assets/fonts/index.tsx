import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Basel';
        src: url('/assets/fonts/Basel-Regular.woff') format('woff');
      }
    `}
  />
);

export default Fonts;
