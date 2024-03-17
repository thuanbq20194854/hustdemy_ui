import React from 'react'

import styles from './CourseCurriculum.module.scss'
import SectionItem from './SectionItem'
import {
  CreateQuestionForm,
  ICreateQuiz,
  ICreateSection,
  IDeleteLecture,
  ILecture,
  IQuestion,
  ISection,
  IUpdateQuiz,
  IUpdateSection
} from '../../../../models/course'
import AddSectionForm from './AddSectionForm'
import { randomNumber } from '../../../../utils/utils'

interface IProps {
  sections: ISection[]
  setSections: React.Dispatch<React.SetStateAction<ISection[]>>
}

function CourseCurriculum({ sections, setSections }: IProps) {
  const handleAddSection = (data: ICreateSection) => {
    /// API first
    /// Put response into this SET function

    setSections((prev) => [
      ...prev,
      {
        id: randomNumber(),
        sectionOutcome: data.sectionOutcome,
        lectures: [],
        sectionTitle: data.sectionTitle
      }
    ])
  }

  const handleEditSection = (sectionEdited: IUpdateSection) => {
    /// API first
    /// Put response into this SET function

    const updatedSection = sections.map((sectionItem) => {
      if (sectionItem.id === sectionEdited.id) {
        return {
          ...sectionItem,
          sectionOutcome: sectionEdited.sectionOutcome,
          sectionTitle: sectionEdited.sectionTitle
        }
      }

      return sectionItem
    })

    setSections(updatedSection)
  }

  const handleDeleteSection = (deleteId: number) => {
    /// loading
    /// API first
    /// finish loading
    /// Put response into this SET function
    /// toast
    const updatedSections = sections.filter((sectionItem) => sectionItem.id != deleteId)
    setSections(updatedSections)
  }

  const handleAddQuiz = (quizData: ICreateQuiz) => {
    const expectedSection = sections.find((sectionItem) => sectionItem.id === quizData.sectionId)

    const updatedSections: ISection[] = sections.map((sectionItem) => {
      if (sectionItem.id === expectedSection?.id) {
        return {
          ...sectionItem,

          lectures: [...sectionItem.lectures, { ...quizData, id: randomNumber(), questions: [] }]
        }
      }

      return sectionItem
    })

    setSections(updatedSections)
  }

  const handleUpdateQuiz = (quizData: IUpdateQuiz) => {
    const updatedSections: ISection[] = sections.map((sectionItem) => {
      if (sectionItem.id === quizData.sectionId) {
        const updatedLectures = sectionItem.lectures.map((lectureItem) => {
          if (lectureItem.id === quizData.id) {
            return {
              ...lectureItem,
              ...quizData
            }
          }

          return lectureItem
        })

        return {
          ...sectionItem,
          lectures: updatedLectures
        }
      }

      return sectionItem
    })

    setSections(updatedSections)
  }

  const handleDeleteLecture = (lectureData: IDeleteLecture) => {
    const updatedSections: ISection[] = sections.map((sectionItem) => {
      if (sectionItem.id === lectureData.sectionId) {
        const updatedLectures = sectionItem.lectures.filter((lectureItem) => lectureItem.id != lectureData.id)

        return {
          ...sectionItem,
          lectures: updatedLectures
        }
      }

      return sectionItem
    })

    setSections(updatedSections)
  }

  //   handleAddQuestion
  // handleUpdateQuestion

  const handleAddQuestion = (data: CreateQuestionForm) => {
    /// id of question from API to pass and update state
    const updatedSections: ISection[] = sections.map((sectionItem: ISection) => {
      if (sectionItem.id === data.sectionID) {
        const updatedLectures = sectionItem.lectures.map((lectureItem: ILecture) => {
          if (lectureItem.id === data.lectureID) {
            const updatedQuestions = [
              ...(lectureItem.questions as IQuestion[]),
              {
                id: randomNumber(),
                question_text: data.question_text,
                answers: data.answers,
                lectureId: data.lectureID
              }
            ]

            return {
              ...lectureItem,
              questions: updatedQuestions
            }
          }
          return lectureItem
        })

        return {
          ...sectionItem,
          lectures: updatedLectures
        }
      }

      return sectionItem
    })

    setSections(updatedSections)
  }

  return (
    <div className={styles.courseCurriculumPage}>
      <div className='subHeaderWrapper'>
        <div className='subHeaderContent ud-heading-serif-xl'>Curriculum</div>
      </div>

      <div className='mainContent'>
        <div className='alertContainer'>
          <p>
            Start putting together your course by creating sections, lectures and practice activities (
            <span className='ud-link-underline' color='#5624d0'>
              quizzes, coding exercises and assignments
            </span>
            ). Use your
            <span className='ud-link-underline' color='#5624d0'>
              course outline
            </span>
            to structure your content and label your sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than 2 hours.
          </p>
        </div>

        <div className='curriculumPart'>
          {sections.map((sectionItem, index) => (
            <SectionItem
              index={index + 1}
              key={sectionItem.id}
              handleEditSection={handleEditSection}
              handleDeleteSection={handleDeleteSection}
              handleAddQuiz={handleAddQuiz}
              handleUpdateQuiz={handleUpdateQuiz}
              handleDeleteLecture={handleDeleteLecture}
              section={sectionItem}
            />
          ))}

          <AddSectionForm handleAddSection={handleAddSection} />
        </div>
      </div>
    </div>
  )
}

export default CourseCurriculum
