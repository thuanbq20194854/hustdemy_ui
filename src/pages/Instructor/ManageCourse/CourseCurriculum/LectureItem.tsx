import React, { useState } from 'react'

// 1. Normal 2 Show 3. Add/Select/Loading Recourse 4. Add/Select/Loading Content

import styles from './LectureItem.module.scss'
import { ILecture } from '../../../../models/course'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { GoFile } from 'react-icons/go'
import { AiOutlinePlus } from 'react-icons/ai'

const LECTURE_MODE = {
  NORMAL: 1,
  SHOW: 2,
  ADD_CONTENT: 3,
  UPLOAD_CONTENT: 4,
  SELECT_CONTENT_TYPE: 5,
  ADD_RESOURCE: 6,
  UPLOAD_RESOURCE: 7,
  SELECT_RESOURCE_TYPE: 8
}

interface IProps {
  lectureItem?: ILecture
}

function LectureItem({ lectureItem }: IProps) {
  const [lectureMode, setLectureMode] = useState(LECTURE_MODE.NORMAL)

  return (
    <div className={styles.lectureItemWrapper}>
      <div className='normalWrapper'>
        <div className='leftRegion'>
          <div className='iconContainer'>
            <IoCheckmarkCircle />
          </div>

          <div className='quizLabel'>Lecture 5</div>

          <div className='iconContainer'>
            <GoFile />
          </div>

          <div className='quizTitle'>How React Work Behind</div>
        </div>

        <div className='rightRegion'>
          <button className='addBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'>
            <AiOutlinePlus size={16} className='plusIcon' />
            <span>Content</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LectureItem
