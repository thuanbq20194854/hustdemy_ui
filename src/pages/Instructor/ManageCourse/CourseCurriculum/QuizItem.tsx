import React, { useState } from 'react'

import styles from './QuizItem.module.scss'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { VscQuestion } from 'react-icons/vsc'
import { MdDelete, MdEdit, MdOutlineClose } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import CustomModal from '../../../../components/CustomModal/CustomModal'
import { useBoolean } from '../../../../hooks/useBoolean'
import DeleteQuestionItemModal from './DeleteQuestionItemModal'
import { GrCircleQuestion } from 'react-icons/gr'
import TextEditor from '../../../../components/TextEditor/TextEditor'

const questions = [
  {
    id: '1'
  },
  {
    id: '2'
  }
]

function QuizItem() {
  const QUIZ_ITEM_MODE = {
    NORMAL: 0,
    SHOW: 2,
    EDIT: 3,
    SELECT_QUESTION_TYPE: 4,
    ADD_QUESTION: 5
  }

  const [quizItemMode, setQuizItemMode] = useState(QUIZ_ITEM_MODE.NORMAL)

  const [isOpen, setCommandModal, handleOpenModal] = useBoolean()

  const handleCloseAdd = () => {
    if (questions.length === 0) {
      setQuizItemMode(QUIZ_ITEM_MODE.NORMAL)
    } else {
      setQuizItemMode(QUIZ_ITEM_MODE.SHOW)
    }
  }
  return (
    <div className={styles.quizItemWrapper}>
      <DeleteQuestionItemModal isOpen={isOpen} setCommandModal={setCommandModal} />
      <div className='normalWrapper'>
        <div className='leftRegion'>
          <div className='iconContainer'>
            <IoCheckmarkCircle />
          </div>

          <div className='quizLabel'>Quiz 1:</div>

          <div className='iconContainer'>
            <VscQuestion />
          </div>

          <div className='quizTitle'>Quiz Test Lecture HTML, CSS</div>

          <button className='editBtn'>
            <MdEdit size={16} />
          </button>
          <button className='deleteBtn'>
            <MdDelete size={16} />
          </button>
        </div>

        <div className='rightRegion'>
          {questions.length > 0 ? (
            quizItemMode === QUIZ_ITEM_MODE.NORMAL ? (
              <button className='showBtn' onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.SHOW)}>
                <IoIosArrowDown size={16} />
              </button>
            ) : (
              quizItemMode != QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE &&
              quizItemMode != QUIZ_ITEM_MODE.ADD_QUESTION && (
                <button className='showBtn' onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.NORMAL)}>
                  <IoIosArrowUp size={16} />
                </button>
              )
            )
          ) : (
            quizItemMode != QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE &&
            quizItemMode != QUIZ_ITEM_MODE.ADD_QUESTION && (
              <button
                className='addBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'
                onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE)}
              >
                <AiOutlinePlus size={16} className='plusIcon' />
                <span>Curriculum Item</span>
              </button>
            )
          )}

          <button className='dragBtn'>
            <FaBars size={16} />
          </button>
        </div>
      </div>
      {quizItemMode === QUIZ_ITEM_MODE.SHOW && (
        <div className='showModeWrapper'>
          <div className='headerWrapper--1'>
            <div className='headerLeft'>
              <div className='ud-text-bold'>Questions</div>
              <button
                className='ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'
                onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE)}
              >
                New Question
              </button>
            </div>

            <div className='headerRight'>
              <a href='/' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
                Preview
              </a>
            </div>
          </div>

          <div className='questionListWrapper'>
            <div className='questionItemWrapper ud-text-sm'>
              <div className='infoPart'>
                <div className='index ud-text-bold'>1.</div>
                <div className='questionName'>What is the best player of Java</div>
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
          </div>
        </div>
      )}

      {quizItemMode === QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE && (
        <div className='selectQuestionTypeWrapper'>
          <button className='imageContainer' onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.ADD_QUESTION)}>
            <div className='multiChoiceBtn'>
              <div className='iconContainer'>
                <GrCircleQuestion />
              </div>
              <div className='text ud-text-xs'>Multiple Choice</div>
            </div>
          </button>

          <div className='tabTitleContainer'>
            <span className='text ud-heading-sm'>Select question type</span>
            <button className='iconBtn' onClick={handleCloseAdd}>
              <MdOutlineClose />
            </button>
          </div>
        </div>
      )}

      {quizItemMode === QUIZ_ITEM_MODE.ADD_QUESTION && (
        <div className='addQuestionWrapper'>
          <div className='tabTitleContainer'>
            <span className='text ud-heading-sm'>Add Multiple Choice</span>
            <button className='iconBtn' onClick={handleCloseAdd}>
              <MdOutlineClose />
            </button>
          </div>

          <form action=''>
            <div className='formLabel ud-heading-sm'>Question</div>
            <TextEditor />
            <div className='formLabel ud-heading-sm'>Answer</div>
          </form>
        </div>
      )}
    </div>
  )
}

export default QuizItem
