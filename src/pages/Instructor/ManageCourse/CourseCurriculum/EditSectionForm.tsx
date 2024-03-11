import React from 'react'

import styles from './EditSectionForm.module.scss'
import CustomInput from '../../components/CustomInput'

interface IProps {
  handleSetSectionModeNormal: () => void
  isEditForm?: boolean
}

function EditSectionForm({ handleSetSectionModeNormal }: IProps) {
  return (
    <div className={styles.editSectionWrapper}>
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
              className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
              onClick={handleSetSectionModeNormal}
            >
              <span>Cancle</span>
            </button>

            <button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
              <span>Save Section</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditSectionForm
