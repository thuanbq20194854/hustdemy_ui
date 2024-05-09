import { QuestionLecture } from '@/models/course'
import dayjs from 'dayjs'
import { IoMdChatboxes } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

interface IProps {
  question: QuestionLecture
  handleOpenAnswerModal: (question: QuestionLecture) => void
  className?: string
}

const fakeQAList = [
  {
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
]
function QuestionItem({ question, handleOpenAnswerModal, className }: IProps) {
  return (
    <div className={`questionItemWrapper ${className}`}>
      <div className='avatarWrapper'>
        <img src={question.user.avatar ? question.user.avatar : ''} alt='' />
      </div>

      <div className='infoContainer'>
        <div className='questionLinkRow'>
          <div className='textContent ud-heading-md'>
            <h4 className='ellipse-1-row'>{question.title}</h4>

            <div className='bodyContent ud-text-sm ellipse-1-row'>{question.description}</div>
          </div>

          <div className='responseNumContainer'>
            {/* <div className='upvoteContainer ud-btn ud-btn-large ud-btn-link ud-heading-md'>
              <span className='ud-sr-only numUpvote'>23</span>
              <LuArrowUpCircle size={24} style={{ marginLeft: '4px' }} />
            </div> */}
            <button
              className='upvoteContainer ud-btn ud-btn-large ud-btn-link ud-heading-md'
              onClick={() => handleOpenAnswerModal(question)}
            >
              <span className='ud-sr-only numUpvote'>{question.total_answer}</span>
              <IoMdChatboxes size={24} style={{ marginLeft: '4px' }} />
            </button>
          </div>
        </div>
        <div className='metaData ud-text-xs ud-text-with-links'>
          <NavLink to='/user/123123'>
            <span>{question.user.name}</span>
          </NavLink>

          <span>{`Lecture ${question.lecture_id}`}</span>

          <span>{dayjs(question.updated_at).format('DD/MMM/YYYY HH:MM')}</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem
