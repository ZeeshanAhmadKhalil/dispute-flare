import { darkTheme } from '@Config/theme';
import { ThemeProvider } from '@mui/material/styles';
import store from '@Store/index';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/custom.css';
import '../styles/globals.css';
import {
  Toaster
} from 'react-hot-toast';

function MyApp(props) {

  const {
    Component,
    pageProps
  } = props

  let persistor = persistStore(store);

  return (
    <ThemeProvider theme={darkTheme}>
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </ThemeProvider>
  )
}

export default MyApp
