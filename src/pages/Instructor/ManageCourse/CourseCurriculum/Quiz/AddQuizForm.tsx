import TextEditor from '../../../../../components/TextEditor/TextEditor'
import { ELectureType, ICreateQuiz } from '../../../../../models/course'
import CustomInput from '../../../components/CustomInput'
import { ADD_CURRICULUM_ITEM_MODE } from '../AddNewCurriculumItem'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { schemaCreateQuiz } from '../../../../../validators/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'
import styles from './AddQuizForm.module.scss'

interface IProps {
  sectionId: number
  setAddCurriculumMode: React.Dispatch<React.SetStateAction<number>>
  handleNormalMode: () => void
}

function AddQuizForm({ setAddCurriculumMode, sectionId, handleNormalMode }: IProps) {
  const { handleAddQuiz } = useCourseManageContext()

  const customToolBar = [['bold', 'italic']]

  const methods = useForm<ICreateQuiz>({
    defaultValues: {
      desc: '',
      sectionId: sectionId,
      title: '',
      type: ELectureType.Quiz
    },
    resolver: yupResolver(schemaCreateQuiz)
  })

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    control
  } = methods

  const handleSaveForm = (formData: ICreateQuiz) => {
    handleAddQuiz(formData)
    handleNormalMode()
  }

  const handleHTMLChange = (html: string) => {
    setValue('desc', html)
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
        {errors.title && <span className='ud-form-note-14'>{errors.title.message}</span>}

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
