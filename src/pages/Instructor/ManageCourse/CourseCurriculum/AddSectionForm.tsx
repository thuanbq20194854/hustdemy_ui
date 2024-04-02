import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlinePlus } from 'react-icons/ai'
import { ICreateSection } from '../../../../models/course'
import { schemaCreateSection } from '../../../../validators/course'
import CustomInput from '../../components/CustomInput'
import { useCourseManageContext } from '../context/CourseMangeContext'
import styles from './AddSectionForm.module.scss'

function AddSectionForm() {
  const { handleAddSection } = useCourseManageContext()
  const [openForm, setOpenForm] = useState(false)

  const handleCancle = () => {
    setOpenForm(false)
  }

  const handleSave = () => {
    console.log(watch('sectionTitle'))
  }

  const {
    handleSubmit,
    formState: { errors },
    watch,
    control
  } = useForm<ICreateSection>({
    // mode: 'onSubmit',
    defaultValues: {
      sectionTitle: '',
      sectionOutcome: ''
    },
    resolver: yupResolver(schemaCreateSection)
  })

  const handleAddSectionSubmit = (addSectionData: ICreateSection) => {
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
                  name='sectionTitle'
                  render={({ field }) => (
                    <CustomInput
                      maxLength={80}
                      placeholder='Enter a title'
                      className={errors.sectionTitle ? 'ud-form-group-error' : ''}
                      {...field}
                    />
                  )}
                />

                {errors.sectionTitle && <span className='ud-form-note'>{errors.sectionTitle.message}</span>}
              </div>

              <div className='formItem'>
                <p className='ud-heading-sm label'>What will students be able to do at the end of this section?</p>

                <Controller
                  control={control}
                  name='sectionOutcome'
                  render={({ field }) => (
                    <CustomInput
                      maxLength={200}
                      placeholder='Enter a Learning Objective'
                      className={errors.sectionOutcome ? 'ud-form-group-error' : ''}
                      {...field}
                    />
                  )}
                />
                {errors.sectionOutcome && <span className='ud-form-note'>{errors.sectionOutcome.message}</span>}
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
