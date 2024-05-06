import { AnswerLecture } from '@/models/course'
import dayjs from 'dayjs'
import { IoMdChatboxes } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

interface IProps {
  answerItem: AnswerLecture
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
function AnswerItem({ answerItem }: IProps) {
  return (
    <div className='answerItemWrapper'>
      <div className='avatarWrapper'>
        <img src={answerItem.user.avatar ? answerItem.user.avatar : ''} alt='' />
      </div>

      <div className='infoContainer'>
        <div className='answerItemLinkRow'>
          <div className='metaData ud-heading-md'>
            <h4 className='ellipse-1-row ud-text-with-links' style={{ marginBottom: '4px' }}>
              <NavLink to={`user/${answerItem.user.id}`}>{answerItem.user.name}</NavLink>
            </h4>
            <div className='ud-text-xs'>{dayjs(answerItem.updated_at).format('DD/MMM/YYYY')}</div>
          </div>

          <IoMdChatboxes size={24} style={{ marginLeft: '4px' }} />
        </div>

        <div className='bodyContent ud-text-sm ellipse-1-row'>{answerItem.answer}</div>
      </div>
    </div>
  )
}

export default AnswerItem
