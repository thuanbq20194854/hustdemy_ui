import React, { useState } from 'react'
import { FaBars, FaRegFile } from 'react-icons/fa'

import styles from './SectionItem.module.scss'
import { MdDelete, MdEdit } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import CustomInput from '../../components/CustomInput'
import { useBoolean } from '../../../../hooks/useBoolean'
import DeleteCurriculumItemModal from './DeleteCurriculumItemModal'

const fakeitems = [
  {
    id: 1
  },
  {
    id: 2
  }
]

function SectionItem() {
  const [isOpenModal, handleOpenModal, handleCloseModal] = useBoolean()
  const [isOpenModal1, handleOpenModal1, handleCloseModal1] = useBoolean()
  const SECTION_MODE = {
    NORMAL: 0,
    EDIT: 2
  }

  const [mode, setMode] = useState<number>(2)
  return (
    <div className={styles.sectionItemWrapper}>
      <DeleteCurriculumItemModal
        open={isOpenModal}
        curriculumItemId='123123'
        handleCloseModal={() => {
          console.log('0 cancle')
          handleCloseModal()
        }}
      />

      {/* Mode Normal */}

      {mode !== SECTION_MODE.EDIT && (
        <div className='sectionHeader'>
          <span className='label ud-text-bold'>{fakeitems.length > 0 ? 'Unpublished Section: ' : 'Section 1: '}</span>
          <span className='title'>
            <div className='iconContainer'>
              <FaRegFile />
            </div>

            <span>Introduction</span>
          </span>

          <div className='btnPart'>
            <button className='btnContainer' onClick={() => setMode(SECTION_MODE.EDIT)}>
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

      {mode === SECTION_MODE.EDIT && (
        <div className='editSectionWrapper'>
          <div className='editSectionWrapper--inner'>
            <div className='sectionLabel ud-text-bold'>Section 1: </div>
            <form className='editForm'>
              <div className='formItem'>
                <CustomInput maxLength={80} placeholder='Enter a title' />
              </div>

              <div className='formItem'>
                <p className='ud-heading-sm label'>What will students be able to do at the end of this section?</p>
                <CustomInput maxLength={200} placeholder='Enter a Learning Objective' />
              </div>

              <div className='btnActionsContainer'>
                <button
                  className='btn btnCancle ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
                  onClick={() => setMode(SECTION_MODE.NORMAL)}
                >
                  <span>Cancle</span>
                </button>

                <button className='btn btnSave ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
                  <span>Save Section</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Map Lecturers (LectureItem / QuestionItem) */}

      {/* Add New Section Item */}

      <div className='addSectionItemBtnContainer'>
        <button className='addSectionItemBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'>
          <AiOutlinePlus size={20} />
          <span>Curriculum Item</span>
        </button>
      </div>
    </div>
  )
}

export default SectionItem
