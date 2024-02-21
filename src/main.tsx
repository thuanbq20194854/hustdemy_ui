import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { App as AntdApp, ConfigProvider } from 'antd'

import './index.css'
import 'normalize.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          components: {
            Tooltip: {
              colorBorder: '#d1d7dc'
            }
          }
        }}
      >
        <AntdApp>
          <App />
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
