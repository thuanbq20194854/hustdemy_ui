import React from 'react'
import { FaBars } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'

import styles from './QuestionItem.module.scss'
import { IQuestion } from '../../../../models/course'

interface IProps {
  handleOpenModal: () => void

  question: IQuestion
  index: number
}

function QuestionItem({ handleOpenModal, question, index }: IProps) {
  return (
    <div className={`${styles.questionItemWrapper} ud-text-sm`}>
      <div className='infoPart'>
        <div className='index ud-text-bold'>{index + '.'}</div>
        <div className='questionName'>{question.title}</div>
      </div>

      <div className='actionPart'>
        <button className='btnContainer editBtn'>
          <MdEdit size={16} />
        </button>
        <button className='btnContainer deleteBtn' onClick={handleOpenModal}>
          <MdDelete size={16} />
        </button>
        <button className='btnContainer dragBtn'>
          <FaBars size={16} />
        </button>
      </div>
    </div>
  )
}

export default QuestionItem
