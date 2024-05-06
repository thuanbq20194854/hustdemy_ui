import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { App as AntdApp, ConfigProvider } from 'antd'

import './index.css'
import 'normalize.css'
import { Provider } from 'react-redux'
import { store, persistor } from './services/state/redux/store'
import LoadingProvider from './contexts/loading.context'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ConfigProvider>
          <AntdApp>
            <LoadingProvider>
              <GoogleOAuthProvider clientId='232710358490-l7ptj5cl94a2igsib17rcn3vj3bkoq1p.apps.googleusercontent.com'>
                <App />
              </GoogleOAuthProvider>
            </LoadingProvider>
          </AntdApp>
        </ConfigProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
