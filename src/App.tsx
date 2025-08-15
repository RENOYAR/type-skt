import {ThemeProvider} from 'styled-components';
import theme from './assets/css/theme';
import Router from './routes';
import GlobalStyle from './assets/css/globalStyle';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
