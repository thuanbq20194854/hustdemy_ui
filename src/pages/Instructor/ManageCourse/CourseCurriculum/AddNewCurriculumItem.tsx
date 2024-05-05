import { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

import AddLectureForm from './AddLectureForm'
import styles from './AddNewCurriculumItem.module.scss'
import AddQuizForm from './Quiz/AddQuizForm'

interface IProps {
  curriculumId: number
}

export const ADD_CURRICULUM_ITEM_MODE = {
  NORMAL: 0,
  SELECT_CURRICULUM_ITEM_TYPE: 1,
  ADD_LECTURE: 2,
  ADD_QUIZ: 3
}

function AddNewCurriculumItem({ curriculumId }: IProps) {
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
          <AddLectureForm handleNormalMode={handleNormalMode} curriculumId={curriculumId} />
        )}
        {addCurriculumMode === ADD_CURRICULUM_ITEM_MODE.ADD_QUIZ && (
          <AddQuizForm
            curriculumId={curriculumId}
            setAddCurriculumMode={setAddCurriculumMode}
            handleNormalMode={handleNormalMode}
          />
        )}
      </div>
    </div>
  )
}

export default AddNewCurriculumItem
