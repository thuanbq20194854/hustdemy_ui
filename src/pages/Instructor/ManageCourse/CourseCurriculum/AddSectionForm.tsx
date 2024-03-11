import { AiOutlinePlus } from 'react-icons/ai'
import styles from './AddSectionForm.module.scss'
import { useState } from 'react'
import CustomInput from '../../components/CustomInput'

function AddSectionForm() {
  const [openForm, setOpenForm] = useState(false)

  const handleCancle = () => {
    setOpenForm(false)
  }

  const handleSave = () => {}

  return (
    <>
      <div className={styles.addSectionFormWrapper}>
        {!openForm && (
          <button className='ud-btn ud-btn-small ud-btn-secondary ud-heading-sm' onClick={() => setOpenForm(true)}>
            <AiOutlinePlus size={20} className='plusIcon' />
            <span>Section</span>
          </button>
        )}
      </div>

      {openForm && (
        <div className={styles.editSectionWrapper}>
          <div className='editSectionWrapper--inner'>
            <div className='sectionLabel ud-text-bold'>New Section: </div>
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
                  onClick={handleCancle}
                >
                  <span>Cancle</span>
                </button>

                <button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm' onClick={handleSave}>
                  <span>Save Section</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddSectionForm
