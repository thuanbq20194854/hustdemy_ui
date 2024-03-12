import React, { useState } from 'react'
import { FaBars, FaRegFile } from 'react-icons/fa'

import styles from './SectionItem.module.scss'
import { MdDelete, MdEdit } from 'react-icons/md'

import { useBoolean } from '../../../../hooks/useBoolean'
import DeleteSectionItemModal from './DeleteSectionItemModal'
import AddNewCurriculumItem from './AddNewCurriculumItem'
import LectureItem from './LectureItem'
import QuizItem from './QuizItem'
import { ICreateQuiz, ISection, IUpdateSection } from '../../../../models/course'
import EditSectionForm from './EditSectionForm'

interface IProps {
  handleEditSection: (formData: IUpdateSection) => void
  handleDeleteSection: (deletedId: number) => void
  handleAddQuiz: (quizData: ICreateQuiz) => void
  section: ISection

  index: number
}

function SectionItem({ handleEditSection, handleDeleteSection, handleAddQuiz, section, index }: IProps) {
  const [isOpenModal, handleCommandModal, handleOpenModal, handleCloseModal] = useBoolean()
  const SECTION_MODE = {
    NORMAL: 0,
    EDIT: 2
  }

  const [sectionMode, setSectionMode] = useState<number>(SECTION_MODE.NORMAL)

  const handleSetSectionModeNormal = () => {
    setSectionMode(SECTION_MODE.NORMAL)
  }

  return (
    <div className={styles.sectionItemWrapper}>
      <DeleteSectionItemModal
        handleDeleteSection={handleDeleteSection}
        handleCommandModal={handleCommandModal}
        open={isOpenModal}
        section={section}
      />

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

            <span>Introduction</span>
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
        <EditSectionForm
          section={section}
          handleEditSection={handleEditSection}
          handleSetSectionModeNormal={handleSetSectionModeNormal}
          index={index}
        />
      )}

      {/* Map Lecturers (LectureItem / QuestionItem) */}

      {section.lectures.map((lectureItem) => {
        if (lectureItem.type === 'quiz') {
          return <QuizItem sectionId={section.id} key={lectureItem.id} questions={lectureItem.questions || []} />
        }
        if (lectureItem.type === 'lecture') {
          return <LectureItem key={lectureItem.id} />
        }
      })}

      {/* Add New Section Item */}
      <AddNewCurriculumItem handleAddQuiz={handleAddQuiz} />
    </div>
  )
}

export default SectionItem
