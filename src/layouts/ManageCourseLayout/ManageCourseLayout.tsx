import React from 'react'

import styles from './ManageCourseLayout.module.scss'
import { IoIosArrowBack } from 'react-icons/io'

function ManageCourseLayout() {
  return (
    <div className={styles.layoutWrapper}>
      <div className='headerWrapper'>
        <div className='backBtn'>
          <IoIosArrowBack />
          <span>Back to courses</span>
        </div>

        <div className='courseTitle'>Learn HTML in 30seconds</div>
      </div>

      <div className='appContainer'>
        <div className='sidebarWrapper'></div>

        <div className='mainContentWrapper'></div>
      </div>
    </div>
  )
}

export default ManageCourseLayout
