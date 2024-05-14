import React, { useEffect, useState } from 'react'
import { useLectureLearningContext } from '../context/LectureLearningContext'
import { ContentCourse, ContentQuiz, CourseShow, EContentCourseType, ELectureType, Question } from '@/models/course'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import QuestionForm from './QuestionForm'

// const EQuizContentMode = {
//   Start: 1,
//   InProgress: 2,
//   End: 3
// }

const initCurrentQuestion = (currentLecture: ContentCourse | null) => {
  if (currentLecture?.type === EContentCourseType.Quiz) {
    return (currentLecture.content as ContentQuiz).questions
  }
}

function LectureContent() {
  const { currentLecture, course } = useLectureLearningContext()

  const [quizQuestions, setQuizQuestions] = useState<Question[]>(initCurrentQuestion(currentLecture) ?? [])

  const [quizStep, setQuizStep] = useState(0)

  useEffect(() => {
    if (currentLecture?.type === EContentCourseType.Quiz) {
      setQuizQuestions((currentLecture.content as ContentQuiz).questions)
    }
  }, [currentLecture])

  const isTheLastLecture = () => {
    if (course) {
      const curriculum = course.curriculums
      const lastLecture = curriculum[curriculum.length - 1]

      if (currentLecture?.id === lastLecture.id) {
        return true
      }
    }

    return false
  }

  const isTheFirstLecture = () => {
    if (course) {
      const curriculum = course.curriculums
      const firstLecture = curriculum[0]

      if (currentLecture?.id === firstLecture.id) {
        return true
      }
    }
    return false
  }

  const handleGoNextLecture = () => {
    console.log('handleGoNextLecture')
  }

  const handleGoPrevLecture = () => {
    console.log('handleGoPrevLecture')
  }

  return (
    <div className='lectureContentWrapper'>
      {currentLecture?.type === EContentCourseType.Video && (
        <div className='videoWrapper'>
          <iframe
            // src={`https://iframe.mediadelivery.net/embed/155247/${contentCourse.content?.url}?autoplay=false&loop=false&muted=false&preload=true`}
            src={`https://iframe.mediadelivery.net/play/155247/fee1d27b-4728-4c7b-8484-1eb4cd21a3cf`}
            loading='lazy'
            allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
            allowFullScreen={true}
            className='iframeElement'
          ></iframe>
        </div>
      )}

      {/* Quiz */}

      {currentLecture?.type === EContentCourseType.Quiz && (
        <div className='quizWrapper'>
          {quizStep === 0 && (
            <div className='startPage'>
              <h1 className='ud-heading-xxl'>Web Design Quiz 1</h1>

              <div className='quizMetadata'>
                <span>Quiz 1</span>
                <span> | </span>
                <span>5 questions</span>
              </div>

              <div className='actionButton'>
                <button
                  className='ud-btn ud-btn-large ud-btn-primary ud-heading-md'
                  onClick={() => setQuizStep((prev) => prev + 1)}
                >
                  Start Quiz
                </button>

                <button
                  onClick={handleGoNextLecture}
                  className='item-link item-link--common--j8WLy ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-link-neutral'
                >
                  Skip Quiz
                </button>
              </div>
            </div>
          )}

          {quizStep > 0 && quizStep < quizQuestions.length + 1 && (
            <>
              <QuestionForm question={quizQuestions[quizStep - 1]} quizStep={quizStep} setQuizStep={setQuizStep} />
            </>
          )}

          {quizStep < quizQuestions.length + 1 && <div>Finish Quiz</div>}
        </div>
      )}

      {/* Handle Prev */}
      {!isTheFirstLecture() && (
        <button className='prevButton' onClick={handleGoPrevLecture}>
          <IoIosArrowBack size={30} />
        </button>
      )}

      {/* Handle Next */}
      {!isTheLastLecture() && (
        <button className='nextButton' onClick={handleGoNextLecture}>
          <IoIosArrowForward size={30} />
        </button>
      )}

      {/* Handle Skip */}
    </div>
  )
}

export default LectureContent
