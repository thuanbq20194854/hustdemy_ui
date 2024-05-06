import { AnswerLecture } from '@/models/course'
import styles from '../LectureLearning.module.scss'

import { Modal } from 'antd'
import { useState } from 'react'

import { IoClose } from 'react-icons/io5'
import AnswerItem from './AnswerItem'

interface IProps {
  open: boolean

  handleCommandModal: (cmd: boolean) => void

  questionId: number
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

function AnswerModal({ open, handleCommandModal }: IProps) {
  // State: param + list

  // useEffect: fetch + id

  const [answerList, setAnswerList] = useState<AnswerLecture[]>(fakeAnswerList)
  return (
    <Modal
      open={open}
      closeIcon={<IoClose onClick={() => handleCommandModal(false)} />}
      rootClassName={styles.answerModalWrapper}
    >
      <div className='content'>
        {answerList.map((answerItem) => (
          <AnswerItem answerItem={answerItem} />
        ))}
      </div>
    </Modal>
  )
}

export default AnswerModal
