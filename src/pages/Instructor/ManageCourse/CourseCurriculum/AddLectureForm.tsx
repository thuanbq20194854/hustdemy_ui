import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { CreateLectureForm, ELectureType } from '../../../../models/course'
import { schemeAddLectureForm } from '../../../../validators/course'
import CustomInput from '../../components/CustomInput'
import { useCourseManageContext } from '../context/CourseMangeContext'

interface IProps {
  handleNormalMode: () => void
  curriculumId: number
}

function AddLectureForm({ handleNormalMode, curriculumId }: IProps) {
  const { handleAddLecture } = useCourseManageContext()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateLectureForm>({
    defaultValues: {
      curriculum_id: curriculumId,
      title: '',
      type: ELectureType.Lecture
    },
    resolver: yupResolver(schemeAddLectureForm)
  })

  const handleSubmitForm = (formData: CreateLectureForm) => {
    handleAddLecture(formData)
    handleNormalMode()
  }
  return (
    <div className='addLectureWrapper'>
      <div className='labelWrapper'>
        <span>New Lecture:</span>
      </div>

      <form className='formEdit' onSubmit={handleSubmit(handleSubmitForm)}>
        <Controller
          name='title'
          control={control}
          render={({ field }) => <CustomInput placeholder='Enter a title' maxLength={80} {...field} />}
        />
        {errors.title && <span className='ud-form-note-validate-14'>{errors.title.message}</span>}

        <div className='btnsContainer'>
          <button className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral' onClick={handleNormalMode}>
            <span>Cancle</span>
          </button>

          <button type='submit' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
            <span>Add Lecture</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddLectureForm
