import React, { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

import styles from './AddNewCurriculumItem.module.scss'
import CustomInput from '../../components/CustomInput'
import { ICreateQuiz } from '../../../../models/course'
import AddQuizForm from './AddQuizForm'

interface IProps {
  sectionId: number
  handleAddQuiz: (quizData: ICreateQuiz) => void
}

export const ADD_CURRICULUM_ITEM_MODE = {
  NORMAL: 0,
  SELECT_CURRICULUM_ITEM_TYPE: 1,
  ADD_LECTURE: 2,
  ADD_QUIZ: 3
}

function AddNewCurriculumItem({ handleAddQuiz, sectionId }: IProps) {
  const [addCurriculumMode, setAddCurriculumMode] = useState(ADD_CURRICULUM_ITEM_MODE.ADD_LECTURE)

  const handleNormalMode = () => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.NORMAL)
  return (
    <div className={styles.addCurriculumItemSectionWrapper}>
      <div className='addCurriculumItemBtnPart'>
        {addCurriculumMode === ADD_CURRICULUM_ITEM_MODE.NORMAL && (
          <button
            className='addCurriculumItemBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'
            onClick={() => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.SELECT_CURRICULUM_ITEM_TYPE)}
          >
            <AiOutlinePlus size={20} className='plusIcon' />
            <span>Curriculum Item</span>
          </button>
        )}

        {addCurriculumMode === ADD_CURRICULUM_ITEM_MODE.SELECT_CURRICULUM_ITEM_TYPE && (
          <div className='selectCurriculumItemContainer'>
            <button
              className='btnContainer ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-md'
              onClick={() => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.ADD_LECTURE)}
            >
              <AiOutlinePlus size={16} />
              <span>Lecture</span>
            </button>
            <button
              className='btnContainer ud-btn ud-btn-xsmall ud-btn-ghost ud-heading-md'
              onClick={() => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.ADD_QUIZ)}
            >
              <AiOutlinePlus size={16} />
              <span>Quiz</span>
            </button>

            <button className='btnContainer' onClick={() => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.NORMAL)}>
              <IoMdClose size={20} className='plusIcon' />
            </button>
          </div>
        )}

        {addCurriculumMode === ADD_CURRICULUM_ITEM_MODE.ADD_LECTURE && (
          <div className='addLectureWrapper'>
            <div className='labelWrapper'>
              <span>New Lecture:</span>
            </div>

            <form className='formEdit'>
              <CustomInput placeholder='Enter a title' maxLength={80} />

              <div className='btnsContainer'>
                <button
                  className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
                  onClick={() => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.NORMAL)}
                >
                  <span>Cancle</span>
                </button>

                <div className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
                  <span>Add Lecture</span>
                </div>
              </div>
            </form>
          </div>
        )}
        {addCurriculumMode === ADD_CURRICULUM_ITEM_MODE.ADD_QUIZ && (
          <AddQuizForm
            sectionId={sectionId}
            setAddCurriculumMode={setAddCurriculumMode}
            handleAddQuiz={handleAddQuiz}
            handleNormalMode={handleNormalMode}
          />
        )}
      </div>
    </div>
  )
}

export default AddNewCurriculumItem
