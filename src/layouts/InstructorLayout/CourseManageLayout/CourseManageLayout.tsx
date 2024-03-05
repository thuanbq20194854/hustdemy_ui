import React from 'react'
import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io'
import { NavLink, Outlet } from 'react-router-dom'

import styles from './CourseManageLayout.module.scss'
import { IoCheckmarkCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import Footer from '../../components/Footer'

function CourseManageLayout() {
  return (
    <div className={styles.layoutWrapper}>
      <div className='headerWrapper'>
        <div className='backBtn ud-btn ud-btn-small ud-btn-ghost ud-text-md'>
          <div className='iconContainer'>
            <IoIosArrowBack />
          </div>
          <span>Back to courses</span>
        </div>

        <div className='restPart'>
          <div className='infoPart'>
            <div className='courseTitle ud-heading-lg'>Learn HTML in minute </div>
            <div className='courseStatus ud-badge ud-heading-xs'>Draft</div>
            <div className='courseUploadedTime'>0min of video content uploaded</div>
          </div>

          <div className='actionPart'>
            <button className='saveBtn ud-btn ud-btn-small ud-btn-white-solid ud-heading-sm disabledBtn'>
              <span>Save</span>
            </button>

            <div className='settingContainer'>
              <IoSettingsOutline fill='#fff' stroke='#fff' />
            </div>
          </div>
        </div>
      </div>

      <div className='appContainer'>
        <div className='sidebarWrapper'>
          <ul className='sidebarWrapper-ul'>
            <li className='sidebarWrapper-li'>
              <div className='sectionTitle ud-heading-md'>Plan your course</div>
              <ul>
                <li className='sideNavItem'>
                  <NavLink to='/instructor/course/:courseId/manage/goals' className='navLinkCss'>
                    <div className='checkIconContainer'>
                      <IoMdCheckmark />
                    </div>
                    <span className='linkTitle'>Intended learners</span>
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className='sidebarWrapper-li'>
              <div className='sectionTitle ud-heading-md'>Create your content</div>
              <ul>
                <li className='sideNavItem'>
                  <NavLink to='/instructor/course/:courseId/manage/curriculum' className='navLinkCss'>
                    <div className='checkIconContainer'>
                      <IoMdCheckmark />
                    </div>
                    <span className='linkTitle'>Curriculum</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='sidebarWrapper-li'>
              <div className='sectionTitle ud-heading-md'>Publish your course</div>
              <ul>
                <li className='sideNavItem'>
                  <NavLink to='/instructor/course/:courseId/manage/curriculum' className='navLinkCss'>
                    <div className='checkIconContainer'>
                      <IoMdCheckmark />
                    </div>
                    <span className='linkTitle'>Cours Landing Page</span>
                  </NavLink>
                </li>
                <li className='sideNavItem'>
                  <NavLink to='/instructor/course/:courseId/manage/curriculum' className='navLinkCss'>
                    <div className='checkIconContainer'>
                      <IoMdCheckmark />
                    </div>
                    <span className='linkTitle'>Pricing</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className='mainContentWrapper'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CourseManageLayout
