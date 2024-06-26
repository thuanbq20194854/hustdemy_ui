import { useEffect, useState } from 'react'
import TextEditor from '../../../../../components/TextEditor/TextEditor'
import { ELectureType, Lecture, UpdateQuiz } from '../../../../../models/course'
import CustomInput from '../../../components/CustomInput'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { schemeUpdateQuiz } from '../../../../../validators/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'
import styles from './AddQuizForm.module.scss'

interface IProps {
  curriculumId: number

  quizEdit: Lecture
  index: number | null
  handleNormalMode: () => void
}

function EditQuizForm({ curriculumId, quizEdit, index, handleNormalMode }: IProps) {
  const { handleUpdateQuiz } = useCourseManageContext()
  const customToolBar = [['bold', 'italic']]

  const methods = useForm<UpdateQuiz>({
    defaultValues: {
      id: quizEdit.id,
      desc: quizEdit?.description,
      curriculum_id: curriculumId,
      title: quizEdit?.title,
      type: ELectureType.Quiz
    },
    resolver: yupResolver(schemeUpdateQuiz)
  })

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    control
  } = methods

  const [questionEditing, setQuestionEditing] = useState<Lecture | null>(quizEdit)

  useEffect(() => {
    return () => {
      setQuestionEditing(null)
    }
  }, [])

  const handleSaveForm = (formData: UpdateQuiz) => {
    handleUpdateQuiz(formData)
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
      {questionEditing ? (
        <>
          <div className='iconContainer'>
            <IoCheckmarkCircle />
          </div>

          <div className='quizLabel'>Quiz {index}:</div>
        </>
      ) : (
        <div className='labelWrapper'>
          <span>New Quiz:</span>
        </div>
      )}

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
        {errors.title && <span className='ud-form-note-validate'>{errors.title.message}</span>}

        <TextEditor
          defaultValue={quizEdit.description ?? ''}
          className='textEditor'
          customToolBar={customToolBar}
          handleHTMLChange={handleHTMLChange}
        />

        <div className='btnsContainer'>
          <button
            className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
            // onClick={() => setAddCurriculumMode && setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.NORMAL)}
          >
            <span>Cancle</span>
          </button>

          <button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm' type='submit'>
            <span>Save Quiz</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditQuizForm
