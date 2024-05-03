import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlinePlus } from 'react-icons/ai'
import { CreateSection } from '../../../../models/course'
import { schemeCreateSection } from '../../../../validators/course'
import CustomInput from '../../components/CustomInput'
import { useCourseManageContext } from '../context/CourseMangeContext'
import styles from './AddSectionForm.module.scss'

function AddSectionForm() {
  const { handleAddSection } = useCourseManageContext()
  const [openForm, setOpenForm] = useState(false)

  const handleCancle = () => {
    setOpenForm(false)
  }

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<CreateSection>({
    // mode: 'onSubmit',
    defaultValues: {
      title: '',
      description: ''
    },
    resolver: yupResolver(schemeCreateSection)
  })

  const handleAddSectionSubmit = (addSectionData: CreateSection) => {
    handleAddSection(addSectionData)
    setOpenForm(false)
  }

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

            <form className='editForm' onSubmit={handleSubmit(handleAddSectionSubmit)}>
              <div className='formItem'>
                <Controller
                  control={control}
                  name='title'
                  render={({ field }) => (
                    <CustomInput
                      maxLength={80}
                      placeholder='Enter a title'
                      className={errors.title ? 'ud-form-group-error' : ''}
                      {...field}
                    />
                  )}
                />

                {errors.title && <span className='ud-form-note-validate'>{errors.title.message}</span>}
              </div>

              <div className='formItem'>
                <p className='ud-heading-sm label'>What will students be able to do at the end of this section?</p>

                <Controller
                  control={control}
                  name='description'
                  render={({ field }) => (
                    <CustomInput
                      maxLength={200}
                      placeholder='Enter a Learning Objective'
                      className={errors.description ? 'ud-form-group-error' : ''}
                      {...field}
                    />
                  )}
                />
                {errors.description && <span className='ud-form-note-validate'>{errors.description.message}</span>}
              </div>

              <div className='btnActionsContainer'>
                <button
                  className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
                  onClick={handleCancle}
                >
                  <span>Cancle</span>
                </button>

                <button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm' type='submit'>
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
