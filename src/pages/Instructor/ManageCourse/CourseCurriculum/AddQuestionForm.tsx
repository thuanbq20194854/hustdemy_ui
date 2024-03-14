import React from 'react'

import styles from './AddQuestionForm.module.scss'
import { MdDelete, MdOutlineClose } from 'react-icons/md'
import TextEditor from '../../../../components/TextEditor/TextEditor'
import { Radio } from 'antd'
import CustomInput from '../../components/CustomInput'
import { IQuestion } from '../../../../models/course'

interface IProps {
  handleCloseAddQuestion: () => void
  index: number
  sectionId: number
  lectureId: number
  questionEdit: IQuestion | null
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

function AddQuestionForm({ handleCloseAddQuestion }: IProps) {
  //   const {
  //     register,
  //     control,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //     setValue,
  //     reset
  //   } = useForm<AnswerQuestion>({
  //     mode: 'onChange',
  //     defaultValues: {
  //       lectureID: lectureID,
  //       curriculum_id: curriculumId,
  //       is_correct: initCorrect,
  //       question: questionEdit ? questionEdit.title : '',
  //       answers: initAnswers
  //     },
  //     resolver: yupResolver(schemeCreateQuestionAnswer)
  //   })

  const initAnswers =
    FakeAnswerQuestion.answers.length > 0
      ? FakeAnswerQuestion.answers
      : [
          {
            id: '1',
            answer_text: '',
            explaination: ''
          },
          {
            id: '2',
            answer_text: '',
            explaination: ''
          },
          {
            id: '3',
            answer_text: '',
            explaination: ''
          },
          {
            id: '4',
            answer_text: '',
            explaination: ''
          }
        ]

  const customToolBar = [['bold', 'italic']]

  return (
    <div className={styles.addQuestionWrapper}>
      <div className='tabTitleContainer'>
        <span className='text ud-heading-sm'>Add Multiple Choice</span>
        <button className='iconBtn' onClick={handleCloseAddQuestion}>
          <MdOutlineClose />
        </button>
      </div>

      <form action='' className='formWrapper'>
        <div className='formItem'>
          <div className='formLabel ud-heading-sm'>Question</div>
          <TextEditor defaultValue='' className='textEditor' />
        </div>
        <div className='formItem'>
          <div className='formLabel ud-heading-sm'>Answer</div>

          <div className='answerListWrapper'>
            {FakeAnswerQuestion.answers.map((answerQuestionItem) => (
              <div className='answerItem' key={answerQuestionItem.id}>
                <div className='left'>
                  <Radio className='radioWrapper'></Radio>
                </div>

                <div className='middle'>
                  <TextEditor
                    defaultValue=''
                    className='textEditor'
                    placeholder='Add an answer'
                    customToolBar={customToolBar}
                  />

                  <CustomInput
                    className='customInput'
                    placeholder={`Explain why this is or isn't the best answer.`}
                    maxLength={60}
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
