import TextEditor from '../../../../../components/TextEditor/TextEditor'
import { ELectureType, CreateQuiz } from '../../../../../models/course'
import CustomInput from '../../../components/CustomInput'
import { ADD_CURRICULUM_ITEM_MODE } from '../AddNewCurriculumItem'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { schemeCreateQuiz } from '../../../../../validators/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'
import styles from './AddQuizForm.module.scss'

interface IProps {
  curriculumId: number
  setAddCurriculumMode: React.Dispatch<React.SetStateAction<number>>
  handleNormalMode: () => void
}

function AddQuizForm({ setAddCurriculumMode, curriculumId, handleNormalMode }: IProps) {
  const { handleAddQuiz } = useCourseManageContext()

  const customToolBar = [['bold', 'italic']]

  const methods = useForm<CreateQuiz>({
    defaultValues: {
      desc: '',
      curriculum_id: curriculumId,
      title: '',
      type: ELectureType.Quiz
    },
    resolver: yupResolver(schemeCreateQuiz)
  })

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    control
  } = methods

  const handleSaveForm = (formData: CreateQuiz) => {
    handleAddQuiz(formData)
    handleNormalMode()
  }

  const handleHTMLChange = (html: string, text: string | undefined) => {
    if (text && text.trim().length === 0) {
      setValue('desc', '')
    } else {
      setValue('desc', html)
    }
  }

  return (
    <div className={styles.addLectureWrapper}>
      <div className='labelWrapper'>
        <span>New Quiz:</span>
      </div>

      <form className='formEdit' onSubmit={handleSubmit(handleSaveForm)}>
        <Controller
          control={control}
          name='title'
          render={({ field }) => (
            <CustomInput
              placeholder='Enter a title'
              maxLength={80}
              className={errors.title ? 'ud-form-group-error' : ''}
              {...field}
            />
          )}
        />
        {errors.title && <span className='ud-form-note-validate-14'>{errors.title.message}</span>}

        <TextEditor
          defaultValue=''
          className='textEditor'
          customToolBar={customToolBar}
          handleHTMLChange={handleHTMLChange}
        />

        <div className='btnsContainer'>
          <button
            className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
            onClick={() => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.NORMAL)}
          >
            <span>Cancle</span>
          </button>

          <button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm' type='submit'>
            <span>Add Quiz</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddQuizForm
