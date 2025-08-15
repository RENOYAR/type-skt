import {createGlobalStyle} from 'styled-components';
import '../fonts/pretendard/style.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    min-height: 100%;
  }
  html, body {
    font-size: 16px;
    font-family: 'Pretendard', '-apple-system', 'BlinkMacSystemFont', system-ui, 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 400;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    word-break: break-all;
    -webkit-overflow-scrolling: touch
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Pretendard', '-apple-system', 'BlinkMacSystemFont', system-ui, 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button, input, select, table, textarea {
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    font-weight: inherit
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit
  }
  textarea {
    border: 0;
    word-break: keep-all;
    word-wrap: break-word
  }
  button, label, a {
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
  button, input {
    border-radius: 0;
    border: 0;
    background-color: unset
  }
  input, select, textarea, button {
    outline: none;
  }
  /* scrollbar custom */

  /* 스크롤바 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* 스크롤바 막대 */
  ::-webkit-scrollbar-thumb {
    background: #CACCD7;
    border-radius: 100px;
  }

  /* 스크롤바 트랙 */
  ::-webkit-scrollbar-track {
  }

   /* 스크롤바 hidden */
   .scrollHidden {
    overflow: hidden;
   }
  /* common */
  .blind-text {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }
  /* react-select */
  div.react-select__menu-portal {
    z-index: 900;
  
    .react-select__menu {
      font-size: 14px;
      box-shadow: 0 6px 10px #0000000d;
      border: 1px solid #caccd7;
      padding: 8px;
      z-index: 20;
    }
    .react-select__option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 36px;
      padding: 8px 6px 8px 9px;
      border-radius: 4px;

      label {
        flex: 1;
        font-size: 14px;
        border-radius: 6px;
        line-height: 36px;
        color: #434860;
        font-weight: 400;
        padding-left: 9px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }

      label[for='checkbox-*'] {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
    .react-select__option--is-focused {
      background-color: #f8f9fb;
    }
    .react-select__option--is-selected {
      background-color: transparent !important;
      font-weight: 500;
      color: #455dd7;
    }
  }

  input:-webkit-autofill { 
    -webkit-box-shadow: 0 0 0 30px #fff inset ;
    -webkit-text-fill-color: #434860; 
  }
`;

export default GlobalStyle;
