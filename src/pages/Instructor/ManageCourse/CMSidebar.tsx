import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

import styles from './CMSidebar.module.scss'
import { courseManageContentTabs } from './constant/CourseManage'

interface IProps {
  courseId: string
  handleTabChange: (tabName: string) => void
}
function CMSidebar({ courseId, handleTabChange }: IProps) {
  return (
    <div className={styles.sidebarWrapper}>
      <ul className='sidebarWrapper-ul'>
        {courseManageContentTabs.map((contentTabItem) => (
          <li className='sidebarWrapper-li' key={contentTabItem.id}>
            <div className='sectionTitle ud-heading-md'>{contentTabItem.title}</div>
            <ul>
              {contentTabItem.children.map((tabItem) => (
                <li className='sideNavItem' key={tabItem.id}>
                  <NavLink
                    to={`/instructor/course/${courseId}/manage/${tabItem.tabPath}`}
                    className='navLinkCss'
                    onClick={() => handleTabChange(tabItem.tabPath)}
                  >
                    <div className='checkIconContainer'>
                      <IoMdCheckmark />
                    </div>
                    <span className='linkTitle'>{tabItem.tabName}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {/* <li className='sidebarWrapper-li'>
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
              <NavLink to='/instructor/course/:courseId/manage/basics' className='navLinkCss'>
                <div className='checkIconContainer'>
                  <IoMdCheckmark />
                </div>
                <span className='linkTitle'>Cours Landing Page</span>
              </NavLink>
            </li>
            <li className='sideNavItem'>
              <NavLink to='/instructor/course/:courseId/manage/pricing' className='navLinkCss'>
                <div className='checkIconContainer'>
                  <IoMdCheckmark />
                </div>
                <span className='linkTitle'>Pricing</span>
              </NavLink>
            </li>
          </ul>
        </li> */}
      </ul>

      <div className='submitBtnContainer'>
        <button className='ud-btn ud-btn-large ud-btn-brand ud-heading-md submitBtn'>Submit For Review</button>
      </div>
    </div>
  )
}

export default CMSidebar
