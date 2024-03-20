import React, { useState } from 'react'
import { FaBars, FaRegFile } from 'react-icons/fa'

import styles from './SectionItem.module.scss'
import { MdDelete, MdEdit } from 'react-icons/md'

import { useBoolean } from '../../../../hooks/useBoolean'
import DeleteSectionItemModal from './DeleteSectionItemModal'
import AddNewCurriculumItem from './AddNewCurriculumItem'
import LectureItem from './LectureItem'
import QuizItem from './QuizItem'
import { ISection } from '../../../../models/course'
import EditSectionForm from './EditSectionForm'
import { useCourseManageContext } from '../context/CourseMangeContext'

interface IProps {
  section: ISection

  index: number
}

function SectionItem({ section, index }: IProps) {
  const [isOpenModal, handleCommandModal, handleOpenModal, handleCloseModal] = useBoolean()
  const SECTION_MODE = {
    NORMAL: 0,
    EDIT: 2
  }

  const [sectionMode, setSectionMode] = useState<number>(SECTION_MODE.NORMAL)

  const handleSetSectionModeNormal = () => {
    setSectionMode(SECTION_MODE.NORMAL)
  }

  let lectureCount = 0

  let quizCount = 0

  return (
    <div className={styles.sectionItemWrapper}>
      <DeleteSectionItemModal handleCommandModal={handleCommandModal} open={isOpenModal} section={section} />

      {/* Mode Normal */}

      {sectionMode !== SECTION_MODE.EDIT && (
        <div className='sectionHeader'>
          <span className='label ud-text-bold'>
            {section.lectures.length > 0 ? `Section ${index}: ` : 'Unpublished Section: '}
          </span>
          <span className='title'>
            <div className='iconContainer'>
              <FaRegFile />
            </div>

            <span>{section.sectionTitle}</span>
          </span>

          <div className='btnPart'>
            <button className='btnContainer' onClick={() => setSectionMode(SECTION_MODE.EDIT)}>
              <MdEdit />
            </button>
            <button className='btnContainer' onClick={handleOpenModal}>
              <MdDelete />
            </button>
            <button className='btnContainer dragBtn'>
              <FaBars />
            </button>
          </div>
        </div>
      )}

      {/* Mode Edit Section */}

      {sectionMode === SECTION_MODE.EDIT && (
        <EditSectionForm section={section} handleSetSectionModeNormal={handleSetSectionModeNormal} index={index} />
      )}

      {/* Map Lecturers (LectureItem / QuestionItem) */}

      {section.lectures.map((lectureItem) => {
        if (lectureItem.type === 'quiz') {
          quizCount++

          return (
            <QuizItem
              quizItem={lectureItem}
              index={quizCount}
              sectionId={section.id}
              key={lectureItem.id}
              questions={lectureItem.questions || []}
            />
          )
        }
        if (lectureItem.type === 'lecture') {
          lectureCount++

          return <LectureItem lectureItem={lectureItem} key={lectureItem.id} />
        }
      })}

      {/* Add New Section Item */}
      <AddNewCurriculumItem sectionId={section.id} />
    </div>
  )
}

export default SectionItem
