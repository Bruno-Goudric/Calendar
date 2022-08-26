import { createGlobalStyle } from 'styled-components';

import { colors } from './theme';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  background: ${colors.white};
  position: relative;
  min-height: 100%;
  font-feature-settings: 'kern';
}

body, input, button{
  font-size: 14px;
}

body, input, textarea, button, ul, li, a, b, p, span {
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

li {
  cursor: pointer;
}

button {
  cursor: pointer;
}
`;
