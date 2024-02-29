import React from 'react'

import styles from './LazyLoading.module.scss'
import { Spin } from 'antd'
function LazyLoading() {
  return (
    <div className={styles.loadingWrapper}>
      <Spin />
    </div>
  )
}

export default LazyLoading
