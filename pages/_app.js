import store from '@Store/index'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import myTheme from '@Config/theme';

function MyApp(props) {

  const {
    Component,
    pageProps
  } = props

  let persistor = persistStore(store);

  return (
    <ThemeProvider theme={myTheme}>
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
