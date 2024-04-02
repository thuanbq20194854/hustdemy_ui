import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { ISection, IUpdateSection } from '../../../../models/course'
import { schemaUpdateSection } from '../../../../validators/course'
import CustomInput from '../../components/CustomInput'
import { useCourseManageContext } from '../context/CourseMangeContext'
import styles from './EditSectionForm.module.scss'

interface IProps {
  handleSetSectionModeNormal: () => void
  // handleEditSection: (formData: IUpdateSection) => void
  isEditForm?: boolean

  section: ISection
  index: number
}

function EditSectionForm({ handleSetSectionModeNormal, section, index }: IProps) {
  const { handleEditSection } = useCourseManageContext()

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<IUpdateSection>({
    // mode: 'onSubmit',
    defaultValues: {
      id: section.id,
      sectionTitle: section.sectionTitle,
      sectionOutcome: section.sectionOutcome
    },
    resolver: yupResolver(schemaUpdateSection)
  })

  const handleSubmitForm = (formData: IUpdateSection) => {
    console.log('formData: ', formData)
    handleEditSection(formData)
    handleSetSectionModeNormal()
  }

  return (
    <div className={styles.editSectionWrapper}>
      <div className='editSectionWrapper--inner'>
        <div className='sectionLabel ud-text-bold'>
          {section.lectures.length > 0 ? `Section ${index}` : 'Unpublished Section'}
        </div>
        <form className='editForm' onSubmit={handleSubmit(handleSubmitForm)}>
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
              onClick={handleSetSectionModeNormal}
            >
              <span>Cancle</span>
            </button>

            <button type='submit' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
              <span>Save Section</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditSectionForm
