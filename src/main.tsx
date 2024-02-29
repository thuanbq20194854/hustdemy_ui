import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { App as AntdApp, ConfigProvider } from 'antd'

import './index.css'
import 'normalize.css'
import { Provider } from 'react-redux'
import { store } from './services/state/redux/store'
import LoadingProvider from './contexts/loading.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider>
          <AntdApp>
            <LoadingProvider>
              <App />
            </LoadingProvider>
          </AntdApp>
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
