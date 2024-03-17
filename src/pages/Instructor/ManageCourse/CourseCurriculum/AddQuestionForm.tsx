import styles from './AddQuestionForm.module.scss'
import { MdDelete, MdOutlineClose } from 'react-icons/md'
import TextEditor from '../../../../components/TextEditor/TextEditor'
import { Radio } from 'antd'
import CustomInput from '../../components/CustomInput'
import { CreateAnswerForm, CreateQuestionForm, IQuestion } from '../../../../models/course'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useMemo } from 'react'
import { schemaCreateQuestionForm } from '../../../../validators/course'
import { yupResolver } from '@hookform/resolvers/yup'
import TextArea from 'antd/es/input/TextArea'

interface IProps {
  handleBackToPreviousMode: () => void
  sectionId: number
  lectureId: number
  questionEdit: IQuestion | null

  handleAddQuestion
  handleUpdateQuestion
}

const FakeAnswerQuestion = {
  is_correct: 2,
  questionTitle: 'What it your name ???',
  answers: [
    {
      id: '1',

      answer:
        '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt officiis eaque fuga ipsa voluptatibus soluta quae sint quasi aperiam!',

      explaination: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, labore!'
    },
    {
      id: '2',
      answer:
        '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt officiis eaque fuga ipsa voluptatibus soluta quae sint quasi aperiam!',

      explaination: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, labore!'
    },
    {
      id: '3',
      answer:
        '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt officiis eaque fuga ipsa voluptatibus soluta quae sint quasi aperiam!',

      explaination: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, labore!'
    },
    {
      id: '4',
      answer:
        '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt officiis eaque fuga ipsa voluptatibus soluta quae sint quasi aperiam!',

      explaination: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, labore!'
    }
  ]
}

function AddQuestionForm({ handleBackToPreviousMode, sectionId, lectureId, questionEdit }: IProps) {
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
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset
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

  const customToolBar = [['bold', 'italic']]


  const handleSubmitForm = (data: CreateQuestionForm) => {
    

    if (questionEdit) {


    }
    else {


    }
  }

  return (
    <div className={styles.addQuestionWrapper}>
      <div className='tabTitleContainer'>
        <span className='text ud-heading-sm'>Add Multiple Choice</span>
        <button className='iconBtn' onClick={handleBackToPreviousMode}>
          <MdOutlineClose />
        </button>
      </div>

      <form action='' className='formWrapper' onSubmit={handleSubmit(handleSubmitForm)}>
        <div className='formItem'>
          <div className='formLabel ud-heading-sm'>Question</div>
          <TextEditor defaultValue='' className='textEditor' />
        </div>
        <div className='formItem'>
          <div className='formLabel ud-heading-sm'>Answer</div>

          <div className='answerListWrapper'>
            {answersField.map((answerItem: CreateAnswerForm, index) => (
              <div className='answerItem' key={answerItem.id}>
                <div className='left'>
                  <Radio
                    className='radioWrapper'
                    value={index === +watch('indexOfCorrectAnswer') ? true : false}
                  ></Radio>
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
                    render={({ ...fields }) => <TextArea className='antTA' {...fields}></TextArea>}
                  />

                  <Controller
                    control={control}
                    name={`answers.${index}.explain`}
                    render={({ ...fields }) => (
                      <CustomInput
                        className='customInput'
                        placeholder={`Explain why this is or isn't the best answer.`}
                        maxLength={60}
                        {...fields}
                      />
                    )}
                  />
                </div>

                <div className='right'>
                  <button className='deleteBtn'>
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddQuestionForm
