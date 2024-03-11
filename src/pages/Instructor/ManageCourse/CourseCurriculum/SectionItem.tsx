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

const fakeitems = [
  {
    id: 1
  },
  {
    id: 2
  }
]

interface IProps {
  handleUpdateSection: () => void
  section: ISection
}

function SectionItem({ handleUpdateSection, section }: IProps) {
  const [isOpenModal, handleCommandModal, handleOpenModal, handleCloseModal] = useBoolean()
  const SECTION_MODE = {
    NORMAL: 0,
    EDIT: 2
  }

  const [sectionMode, setSectionMode] = useState<number>(2)

  const handleSetSectionModeNormal = () => {
    setSectionMode(SECTION_MODE.NORMAL)
  }

  return (
    <div className={styles.sectionItemWrapper}>
      <DeleteSectionItemModal handleCommandModal={handleCommandModal} open={isOpenModal} curriculumItemId='123123' />

      {/* Mode Normal */}

      {sectionMode !== SECTION_MODE.EDIT && (
        <div className='sectionHeader'>
          <span className='label ud-text-bold'>{fakeitems.length > 0 ? 'Unpublished Section: ' : 'Section 1: '}</span>
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

      {sectionMode === SECTION_MODE.EDIT && <EditSectionForm handleSetSectionModeNormal={handleSetSectionModeNormal} />}

      {/* Map Lecturers (LectureItem / QuestionItem) */}

      {section.lectures.map((lectureItem) => {
        if (lectureItem.type === 'quiz') {
          return <QuizItem key={lectureItem.id} questions={lectureItem.questions || []} />
        }
        if (lectureItem.type === 'lecture') {
          return <LectureItem key={lectureItem.id} />
        }
      })}

      {/* Add New Section Item */}
      <AddNewCurriculumItem />
    </div>
  )
}

export default SectionItem
