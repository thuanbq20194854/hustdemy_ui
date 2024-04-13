import React from 'react'

import styles from './InstructorCourses.module.scss'
import { IoIosSearch } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
import CustomTooltip from '../../../components/CustomTooltip/CustomTooltip'
import { NavLink } from 'react-router-dom'
import { ROUTER_PATH } from '../../../contants/router'

function InstructorCourses() {
  const renderSortMenu = () => (
    <div className='sortMenuContainer'>
      <ul className='menuList'>
        <button className='menuItem ud-btn ud-btn-ghost ud-text-sm'>
          <span>Newest</span>
        </button>
        <button className='menuItem ud-btn ud-btn-ghost ud-text-sm'>
          <span>Oldest</span>
        </button>
        <button className='menuItem ud-btn ud-btn-ghost ud-text-sm'>
          <span>A-Z</span>
        </button>
        <button className='menuItem ud-btn ud-btn-ghost ud-text-sm'>
          <span>Z-A</span>
        </button>
        <button className='menuItem ud-btn ud-btn-ghost ud-text-sm'>
          <span>Published First</span>
        </button>
        <button className='menuItem ud-btn ud-btn-ghost ud-text-sm'>
          <span>Unpublished First</span>
        </button>
      </ul>
    </div>
  )
  return (
    <div className={styles.instructorCoursePage}>
      <header className='pageHeader ud-heading-serif-xxl'>Courses</header>

      <div className='courseActionsWrapper'>
        <div className='searchContainer'>
          <form action=''>
            <input
              type='text'
              className='searchInput ud-text-input ud-text-input-large ud-text-md'
              placeholder='Search your courses'
            />

            <button className='searchBtn ud-btn ud-btn-large ud-btn-primary ud-heading-md ud-btn-icon ud-btn-icon-large'>
              <IoIosSearch />
            </button>
          </form>
        </div>

        <CustomTooltip
          title={renderSortMenu()}
          rootClassName={styles.rootClassnameSortBtn}
          placement='bottomLeft'
          trigger={'click'}
          arrow={false}
        >
          <div className='sortBtnContainer ud-btn ud-btn-large ud-btn-secondary ud-heading-md'>
            <span>Newest</span>
            <MdKeyboardArrowDown className='arrowIcon' />
          </div>
        </CustomTooltip>

        <button className='newCourseBtn ud-btn ud-btn-large ud-btn-brand ud-heading-md'>
          <span>New Course</span>
        </button>
      </div>

      <div className='courseListSection'>
        <div className='courseList'>
          <div className='courseCard'>
            <div className='imgContainer'>
              <img src='https://s.udemycdn.com/course/200_H/placeholder.jpg' alt='' />
            </div>

            <div className='mainContent'>
              <div className='editNavLinkOverlay'>
                <NavLink to={ROUTER_PATH.InstructorCourseManage} className='editNav ud-heading-lg'>
                  <span>Edit / Manage Course</span>
                </NavLink>
              </div>
              <div className='details'>
                <div className='courseTitle ud-heading-md'>Learn On Tiktok And Business</div>

                <div className='courseStatus ud-text-xs'>
                  <span className='draft'>
                    <b>Draft</b>
                  </span>
                  <span className='public'>Public</span>
                </div>
              </div>
              <div className='processPart'>
                <span className='ud-heading-md'>Finish your course</span>

                <div className='processBar'>
                  <div className='actualProcess' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorCourses
