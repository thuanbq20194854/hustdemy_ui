import { useLayoutEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { IoSettingsOutline } from 'react-icons/io5'
import Footer from '../../../layouts/components/Footer'
import {
  Course,
  CreateLectureForm,
  CreateQuestionForm,
  EAssetType,
  ELectureType,
  ICreateQuiz,
  ICreateSection,
  IDeleteLecture,
  IDeleteQuestion,
  IDeleteResource,
  ILecture,
  IQuestion,
  ISection,
  IUpdateQuiz,
  IUpdateSection,
  IntendedLearnForm,
  UpdateAnswerForm,
  UpdateCourseLandingPageForm,
  UpdateCoursePrice,
  UpdateLectureDesc,
  UpdateQuestionForm,
  UpdateResource,
  UpdateVideoForm
} from '../../../models/course'
import { randomNumber } from '../../../utils/utils'
import CMSidebar from './CMSidebar'
import CourseBasics from './CourseBasics/CourseBasics'
import CourseCurriculum from './CourseCurriculum/CourseCurriculum'
import CourseGoals from './CourseGoals/CourseGoals'
import styles from './CourseManageLayout.module.scss'
import CoursePricing from './CoursePricing/CoursePricing'
import { tabPaths } from './constant/CourseManage'
import { CourseManageProvider } from './context/CourseMangeContext'

const initCurriculum: ISection[] = [
  {
    id: 1,

    sectionTitle: 'Introduction',

    sectionOutcome: 'Get the first 10 grade',

    lectures: [
      {
        sectionId: 1,
        id: 1,
        type: ELectureType.Lecture,
        title: 'Hello world with C#',
        desc: '<p>Description test 123123123123123232</p> ',

        assets: [
          {
            id: Math.random(),
            bunnyID: Math.random() + 1 + '',
            url: '',
            type: EAssetType.Resource,
            duration: 5,
            name: 'Screenshot 2024-03-05 001222.png',
            size: 7000,
            lecture_id: 1,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          }
        ]
      },
      {
        sectionId: 1,
        id: 2,
        type: ELectureType.Quiz,
        title: 'Mini Test Quiz  Revision',
        desc: '<h2>Description test 123123123123123232</h2> ',
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

const initCourseData: Course = {
  id: 1,
  out_comes: [
    'Learn how to install and use Docker on any system (macOS, Windows, Linux)',
    'Learn what Docker and Kubernetes are and why you might want to use them',
    'Learn how to create and use Images & Containers with Docker',
    'Learn about Container Networking with Docker Networks and DNS Service Discovery'
  ],
  intended_for: [
    'Everyone who has NOT worked with Docker or Kubernetes at all',
    'Everyone who is struggling with understanding what exactly Docker is (and why you might want to use it)',
    'Web) developers who want to explore modern DevOps and Docker'
  ],
  requirements: [
    'NO prior Docker or Kubernetes experience is required!',
    "Basic (web) development knowledge is required - you don't need to know a specific language though",
    'AWS (used in a couple of deployment examples, ~4 hours of the course) requires a credit card - you can also follow along passively though'
  ],
  product_id_stripe: 'random1233213122312',
  level_id: 1,
  category_id: 1,
  sub_category_id: 1,
  title: 'Docker & Kubernetes: The Practical Guide [2024 Edition]',
  review_status: 1,
  welcome_message: null,
  congratulations_message: null,
  subtitle:
    'Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up!',
  primarily_teach: null,
  description: '<p>KEKE</p>',
  status: 1,
  language_id: 1,
  price_id: 1200,
  user_id: 1,
  promotional_video: null,
  image:
    'https://images.pexels.com/photos/18536697/pexels-photo-18536697/free-photo-of-woman-in-a-dress-dancing-on-a-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  curriculums: initCurriculum,
  updated_at: '',
  created_at: ''
}

function CourseManageLayout() {
  const { courseId, content } = useParams()

  const navigate = useNavigate()
  const [course, setCourse] = useState<Course>(initCourseData)

  // const [course.curriculums, setSections] = useState<ISection[]>(initCurriculum)

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

    const updatedSections = [
      ...(course.curriculums ?? []),
      {
        id: randomNumber(),
        sectionOutcome: data.sectionOutcome,
        lectures: [],
        sectionTitle: data.sectionTitle
      }
    ]

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))

    // setSections((prev) => [
    //   ...prev,
    //   {
    //     id: randomNumber(),
    //     sectionOutcome: data.sectionOutcome,
    //     lectures: [],
    //     sectionTitle: data.sectionTitle
    //   }
    // ])
  }

  const handleEditSection = (sectionEdited: IUpdateSection) => {
    /// API first
    /// Put response into this SET function

    const updatedSections = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === sectionEdited.id) {
        return {
          ...sectionItem,
          sectionOutcome: sectionEdited.sectionOutcome,
          sectionTitle: sectionEdited.sectionTitle
        }
      }

      return sectionItem
    })

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleDeleteSection = (deleteId: number) => {
    /// loading
    /// API first
    /// finish loading
    /// Put response into this SET function
    /// toast
    const updatedSections = (course.curriculums ?? []).filter((sectionItem) => sectionItem.id != deleteId)
    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleAddQuiz = (quizData: ICreateQuiz) => {
    const expectedSection = (course.curriculums ?? []).find((sectionItem) => sectionItem.id === quizData.sectionId)

    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === expectedSection?.id) {
        return {
          ...sectionItem,

          lectures: [
            ...sectionItem.lectures,
            { ...quizData, id: randomNumber(), questions: [], type: ELectureType.Quiz }
          ]
        }
      }

      return sectionItem
    })

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleUpdateQuiz = (quizData: IUpdateQuiz) => {
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === quizData.sectionId) {
        const updatedLectures = sectionItem.lectures.map((lectureItem) => {
          if (lectureItem.id === quizData.id) {
            return {
              ...lectureItem,
              title: quizData.title,
              desc: quizData.desc
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleDeleteLecture = (lectureData: IDeleteLecture) => {
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === lectureData.sectionId) {
        const updatedLectures = sectionItem.lectures.filter((lectureItem) => lectureItem.id != lectureData.id)

        return {
          ...sectionItem,
          lectures: updatedLectures
        }
      }

      return sectionItem
    })

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleAddQuestion = (data: CreateQuestionForm) => {
    /// id of question from API to pass and update state
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem: ISection) => {
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleUpdateQuestion = (
    updateQuestionFormData: UpdateQuestionForm,
    updateAnswerArrayForm: UpdateAnswerForm[]
  ) => {
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem: ISection) => {
      if (sectionItem.id === updateQuestionFormData.sectionID) {
        const updatedLectures = sectionItem.lectures.map((lectureItem: ILecture) => {
          if (lectureItem.id === updateQuestionFormData.lectureID) {
            // id from API Add, Update return
            // const newQuestionId = randomNumber()

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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleDeleteQuestion = (questionItemData: IDeleteQuestion) => {
    const updatedSections = (course.curriculums ?? []).map((sectionItem: ISection) => {
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleAddLecture = (addLectureForm: CreateLectureForm) => {
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === addLectureForm.sectionId) {
        return {
          ...sectionItem,

          lectures: [...sectionItem.lectures, { ...addLectureForm, id: randomNumber() }]
        }
      }

      return sectionItem
    })

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleUploadLectureVideo = (updateVideoForm: UpdateVideoForm) => {
    // API then receiver all info for updated Asset
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === updateVideoForm.section_id) {
        const updatedLectures = sectionItem.lectures.map((lectureItem) => {
          if (lectureItem.id === updateVideoForm.lecture_id) {
            return {
              ...lectureItem,
              assets: [
                ...(lectureItem.assets ?? []),
                {
                  id: Math.random(),
                  bunnyID: Math.random() + 1 + '',
                  url: '',
                  type: EAssetType.VideoWatch,
                  duration: 5,
                  name: updateVideoForm.video[0].name,
                  size: updateVideoForm.video[0].size,
                  lecture_id: updateVideoForm.lecture_id,
                  updated_at: new Date().toISOString(),
                  created_at: new Date().toISOString()
                }
              ]
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleReplaceLectureVideo = (updateVideoForm: UpdateVideoForm) => {
    // API then receiver all info for updated Asset
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === updateVideoForm.section_id) {
        const updatedLectures = sectionItem.lectures.map((lectureItem) => {
          if (lectureItem.id === updateVideoForm.lecture_id) {
            return {
              ...lectureItem,
              assets: (lectureItem.assets ?? []).map((assetItem) => {
                if (assetItem.type === EAssetType.VideoWatch) {
                  return {
                    id: randomNumber(),
                    bunnyID: randomNumber() + '',
                    url: '',
                    type: EAssetType.VideoWatch,
                    duration: 5,
                    name: updateVideoForm.video[0].name,
                    size: updateVideoForm.video[0].size,
                    lecture_id: updateVideoForm.lecture_id,
                    updated_at: new Date().toISOString(),
                    created_at: new Date().toISOString()
                  }
                }

                return assetItem
              })
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleUpdateLectureDesc = (formData: UpdateLectureDesc) => {
    /// API

    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === formData.section_id) {
        const updatedLectures = sectionItem.lectures.map((lectureItem) => {
          if (lectureItem.id === formData.lecture_id) {
            return {
              ...lectureItem,
              desc: formData.description
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleAddLectureResource = (updateResourceFormData: UpdateResource) => {
    // API then receiver all info for updated Asset
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === updateResourceFormData.section_id) {
        const updatedLectures = sectionItem.lectures.map((lectureItem) => {
          if (lectureItem.id === updateResourceFormData.lecture_id) {
            return {
              ...lectureItem,
              assets: [
                ...(lectureItem.assets ?? []),
                {
                  id: Math.random(),
                  bunnyID: Math.random() + 1 + '',
                  url: '',
                  type: EAssetType.Resource,
                  duration: 5,
                  name: updateResourceFormData.resource[0].name,
                  size: updateResourceFormData.resource[0].size,
                  lecture_id: updateResourceFormData.lecture_id,
                  updated_at: new Date().toISOString(),
                  created_at: new Date().toISOString()
                }
              ]
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }
  const handleDeleteResource = (deleteResourceFormData: IDeleteResource) => {
    // API then receiver all info for updated Asset
    const updatedSections: ISection[] = (course.curriculums ?? []).map((sectionItem) => {
      if (sectionItem.id === deleteResourceFormData.section_id) {
        const updatedLectures = sectionItem.lectures.map((lectureItem) => {
          if (lectureItem.id === deleteResourceFormData.lecture_id) {
            return {
              ...lectureItem,
              assets: [...(lectureItem.assets ?? []).filter((item) => item.id !== deleteResourceFormData.resource_id)]
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

    setCourse((prev) => ({
      ...prev,

      curriculums: updatedSections
    }))
  }

  const handleUpdateCourseLandingPage = (updateCourseLandingPage: UpdateCourseLandingPageForm, courseImage?: File) => {
    const updatedCourse: Course = {
      ...course,
      ...updateCourseLandingPage,

      /// URL Image from API return
      image: courseImage ? '' : null
    }

    setCourse({
      ...updatedCourse
    })
  }

  const handleUpdateCoursePrice = (formData: UpdateCoursePrice, courseId: number) => {
    const updatedCourse: Course = {
      ...course,
      price_id: formData.tier
    }

    setCourse({
      ...updatedCourse
    })
  }

  const handleUpdateIntendedLearner = (formData: IntendedLearnForm, courseId: number) => {
    const updatedCourse: Course = {
      ...course,
      out_comes: formData.out_comes.map((item) => item.value),
      intended_for: formData.intended_for?.map((item) => item.value),
      requirements: formData.requirements?.map((item) => item.value)
    }

    setCourse({
      ...updatedCourse
    })
  }
  console.log(course.curriculums)

  return (
    <div className={styles.layoutWrapper}>
      <div className='headerWrapper'>
        <NavLink to='/instructor/courses'>
          <div className='backBtn ud-btn ud-btn-small ud-btn-ghost ud-text-md'>
            <div className='iconContainer'>
              <IoIosArrowBack />
            </div>
            <span>Back to courses</span>
          </div>
        </NavLink>

        <div className='restPart'>
          <div className='infoPart'>
            <div className='courseTitle ud-heading-lg'>Learn HTML in minute </div>
            <div className='courseStatus ud-badge ud-heading-xs'>Draft</div>
            <div className='courseUploadedTime'>0min of video content uploaded</div>
          </div>

          <div className='actionPart'>
            {/* <button className='saveBtn ud-btn ud-btn-small ud-btn-white-solid ud-heading-sm disabledBtn'>
              <span>Save</span>
            </button> */}

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
              course: course,
              handleAddSection,
              handleEditSection,
              handleDeleteSection,
              handleAddQuiz,
              handleUpdateQuiz,
              handleDeleteLecture,
              handleAddQuestion,
              handleUpdateQuestion,
              handleDeleteQuestion,
              handleUploadLectureVideo,
              handleReplaceLectureVideo,
              handleUpdateLectureDesc,
              handleAddLectureResource,
              handleDeleteResource,
              handleAddLecture,
              handleUpdateCourseLandingPage,
              handleUpdateCoursePrice,
              handleUpdateIntendedLearner
            }}
          >
            {renderedTab === 'goals' && <CourseGoals />}

            {renderedTab === 'curriculum' && <CourseCurriculum />}
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
