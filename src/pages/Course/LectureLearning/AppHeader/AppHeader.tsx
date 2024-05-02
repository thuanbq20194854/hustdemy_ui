import { useBoolean } from '@/hooks/useBoolean'
import { Dropdown, Progress, Tooltip } from 'antd'
import { IoIosShareAlt, IoMdMore, IoMdStar } from 'react-icons/io'
import { IoStar } from 'react-icons/io5'
import { MdEdit, MdFolder, MdKeyboardArrowDown } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import RatingModal from './RatingModal'
import CustomTooltip from '@/components/CustomTooltip/CustomTooltip'

import styles from '../LectureLearning.module.scss'

function AppHeader() {
  const [openRating, setRatingCommand, handleOpenRatingModal, handleCloseRatingModal] = useBoolean()

  const items = [
    {
      key: '1',
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
          <IoMdStar size={16} className='downloadIcon' />

          <span className='ud-block-list-item-content ellipse-1-row'>Favorite this course</span>
        </button>
      )
    },
    {
      key: '2',
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
          <MdFolder size={16} className='downloadIcon' />

          <span className='ud-block-list-item-content ellipse-1-row'>Archive this course</span>
        </button>
      )
    },
    {
      key: '3',
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
          <MdEdit size={16} className='downloadIcon' />

          <span className='ud-block-list-item-content ellipse-1-row'>Ediy your rating</span>
        </button>
      )
    }
  ]
  return (
    <div className='pageHeader'>
      <div className='headerContent'>
        <header className='header'>
          <NavLink to='/' className='navLink'>
            <img
              src='	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
              alt=''
              width='91'
              height='34'
            />
          </NavLink>

          <div className='verticalDivider'></div>

          <div className='title'>
            <h1 className='courseTitle'>
              <NavLink className='titleNavLink' to='/course/123312312'>
                How to Create an Online Course: The Official Udemy Course
              </NavLink>
            </h1>
          </div>

          <button
            className='progressContainer ud-btn ud-btn-large ud-btn-ghost ud-text-sm'
            onClick={handleOpenRatingModal}
          >
            <IoStar size={20} color='rgb(106, 111, 115)' />

            <span className='text'>Leaving a rating</span>
          </button>

          <CustomTooltip
            title={<div className='ud-heading-sm'>7 of 30 complete.</div>}
            trigger={['click']}
            rootClassName={styles.pageHeader_rootTooltip}
          >
            <button className='progressContainer'>
              <Progress type='circle' showInfo={false} percent={75} size={35} className='antdProgress' />

              <span className='text'>Your progress</span>
              <MdKeyboardArrowDown size={20} className='ud-icon ud-icon-small downIcon' />
            </button>
          </CustomTooltip>

          <div className='menuOptions'>
            <button className='ud-btn ud-btn-medium ud-btn-white-outline ud-heading-sm'>
              <span>Share</span>
              <IoIosShareAlt size={15} />
            </button>
            <Dropdown rootClassName={styles.rootDropdown} menu={{ items }} placement='bottomRight' trigger={['click']}>
              <button className='ud-btn ud-btn-medium ud-btn-white-outline ud-heading-sm ud-btn-icon ud-btn-icon-medium'>
                <IoMdMore size={20} />
              </button>
            </Dropdown>
          </div>
        </header>
      </div>

      <RatingModal handleCloseModal={handleCloseRatingModal} open={openRating} />
    </div>
  )
}

export default AppHeader
