import { Global } from "@emotion/react";

//use font of Uniswap
const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'SF Pro Display';
          src: url('/assets/fonts/SF-Pro-Display-Regular.woff') format('truetype');
        }
      `}
    />
  );
};

export default Fonts;
