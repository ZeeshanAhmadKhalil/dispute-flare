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
    typography: {
      fontFamily: 'Segoe UI Emoji'
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#B2E323',
        contrastText: "#fff",
        hovered: "#7C9E18"
      },
      secondary: {
        main: '#00428E',
        contrastText: "#fff",
        hovered: "#002E63",
      },
      warning: {
        main: '#EBA51C',
        contrastText: "#fff",
        hovered: "#A47313",
      },
      pink: {
        main: '#D14CC3',
        contrastText: "#fff",
        hovered: '#b229a2',
      },
      lightPink: {
        main: '#A182D6',
        contrastText: "#fff",
        hovered: '#8d6ac9',
      },
      text: {
        main: '#fff',
        contrastText: "#000",
        hovered: '#fff1',
      },
      transWhite: {
        main: "#ffffff4c",
      },
      borders: {
        main: "#9EB6D3"
      }
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
