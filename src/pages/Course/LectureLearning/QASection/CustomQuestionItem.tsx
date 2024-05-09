import { QuestionLecture } from '@/models/course'
import { Dropdown } from 'antd'
import dayjs from 'dayjs'
import { IoMdMore } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

import styles from '../LectureLearning.module.scss'
import { TbFlag } from 'react-icons/tb'

interface IProps {
  question: QuestionLecture
  className?: string
}

function CustomQuestionItem({ question, className }: IProps) {
  const dropDownItems = [
    {
      key: 1,
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
          <TbFlag size={16} className='downloadIcon' />

          <span className='ud-block-list-item-content ellipse-1-row'>Report abuse</span>
        </button>
      )
    }
  ]
  return (
    <div className={`customQuestionItemWrapper ${className}`}>
      <div className='avatarWrapper'>
        <img src={question.user.avatar ? question.user.avatar : ''} alt='' />
      </div>

      <div className='infoContainer'>
        <div className='questionLinkRow'>
          <div className='textContent ud-heading-md'>
            <h4 className='ellipse-1-row'>{question.title}</h4>
          </div>

          <div className='responseNumContainer'>
            <Dropdown trigger={['click']} menu={{ items: dropDownItems }} rootClassName={styles.rootDropdown}>
              <button className='upvoteContainer ud-btn ud-btn-large ud-btn-link ud-heading-md'>
                <IoMdMore size={24} style={{ marginLeft: '4px' }} />
              </button>
            </Dropdown>
          </div>
        </div>

        <div className='metaData ud-text-xs ud-text-with-links'>
          <NavLink to='/user/123123'>
            <span>{question.user.name}</span>
          </NavLink>

          <span>{`Lecture ${question.lecture_id}`}</span>

          <span>{dayjs(question.updated_at).format('DD/MMM/YYYY HH:MM')}</span>
        </div>

        <div className='bodyContent ud-text-sm ellipse-1-row'>{question.description}</div>
      </div>
    </div>
  )
}

export default CustomQuestionItem
