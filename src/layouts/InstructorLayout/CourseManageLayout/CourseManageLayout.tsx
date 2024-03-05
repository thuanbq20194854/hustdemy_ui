import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Outlet } from 'react-router-dom'

import styles from './CourseManageLayout.module.scss'
import { IoSettingsOutline } from 'react-icons/io5'

function CourseManageLayout() {
  return (
    <div className={styles.layoutWrapper}>
      <div className='headerWrapper'>
        <div className='backBtn'>
          <IoIosArrowBack />
          <span>Back to courses</span>
        </div>
        <div className='courseTitle'>Learn HTML in 30seconds</div>
        <div className='courseStatus'>Draft</div>

        <button className='saveBtn'>
          <span>Save</span>
        </button>

        <div className='settingContainer'>
          <IoSettingsOutline />
        </div>
      </div>

      <div className='appContainer'>
        <div className='sidebarWrapper'></div>

        <div className='mainContentWrapper'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default CourseManageLayout
