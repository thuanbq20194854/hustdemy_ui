import { Answer, Question } from '@/models/course'
import { Alert } from 'antd'
import React, { useState } from 'react'

interface IProps {
  question: Question
  quizStep: number
  setQuizStep: React.Dispatch<React.SetStateAction<number>>
}

const EQuestionFormMode = {
  INIT: 0,
  SELECTED_ANSWER: 1,
  CORRECT: 2,
  INCORRECT: 3
}

function QuestionForm({ question, quizStep, setQuizStep }: IProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
  const [questionFormMode, setQuestionFormMode] = useState(EQuestionFormMode.INIT)

  const handleSkipQuestion = () => {
    console.log('handleSkipQuestion')

    setQuestionFormMode(EQuestionFormMode.INIT)
    setSelectedAnswer(null)
    setQuizStep((prev) => prev + 1)
  }

  const handleCheckAnswer = () => {
    console.log('handleCheckAnswer')

    if (selectedAnswer) {
      const checkedAnswer = question.answers.find((item) => item.id === selectedAnswer.id)

      if (checkedAnswer) {
        setQuestionFormMode(EQuestionFormMode.CORRECT)
      } else {
        setQuestionFormMode(EQuestionFormMode.INCORRECT)
        setSelectedAnswer(null)
      }
    }
  }
  return (
    <>
      <div className='questionFormWrapper'>
        {questionFormMode === EQuestionFormMode.CORRECT && (
          <Alert
            message='Success Tips'
            description='Detailed description and advice about successful copywriting.'
            type='success'
            showIcon
          />
        )}
        {questionFormMode === EQuestionFormMode.INCORRECT && (
          <Alert
            message='Success Tips'
            description='Detailed description and advice about successful copywriting.'
            type='success'
            showIcon
          />
        )}
        <p>Question {quizStep}:</p>

        <div
          dangerouslySetInnerHTML={{
            __html: question.question_text
          }}
        ></div>

        {question.answers.map((answerItem) => (
          <div className='radioContainer' key={answerItem.id}>
            <input
              type='radio'
              id={answerItem.id + ''}
              name={question.id + ''}
              checked={
                questionFormMode === EQuestionFormMode.INIT
                  ? false
                  : answerItem.id === selectedAnswer?.id
                    ? true
                    : false
              }
              onChange={() => {
                setSelectedAnswer(answerItem)
                setQuestionFormMode(EQuestionFormMode.SELECTED_ANSWER)
              }}
            />
            <p>{answerItem.answer_text}</p>
          </div>
        ))}
      </div>

      <div className='bottomRegion'>
        <span>
          Question {quizStep} of {question.answers.length}
        </span>

        <div className='btnRegion'>
          <button
            className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
            onClick={handleSkipQuestion}
          >
            <span>Skip question</span>
          </button>

          <button
            className={`ud-btn ud-btn-small ud-btn-primary ud-heading-sm ${selectedAnswer && 'ud-btn-disabled'}`}
            onClick={handleCheckAnswer}
          >
            <span>Check Answer</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default QuestionForm
