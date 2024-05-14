import React, { useEffect, useState } from 'react'
import { useLectureLearningContext } from '../context/LectureLearningContext'
import { EContentCourseType, ELectureType } from '@/models/course'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const EQuizContentMode = {
  Start: 1,
  InProgress: 2,
  End: 3
}

function LectureContent() {
  const { currentLecture, course } = useLectureLearningContext()

  const [currentQuestion, setCurrentQuestion] = useEffect(() => {
    // if (currentLecture?.type === ELectureType.Quiz) {
    //   set
    // }
    return () => {
      setCurrentQuestion(null)
    }
  }, [currentLecture?.curriculumID])

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

  const [quizContentMode, setQuizContentMode] = useState(EQuizContentMode.Start)
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
          {quizContentMode === EQuizContentMode.Start && (
            <div className='startPage'>
              <h1 className='ud-heading-xxl'>Web Design Quiz 1</h1>

              <div className='quizMetadata'>
                <span>Quiz 1</span>
                <span> | </span>
                <span>5 questions</span>
              </div>

              <div className='actionButton'>
                <button className='ud-btn ud-btn-large ud-btn-primary ud-heading-md'>Start Quiz</button>

                <button className='item-link item-link--common--j8WLy ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-link-neutral'>
                  Skip Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Handle Prev */}
      {!isTheFirstLecture() && (
        <button className='prevButton'>
          <IoIosArrowBack size={30} />
        </button>
      )}

      {/* Handle Next */}
      {!isTheLastLecture() && (
        <button className='nextButton'>
          <IoIosArrowForward size={30} />
        </button>
      )}

      {/* Handle Skip */}
    </div>
  )
}

export default LectureContent
