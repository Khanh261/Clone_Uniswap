import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'sf-pro-display';
        src: url('/assets/fonts/components/assets/fonts/SF-Pro-Display-Regular.woff') format('woff');
      }
    `}
  />
);

export default Fonts;
