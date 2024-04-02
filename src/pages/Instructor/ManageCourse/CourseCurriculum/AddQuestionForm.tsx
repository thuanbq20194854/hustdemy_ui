import { yupResolver } from '@hookform/resolvers/yup'
import { Radio } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useMemo } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { MdDelete, MdOutlineClose } from 'react-icons/md'
import TextEditor from '../../../../components/TextEditor/TextEditor'
import {
  CreateAnswerForm,
  CreateQuestionForm,
  IQuestion,
  UpdateAnswerForm,
  UpdateQuestionForm
} from '../../../../models/course'
import { schemaCreateQuestionForm } from '../../../../validators/course'
import CustomInput from '../../components/CustomInput'
import { useCourseManageContext } from '../context/CourseMangeContext'
import styles from './AddQuestionForm.module.scss'

interface IProps {
  handleBackToPreviousMode: () => void
  sectionId: number
  lectureId: number
  questionEdit: IQuestion | null
  setQuestionEdit: React.Dispatch<React.SetStateAction<IQuestion | null>>
}

const customToolBar = [['bold', 'italic']]

function AddQuestionForm({ handleBackToPreviousMode, sectionId, lectureId, questionEdit, setQuestionEdit }: IProps) {
  const { handleAddQuestion, handleUpdateQuestion } = useCourseManageContext()
  const initAnswers = useMemo(() => {
    if (questionEdit != null) {
      return questionEdit.answers.map((answerItem) => ({
        id: answerItem.id,
        answer_text: answerItem.answer_text,
        explain: answerItem.explain
      }))
    } else {
      return Array(4)
        .fill(0)
        .map(() => ({
          id: 0,
          answer_text: '',
          explain: ''
        }))
    }
  }, [])

  const initCorrect = useMemo(() => {
    if (questionEdit) {
      let result

      questionEdit.answers.forEach((item, index) => {
        if (item.is_correct) {
          result = index
        }
      })

      return result
    } else {
      return undefined
    }
  }, [])
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm<CreateQuestionForm>({
    mode: 'onChange',
    defaultValues: {
      answers: initAnswers,
      indexOfCorrectAnswer: initCorrect,
      lectureID: lectureId,
      sectionID: sectionId,
      question_text: questionEdit ? questionEdit.question_text : ''
    },
    resolver: yupResolver(schemaCreateQuestionForm)
  })

  const { fields: answersField } = useFieldArray({
    control,
    name: 'answers'
  })

  const handleSubmitForm = (CreateQuestionFormData: CreateQuestionForm) => {
    if (questionEdit) {
      console.log('edit case: ', CreateQuestionFormData)

      const updateQuestionForm: UpdateQuestionForm = {
        id: questionEdit.id,
        question_text: CreateQuestionFormData.question_text,
        lectureID: lectureId,
        sectionID: sectionId
      }

      const updateAnswerFormArray: UpdateAnswerForm[] = CreateQuestionFormData.answers.map(
        (answerFormDataItem, index) => ({
          id: answerFormDataItem.id,
          answer_text: answerFormDataItem.answer_text,
          is_correct: index === +(CreateQuestionFormData.indexOfCorrectAnswer ?? ''),
          explain: answerFormDataItem.explain,
          lectureID: lectureId,
          sectionID: sectionId
        })
      )

      handleUpdateQuestion(updateQuestionForm, updateAnswerFormArray)
      handleBackToPreviousMode()
    } else {
      console.log('add data', CreateQuestionFormData)
      handleAddQuestion(CreateQuestionFormData)
      handleBackToPreviousMode()
    }
  }

  const handleEditorChange = (questionText: string) => {
    setValue('question_text', questionText)
  }

  useEffect(() => {
    return () => {
      setQuestionEdit(null)
    }
  }, [])

  console.log('errors', errors)

  console.log('form', watch())

  return (
    <div className={styles.addQuestionWrapper}>
      <div className='tabTitleContainer'>
        <span className='text ud-heading-sm'>Add Multiple Choice</span>
        <button className='iconBtn' onClick={handleBackToPreviousMode}>
          <MdOutlineClose />
        </button>
      </div>

      <form className='formWrapper' onSubmit={handleSubmit(handleSubmitForm)}>
        <div className='formItem'>
          <div className='formLabel ud-heading-sm'>Question</div>
          <Controller
            control={control}
            name='question_text'
            render={({ ...fields }) => (
              <TextEditor
                customToolBar={customToolBar}
                defaultValue={questionEdit ? questionEdit.question_text : ''}
                handleHTMLChange={handleEditorChange}
                className='textEditor'
                {...fields}
              />
            )}
          />
          {errors.question_text && <span className='ud-form-note'>{errors.question_text.message}</span>}
        </div>
        <div className='formItem'>
          <div className='formLabel ud-heading-sm'>Answer</div>

          <div className='answerListWrapper'>
            {answersField.map((answerItem: CreateAnswerForm, index) => (
              <div className='answerItem' key={answerItem.id}>
                <div className='left'>
                  <Radio
                    className='radioWrapper'
                    checked={
                      watch('indexOfCorrectAnswer') === undefined
                        ? false
                        : index === +(watch('indexOfCorrectAnswer') as string)
                    }
                    onChange={(value) => {
                      console.log(value)

                      setValue('indexOfCorrectAnswer', String(index))
                    }}
                  />
                </div>

                <div className='middle'>
                  {/* <TextEditor
                    defaultValue=''
                    className='textEditor'
                    placeholder='Add an answer'
                    customToolBar={customToolBar}
                  /> */}

                  <Controller
                    control={control}
                    name={`answers.${index}.answer_text`}
                    render={({ field }) => <TextArea className='antTA' {...field}></TextArea>}
                  />
                  {errors.answers && errors.answers[index]?.answer_text && (
                    <span className='ud-form-note'>{errors.answers[index]?.answer_text?.message ?? ''}</span>
                  )}

                  <Controller
                    control={control}
                    name={`answers.${index}.explain`}
                    render={({ field }) => (
                      <CustomInput
                        className='customInput'
                        placeholder={`Explain why this is or isn't the best answer.`}
                        maxLength={60}
                        {...field}
                      />
                    )}
                  />
                  {errors.answers && errors.answers[index]?.explain && (
                    <span className='ud-form-note'>{errors.answers[index]?.explain?.message ?? ''}</span>
                  )}
                </div>

                <div className='right'>
                  <button type='submit' className='deleteBtn'>
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {errors.indexOfCorrectAnswer && <span className='ud-form-note'>{errors.indexOfCorrectAnswer.message}</span>}
        </div>

        <div className='saveBtnContainer'>
          <button type='submit' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddQuestionForm
