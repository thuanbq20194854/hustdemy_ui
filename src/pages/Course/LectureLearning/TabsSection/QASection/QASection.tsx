import { useBoolean } from '@/hooks/useBoolean'
import { QuestionLecture } from '@/models/course'
import { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import styles from '../../LectureLearning.module.scss'
import AnswerModal from './AnswerModal'
import QuestionItem from './QuestionItem'
import { useLectureLearningContext } from '../../context/LectureLearningContext'

export const EFilterByQA = {
  ALL_LECTURES: 1,
  THIS_LECTURE: 2
}

export const ESortBy = {
  MOST_RECENT: 1
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

interface IProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function QASection({ setIsLoading }: IProps) {
  const [searchInput, setSearchInput] = useState('')

  const [filterBy, setFilterBy] = useState<number>(EFilterByQA.ALL_LECTURES)

  const [sortBy, setSortBy] = useState(ESortBy.MOST_RECENT)

  const [questionList, setQuestionList] = useState<QuestionLecture[]>(fakeQAList)

  const [questionInAnswerModal, setQuestionInAnswerModal] = useState<QuestionLecture | null>(null)

  const [openAnswerModal, handleCommandAnswerModal] = useBoolean()

  const { currentLecture } = useLectureLearningContext()

  const handleSearch = () => {
    console.log('search')
  }

  const handleOpenAnswerModal = (question: QuestionLecture) => {
    setQuestionInAnswerModal(question)
    handleCommandAnswerModal(true)
  }

  useEffect(() => {
    try {
    } catch (err) {
      setIsLoading(true)
      // fetch API when param change

      setIsLoading(false)
    }
  }, [filterBy, sortBy, searchInput, currentLecture?.id])
  return (
    <div className={styles.qaSectionWrapper}>
      <div className='filterQAPart'>
        <div className='ud-form-group flex-1 maxW-100'>
          <div className='searchContainer'>
            <input
              type='text'
              className='searchInput ud-text-input ud-text-input-large ud-text-md'
              placeholder='Search all course questions'
              value={searchInput}
              onChange={(evt) => setSearchInput(evt.target.value)}
            />

            <button
              className='searchBtn ud-btn ud-btn-large ud-btn-primary ud-heading-md ud-btn-icon ud-btn-icon-large'
              onClick={handleSearch}
            >
              <IoIosSearch />
            </button>
          </div>
        </div>

        <div className='flex'>
          <div className='ud-form-group ml-32'>
            <div className='ud-form-label ud-heading-sm'>Filters:</div>
            <div className='ud-select-container ud-select-container-large'>
              <select
                className='ud-select ud-text-md'
                value={filterBy}
                onChange={(evt) => setFilterBy(Number(evt.target.value))}
              >
                <option value={EFilterByQA.ALL_LECTURES}>All lectures</option>
                <option value={EFilterByQA.THIS_LECTURE}>Current lecture</option>
              </select>
              <div className='ud-select-icon-container ud-select-icon-right'>
                <IoIosArrowDown className='ud-icon ud-icon-small ud-icon-color-neutral' />
              </div>
            </div>
          </div>
          <div className='ud-form-group ml-32'>
            <div className='ud-form-label ud-heading-sm'>Sort by:</div>
            <div className='ud-select-container ud-select-container-large'>
              <select
                className='ud-select ud-text-md'
                value={sortBy}
                onChange={(evt) => setSortBy(Number(evt.target.value))}
              >
                <option value={ESortBy.MOST_RECENT}>Sort by most recent</option>
              </select>
              <div className='ud-select-icon-container ud-select-icon-right'>
                <IoIosArrowDown className='ud-icon ud-icon-small ud-icon-color-neutral' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='questionListWrapper'>
        <div className='resultSummary'>
          <h3 className='ud-heading-lg'>{`All questions in this ${filterBy === EFilterByQA.ALL_LECTURES ? 'course' : 'lecture'}`}</h3>
          <div className='summaryNumber ud-heading-md'>(2353)</div>
        </div>

        <div className='questionList'>
          {questionList.map((questionItem) => (
            <QuestionItem question={questionItem} handleOpenAnswerModal={handleOpenAnswerModal} key={questionItem.id} />
          ))}
        </div>
      </div>

      {questionInAnswerModal && (
        <AnswerModal
          questionItem={questionInAnswerModal}
          open={openAnswerModal}
          setQuestionInAnswerModal={setQuestionInAnswerModal}
          handleCommandModal={handleCommandAnswerModal}
        />
      )}
    </div>
  )
}

export default QASection
