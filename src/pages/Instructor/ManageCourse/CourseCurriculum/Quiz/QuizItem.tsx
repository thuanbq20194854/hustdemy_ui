import { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { GrCircleQuestion } from 'react-icons/gr'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdDelete, MdEdit, MdOutlineClose } from 'react-icons/md'
import { VscQuestion } from 'react-icons/vsc'
import { useBoolean } from '../../../../../hooks/useBoolean'
import { Lecture, Question } from '../../../../../models/course'
import AddQuestionForm from './AddQuestionForm'
import DeleteLectureItemModal from '../DeleteLectureItemModal'
import EditQuizForm from './EditQuizForm'
import QuestionItem from './QuestionItem'
import styles from './QuizItem.module.scss'

interface IProps {
  questions: Question[]
  curriculumId: number
  index: number
  quizItem: Lecture
  // handleUpdateQuiz: (quizData: UpdateQuiz) => void
  // handleDeleteLecture: (lectureData: DeleteLecture) => void
}

function QuizItem({ questions, curriculumId, index, quizItem }: IProps) {
  const QUIZ_ITEM_MODE = {
    NORMAL: 0,
    SHOW: 2,
    EDIT: 3,
    SELECT_QUESTION_TYPE: 4,
    ADD_QUESTION: 5,
    EDIT_QUESTION: 6
  }

  const [quizItemMode, setQuizItemMode] = useState(QUIZ_ITEM_MODE.NORMAL)

  const [isOpen, setCommandModal, handleOpenModal] = useBoolean()

  const [quizEdit, setQuizEdit] = useState<Lecture | null>()

  const [questionEdit, setQuestionEdit] = useState<Question | null>(null)

  const handleOpenEditQuizForm = (quizEdit: Lecture) => {
    setQuizItemMode(QUIZ_ITEM_MODE.EDIT)
    setQuizEdit(quizEdit)
  }

  const handleBackToPreviousMode = () => {
    if (questions.length === 0) {
      setQuizItemMode(QUIZ_ITEM_MODE.NORMAL)
    } else {
      setQuizItemMode(QUIZ_ITEM_MODE.SHOW)
    }
  }

  const handleNormalMode = () => {
    setQuizItemMode(QUIZ_ITEM_MODE.NORMAL)
  }

  const handleQuestionEdit = (questionEdit: Question | null) => {
    setQuestionEdit(questionEdit)
    setQuizItemMode(QUIZ_ITEM_MODE.EDIT_QUESTION)
  }
  return (
    <div className={styles.quizItemWrapper}>
      <DeleteLectureItemModal
        curriculumId={curriculumId}
        lectureItem={quizItem}
        isOpen={isOpen}
        setCommandModal={setCommandModal}
      />
      {quizItemMode != QUIZ_ITEM_MODE.EDIT && (
        <div className='normalWrapper'>
          <div className='leftRegion'>
            <div className='iconContainer'>
              <IoCheckmarkCircle />
            </div>

            <div className='quizLabel'>Quiz {index}:</div>

            <div className='iconContainer'>
              <VscQuestion />
            </div>

            <div className='quizTitle'>{quizItem.title}</div>

            {!(quizItemMode === QUIZ_ITEM_MODE.ADD_QUESTION) && !(quizItemMode === QUIZ_ITEM_MODE.EDIT_QUESTION) && (
              <>
                <button className='editBtn' onClick={() => handleOpenEditQuizForm(quizItem)}>
                  <MdEdit size={16} />
                </button>
                <button className='deleteBtn'>
                  <MdDelete size={16} onClick={handleOpenModal} />
                </button>
              </>
            )}
          </div>

          <div className='rightRegion'>
            {questions.length > 0 ? (
              quizItemMode === QUIZ_ITEM_MODE.NORMAL ? (
                <button className='showBtn' onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.SHOW)}>
                  <IoIosArrowDown size={16} />
                </button>
              ) : (
                quizItemMode != QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE &&
                quizItemMode != QUIZ_ITEM_MODE.ADD_QUESTION && (
                  <button className='showBtn' onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.NORMAL)}>
                    <IoIosArrowUp size={16} />
                  </button>
                )
              )
            ) : (
              quizItemMode != QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE &&
              quizItemMode != QUIZ_ITEM_MODE.ADD_QUESTION && (
                <button
                  className='addBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'
                  onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE)}
                >
                  <AiOutlinePlus size={16} className='plusIcon' />
                  <span>Curriculum Item</span>
                </button>
              )
            )}

            {!QUIZ_ITEM_MODE.ADD_QUESTION && !QUIZ_ITEM_MODE.EDIT_QUESTION && (
              <button className='dragBtn'>
                <FaBars size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {quizItemMode != QUIZ_ITEM_MODE.EDIT && quizItemMode === QUIZ_ITEM_MODE.SHOW && (
        <div className='showModeWrapper'>
          <div className='headerWrapper--1'>
            <div className='headerLeft'>
              <div className='ud-text-bold'>Questions</div>
              <button
                className='ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'
                onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE)}
              >
                New Question
              </button>
            </div>

            <div className='headerRight'>
              <a href='/' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
                Preview
              </a>
            </div>
          </div>

          <div className='questionListWrapper'>
            {questions.map((questionItem, index) => (
              <QuestionItem
                key={questionItem.id}
                index={index + 1}
                questionItem={questionItem}
                curriculumId={quizItem.curriculum_id}
                handleQuestionEdit={() => handleQuestionEdit(questionItem)}
              />
            ))}
          </div>
        </div>
      )}

      {quizItemMode === QUIZ_ITEM_MODE.SELECT_QUESTION_TYPE && (
        <div className='selectQuestionTypeWrapper'>
          <button className='imageContainer' onClick={() => setQuizItemMode(QUIZ_ITEM_MODE.ADD_QUESTION)}>
            <div className='multiChoiceBtn'>
              <div className='iconContainer'>
                <GrCircleQuestion />
              </div>
              <div className='text ud-text-xs'>Multiple Choice</div>
            </div>
          </button>

          <div className='tabTitleContainer'>
            <span className='text ud-heading-sm'>Select question type</span>
            <button className='iconBtn' onClick={handleBackToPreviousMode}>
              <MdOutlineClose />
            </button>
          </div>
        </div>
      )}

      {(quizItemMode === QUIZ_ITEM_MODE.ADD_QUESTION || quizItemMode === QUIZ_ITEM_MODE.EDIT_QUESTION) && (
        <AddQuestionForm
          handleBackToPreviousMode={handleBackToPreviousMode}
          curriculumId={curriculumId}
          lectureId={quizItem.id}
          questionEdit={questionEdit}
          setQuestionEdit={setQuestionEdit}
        />
      )}

      {quizItemMode === QUIZ_ITEM_MODE.EDIT && (
        <EditQuizForm
          index={index}
          quizEdit={quizItem}
          curriculumId={curriculumId}
          handleNormalMode={handleNormalMode}
        />
      )}
    </div>
  )
}

export default QuizItem
