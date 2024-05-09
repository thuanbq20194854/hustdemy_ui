import { AnswerLecture } from '@/models/course'
import { Dropdown } from 'antd'
import dayjs from 'dayjs'
import { IoMdChatboxes, IoMdMore } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

import styles from '../LectureLearning.module.scss'
import { TbFlag } from 'react-icons/tb'

interface IProps {
  answerItem: AnswerLecture
}

function AnswerItem({ answerItem }: IProps) {
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
    <div className='answerItemWrapper'>
      <div className='avatarWrapper'>
        <img src={answerItem.user.avatar ? answerItem.user.avatar : ''} alt='' />
      </div>

      <div className='infoContainer'>
        <div className='answerItemLinkRow'>
          <h4 className='ellipse-1-row ud-text-with-links userName' style={{ marginBottom: '4px' }}>
            <NavLink to={`user/${answerItem.user.id}`}>{answerItem.user.name}</NavLink>
          </h4>

          <Dropdown trigger={['click']} menu={{ items: dropDownItems }} rootClassName={styles.rootDropdown}>
            <button className='ud-btn ud-btn-large ud-btn-link ud-heading-md moreBtn'>
              <IoMdMore size={24} style={{ marginLeft: '4px' }} />
            </button>
          </Dropdown>
        </div>

        <div className='metaData ud-heading-md'>
          <div className='ud-text-xs'>{dayjs(answerItem.updated_at).format('DD/MMM/YYYY HH:MM')}</div>
        </div>

        <div className='bodyContent ud-text-sm ellipse-1-row'>{answerItem.answer}</div>
      </div>
    </div>
  )
}

export default AnswerItem
