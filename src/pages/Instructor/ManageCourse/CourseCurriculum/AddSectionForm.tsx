import { AiOutlinePlus } from 'react-icons/ai'
import styles from './AddSectionForm.module.scss'
import { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import { IAddSection } from '../../../../models/course'
import { FormProvider, useForm } from 'react-hook-form'
import { schemaAddSection } from '../../../../validators/course'
import { yupResolver } from '@hookform/resolvers/yup'

interface IProps {
  handleAddSection: (data: IAddSection) => void
}

function AddSectionForm({ handleAddSection }: IProps) {
  const [openForm, setOpenForm] = useState(false)

  const handleCancle = () => {
    setOpenForm(false)
  }

  const handleSave = () => {}

  const methods = useForm<IAddSection>({
    // mode: 'onSubmit',
    defaultValues: {
      sectionTitle: '',
      sectionOutcome: ''
    },
    resolver: yupResolver(schemaAddSection)
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = methods

  const handleAddSectionSubmit = (addSectionData: IAddSection) => {
    console.log('addSectionData: ', addSectionData)
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
                <CustomInput
                  maxLength={80}
                  placeholder='Enter a title'
                  className='ud-form-group-error'
                  // {...register('sectionTitle')}
                />
                {<span className='ud-form-note'>Erroweqeqweqwdqwdqww</span>}
              </div>

              <div className='formItem'>
                <p className='ud-heading-sm label'>What will students be able to do at the end of this section?</p>
                <CustomInput
                  maxLength={200}
                  placeholder='Enter a Learning Objective'

                  // {...register('sectionOutcome')}
                />
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
