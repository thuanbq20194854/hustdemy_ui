import { AnswerLecture, QuestionLecture } from '@/models/course'
import styles from '../LectureLearning.module.scss'

import { Modal, Spin } from 'antd'
import { useEffect, useState } from 'react'

import { IoClose } from 'react-icons/io5'
import AnswerItem from './AnswerItem'
import CustomQuestionItem from './CustomQuestionItem'
import AddAnswerForm from './AddAnswerForm'

interface IProps {
  open: boolean

  handleCommandModal: (cmd: boolean) => void

  questionItem: QuestionLecture
  setQuestionInAnswerModal: React.Dispatch<React.SetStateAction<QuestionLecture | null>>
}

const questionFake = {
  id: 1,
  course_id: 1,
  lecture_id: 1,
  user: {
    id: 1,
    avatar: 'https://img-c.udemycdn.com/user/50x50/41801894_5590.jpg',
    name: 'Garon'
  },
  title: 'React Router DOM updated to V6',
  description: `<p>1. State: listRender + filterParams (thường là các state tách nhau cho dễ nhìn, không nên trong Form)</p>`,
  total_answer: 12,
  updated_at: '2024-05-06T04:50:32.1079751+00:00',
  created_at: '2024-05-06T04:50:32.1079751+00:00'
}

const fakeAnswerList: AnswerLecture[] = [
  {
    id: 1,
    question_lecture_id: 1,
    user: {
      id: 1,
      avatar: 'https://img-c.udemycdn.com/user/50x50/41801894_5590.jpg',
      name: 'Garon'
    },
    answer: '1. State: listRender + filterParams (thường là các state tách nhau cho dễ nhìn, không nên trong Form)',
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 2,
    question_lecture_id: 1,
    user: {
      id: 1,
      avatar: 'https://img-c.udemycdn.com/user/50x50/41801894_5590.jpg',
      name: 'Garon'
    },
    answer: '1. State: listRender + filterParams (thường là các state tách nhau cho dễ nhìn, không nên trong Form)',
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 3,
    question_lecture_id: 1,
    user: {
      id: 1,
      avatar: 'https://img-c.udemycdn.com/user/50x50/41801894_5590.jpg',
      name: 'Garon'
    },
    answer: '1. State: listRender + filterParams (thường là các state tách nhau cho dễ nhìn, không nên trong Form)',
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 4,
    question_lecture_id: 1,
    user: {
      id: 1,
      avatar: 'https://img-c.udemycdn.com/user/50x50/41801894_5590.jpg',
      name: 'Garon'
    },
    answer: '1. State: listRender + filterParams (thường là các state tách nhau cho dễ nhìn, không nên trong Form)',
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 5,
    question_lecture_id: 1,
    user: {
      id: 1,
      avatar: 'https://img-c.udemycdn.com/user/50x50/41801894_5590.jpg',
      name: 'Garon'
    },
    answer: '1. State: listRender + filterParams (thường là các state tách nhau cho dễ nhìn, không nên trong Form)',
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 6,
    question_lecture_id: 1,
    user: {
      id: 1,
      avatar: 'https://img-c.udemycdn.com/user/50x50/41801894_5590.jpg',
      name: 'Garon'
    },
    answer: '1. State: listRender + filterParams (thường là các state tách nhau cho dễ nhìn, không nên trong Form)',
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  }
]

function AnswerModal({ open, handleCommandModal, questionItem, setQuestionInAnswerModal }: IProps) {
  const [totalPage, setTotalPage] = useState(1)

  const [answerList, setAnswerList] = useState<AnswerLecture[]>(fakeAnswerList)

  const [question, setQuestion] = useState<QuestionLecture>(questionItem)

  const [isLoading, setIsLoading] = useState(false)

  const [isLoadMore, setIsLoadMore] = useState(false)

  useEffect(() => {
    try {
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
      // fetch API with Question + Answer

      // reset page to 1
      setTotalPage(1)
    } catch (err) {
      console.log(err)
    }
  }, [questionItem.id])

  useEffect(() => {
    if (totalPage === 1) {
      return
    }

    // fetch API with new Param
  }, [totalPage])

  useEffect(() => {
    return () => {
      setQuestionInAnswerModal(null)
    }
  }, [])

  return (
    <Modal
      open={open}
      closeIcon={<IoClose onClick={() => handleCommandModal(false)} />}
      rootClassName={styles.answerModalWrapper}
      maskClosable={true}
      closable={true}
    >
      {isLoading ? (
        <div className='flex-center'>
          <Spin></Spin>
        </div>
      ) : (
        <div className='content'>
          <CustomQuestionItem question={questionFake} />
          <div className='separatorContainer'>
            <h4 className='ud-heading-md'>{answerList.length} replies</h4>
          </div>
          <div className='answerList'>
            {answerList.map((answerItem) => (
              <AnswerItem answerItem={answerItem} key={answerItem.id} />
            ))}
          </div>

          <div className='loadMoreBtnContainer'>
            <button disabled={isLoadMore} className='ud-btn ud-btn-large ud-btn-secondary ud-heading-md loadMoreBtn'>
              {isLoadMore ? <Spin></Spin> : <span>Load more answers</span>}
            </button>
          </div>

          <AddAnswerForm />
        </div>
      )}
    </Modal>
  )
}

export default AnswerModal
