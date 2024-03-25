import React, { useLayoutEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'

import styles from './CourseManageLayout.module.scss'
import { IoSettingsOutline } from 'react-icons/io5'
import Footer from '../../../layouts/components/Footer'
import CourseGoals from './CourseGoals/CourseGoals'
import CourseCurriculum from './CourseCurriculum/CourseCurriculum'
import CoursePricing from './CoursePricing/CoursePricing'
import CourseBasics from './CourseBasics/CourseBasics'
import CMSidebar from './CMSidebar'
import { tabPaths } from './constant/CourseManage'
import {
  CreateQuestionForm,
  ICreateQuiz,
  ICreateSection,
  IDeleteLecture,
  IDeleteQuestion,
  ILecture,
  IQuestion,
  ISection,
  IUpdateQuiz,
  IUpdateSection,
  UpdateAnswerForm,
  UpdateQuestionForm,
  UpdateVideoForm
} from '../../../models/course'
import { CourseManageContext, CourseManageProvider } from './context/CourseMangeContext'
import { randomNumber } from '../../../utils/utils'

const initCurriculum: ISection[] = [
  {
    id: 1,

    sectionTitle: 'Introduction',

    sectionOutcome: 'Get the first 10 grade',

    lectures: [
      {
        sectionId: 1,
        id: 1,
        type: 'lecture',
        title: 'Hello world with C#',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, commodi!'
      },
      {
        sectionId: 1,

        id: 2,
        type: 'quiz',

        title: 'Mini Test Quiz  Revision',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, commodi!',
        questions: [
          {
            lectureId: 2,
            id: 1,
            question_text: `
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quod ducimus qui molestiae saepe obcaecati excepturi dolor dignissimos laudantium unde ab?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quod ducimus qui molestiae saepe obcaecati excepturi dolor dignissimos laudantium unde ab?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quod ducimus qui molestiae saepe obcaecati excepturi dolor dignissimos laudantium unde ab?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quod ducimus qui molestiae saepe obcaecati excepturi dolor dignissimos laudantium unde ab?</p>
            `,
            answers: [
              {
                question_id: 1,
                id: 1,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false
              },
              {
                question_id: 1,
                id: 3,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: true
              },
              {
                question_id: 1,
                id: 2,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false
              },
              {
                question_id: 1,
                id: 4,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false
              }
            ]
          }
        ]
      }
    ]
  }
]

function CourseManageLayout() {
  const { courseId, content } = useParams()

  const navigate = useNavigate()
  const [course, setCourse] = useState<any>()

  const [sections, setSections] = useState<ISection[]>(initCurriculum)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [renderedTab, setRenderedTab] = useState('')

  const handleTabChange = (tabName: string) => {
    setRenderedTab(tabName)
    navigate(`/instructor/course/${courseId}/manage/${tabName}`)
  }

  useLayoutEffect(() => {
    if (!tabPaths.includes(content ?? '')) {
      navigate(`/instructor/course/${courseId}/manage/goals`)
      setRenderedTab('goals')
    } else {
      setRenderedTab(content ?? '')
    }
  }, [])

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

  const handleAddQuestion = (data: CreateQuestionForm) => {
    /// id of question from API to pass and update state
    const updatedSections: ISection[] = sections.map((sectionItem: ISection) => {
      if (sectionItem.id === data.sectionID) {
        const updatedLectures = sectionItem.lectures.map((lectureItem: ILecture) => {
          if (lectureItem.id === data.lectureID) {
            const newQuestionId = randomNumber()
            const updatedQuestions = [
              ...(lectureItem.questions as IQuestion[]),
              {
                id: newQuestionId,
                question_text: data.question_text,
                answers: data.answers.map((answerItem, index) => ({
                  id: randomNumber(),
                  answer_text: answerItem.answer_text,
                  explain: answerItem.explain,
                  is_correct: index === +(data.indexOfCorrectAnswer as string),
                  question_id: newQuestionId
                })),
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

  const handleUpdateQuestion = (
    updateQuestionFormData: UpdateQuestionForm,
    updateAnswerArrayForm: UpdateAnswerForm[]
  ) => {
    const updatedSections: ISection[] = sections.map((sectionItem: ISection) => {
      if (sectionItem.id === updateQuestionFormData.sectionID) {
        const updatedLectures = sectionItem.lectures.map((lectureItem: ILecture) => {
          if (lectureItem.id === updateQuestionFormData.lectureID) {
            const newQuestionId = randomNumber()
            // const updatedQuestions = [
            //   ...(lectureItem.questions as IQuestion[]),
            //   {
            //     id: newQuestionId,
            //     question_text: updateQuestionFormData.question_text,
            //     answers: data.answers.map((answerItem, index) => ({
            //       id: randomNumber(),
            //       answer_text: answerItem.answer_text,
            //       explain: answerItem.explain,
            //       is_correct: index === +data.indexOfCorrectAnswer,
            //       question_id: newQuestionId
            //     })),
            //     lectureId: data.lectureID
            //   }
            // ]

            const updatedQuestions = (lectureItem.questions ?? []).map((questionItem: IQuestion) => {
              if (questionItem.id === updateQuestionFormData.id) {
                return {
                  id: updateQuestionFormData.id,
                  question_text: updateQuestionFormData.question_text,
                  answers: updateAnswerArrayForm.map((answerItem) => ({
                    id: answerItem.id,
                    answer_text: answerItem.answer_text,
                    explain: answerItem.explain,
                    is_correct: answerItem.is_correct,
                    question_id: updateQuestionFormData.id
                  })),
                  lectureId: updateQuestionFormData.lectureID
                }
              }
              return questionItem
            })

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

  const handleDeleteQuestion = (questionItemData: IDeleteQuestion) => {
    const updateSections = sections.map((sectionItem: ISection) => {
      if (sectionItem.id === questionItemData.sectionID) {
        const updatedLectures = sectionItem.lectures.map((lectureItem: ILecture) => {
          if (lectureItem.id === questionItemData.lectureID) {
            const updatedQuestions = lectureItem.questions?.filter(
              (questionItem: IQuestion) => questionItem.id != questionItemData.questionID
            )

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

    setSections(updateSections)
  }

  const handleUpdateVideo = (updateVideoForm: UpdateVideoForm) => {
    console.log(updateVideoForm)
  }

  return (
    <div className={styles.layoutWrapper}>
      <div className='headerWrapper'>
        <div className='backBtn ud-btn ud-btn-small ud-btn-ghost ud-text-md'>
          <div className='iconContainer'>
            <IoIosArrowBack />
          </div>
          <span>Back to courses</span>
        </div>

        <div className='restPart'>
          <div className='infoPart'>
            <div className='courseTitle ud-heading-lg'>Learn HTML in minute </div>
            <div className='courseStatus ud-badge ud-heading-xs'>Draft</div>
            <div className='courseUploadedTime'>0min of video content uploaded</div>
          </div>

          <div className='actionPart'>
            <button className='saveBtn ud-btn ud-btn-small ud-btn-white-solid ud-heading-sm disabledBtn'>
              <span>Save</span>
            </button>

            <div className='settingContainer'>
              <IoSettingsOutline fill='#fff' stroke='#fff' />
            </div>
          </div>
        </div>
      </div>

      <div className='appContainer'>
        <CMSidebar courseId={courseId ?? ''} handleTabChange={handleTabChange} />
        <div className='mainContentWrapper'>
          <CourseManageProvider
            value={{
              sections,
              handleAddSection,
              handleEditSection,
              handleDeleteSection,
              handleAddQuiz,
              handleUpdateQuiz,
              handleDeleteLecture,
              handleAddQuestion,
              handleUpdateQuestion,
              handleDeleteQuestion,
              handleUpdateVideo
            }}
          >
            {renderedTab === 'goals' && <CourseGoals />}

            {renderedTab === 'curriculum' && <CourseCurriculum setSections={setSections} sections={sections} />}
            {renderedTab === 'pricing' && <CoursePricing />}

            {renderedTab === 'basics' && <CourseBasics />}
          </CourseManageProvider>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CourseManageLayout
