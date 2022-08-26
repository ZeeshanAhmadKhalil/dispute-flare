import store from '@Store/index'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp(props) {

  const {
    Component,
    pageProps
  } = props


  let theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#B2E323',
        contrastText: "#fff"
      },
      secondary: {
        main: '#00428E',
        contrastText: "#fff"
      },
      warning: {
        main: '#EBA51C',
        contrastText: "#fff"
      },
      info: {
        main: '#D14CC3',
        contrastText: "#fff"
      },
      infoLight: {
        main: '#A182D6',
        contrastText: "#fff"
      },
      text: {
        main: '#fff',
        contrastText: "#000"
      },
    },
  });

  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.secondary.main,
      },
    },
  });

  let persistor = persistStore(store);

  return (
    <ThemeProvider theme={theme}>
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
