import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './MainLayout.module.scss'
import Header from './Header'
import Footer from '../components/Footer'

interface IProps {
  children?: React.ReactNode
}

function MainLayout(props: IProps) {
  const { children } = props
  return (
    <div className={styles.mainLayout}>
      {/* Header */}

      <Header />

      {children}

      <div className={styles.contentWrapper}>
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
