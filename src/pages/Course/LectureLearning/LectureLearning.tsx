import { ContentCourse, CourseShow, Curriculum, EAssetType, ELectureType } from '@/models/course'
import { Card } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useSearchParams } from 'react-router-dom'
import styles from './LectureLearning.module.scss'
import LectureLearningDetail from './LectureLearningDetail'
import { LectureLearningContextProvider } from './context/LectureLearningContext'

const initCurriculums: Curriculum[] = [
  {
    id: 1,

    course_id: 1,

    title: 'Introduction',

    description: 'Get the first 10 grade',
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),

    lectures: [
      {
        curriculum_id: 1,
        id: 2,
        type: ELectureType.Quiz,
        title: 'Mini Test Quiz  Revision',
        description: '<h2>Description test 123123123123123232</h2> ',
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
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 3,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: true,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 2,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 4,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              }
            ]
          }
        ],
        assets: [],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: true,
        is_promotional: false,
        order: 2
      },
      {
        curriculum_id: 1,
        id: 1,
        type: ELectureType.Lecture,
        title: 'Hello world with C#',
        description: '<p>Description test 123123123123123232</p> ',
        assets: [
          {
            id: 1,
            bunnyID: Math.random() + 1 + '',
            url: '',
            type: EAssetType.VideoWatch,
            duration: 122,
            name: 'Screenshot 2024-03-05 001222.png',
            size: 7000,
            lecture_id: 1,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          },
          {
            id: 2,
            bunnyID: Math.random() + 1 + '',
            url: '',
            type: EAssetType.Resource,
            duration: 5,
            name: 'Screenshot 1111 001222.png',
            size: 7000,
            lecture_id: 1,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          },
          {
            id: 3,
            bunnyID: Math.random() + 1 + '',
            url: '',
            type: EAssetType.Resource,
            duration: 5,
            name: 'Screenshot 22222 001222.png',
            size: 7000,
            lecture_id: 1,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          }
        ],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: true,
        is_promotional: false,
        order: 1,
        questions: []
      }
    ]
  },
  {
    id: 2,

    course_id: 1,

    title: 'Introduction',

    description: 'Get the first 10 grade',
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),

    lectures: [
      {
        curriculum_id: 2,
        id: 3,
        type: ELectureType.Lecture,
        title: 'Hello world with C#',
        description: '<p>Description test 123123123123123232</p> ',
        assets: [
          {
            id: Math.random(),
            bunnyID: Math.random() + 1 + '',
            url: '',
            type: EAssetType.VideoWatch,
            duration: 5,
            name: 'Screenshot 2024-03-05 001222.png',
            size: 7000,
            lecture_id: 1,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          }
        ],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: true,
        is_promotional: false,
        order: 1,
        questions: []
      },
      {
        curriculum_id: 2,
        id: 4,
        type: ELectureType.Quiz,
        title: 'Mini Test Quiz  Revision',
        description: '<h2>Description test 123123123123123232</h2> ',
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
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 3,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: true,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 2,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 4,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              }
            ]
          }
        ],
        assets: [],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: true,
        is_promotional: false,
        order: 2
      }
    ]
  },
  {
    id: 3,

    course_id: 1,

    title: 'Introduction',

    description: 'Get the first 10 grade',
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),

    lectures: [
      {
        curriculum_id: 3,
        id: 5,
        type: ELectureType.Lecture,
        title: 'Hello world with C#',
        description: '<p>Description test 123123123123123232</p> ',
        assets: [
          {
            id: Math.random(),
            bunnyID: Math.random() + 1 + '',
            url: '',
            type: EAssetType.VideoWatch,
            duration: 5,
            name: 'Screenshot 2024-03-05 001222.png',
            size: 7000,
            lecture_id: 1,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          }
        ],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: false,
        is_promotional: false,
        order: 1,
        questions: []
      },
      {
        curriculum_id: 3,
        id: 6,
        type: ELectureType.Quiz,
        title: 'Mini Test Quiz  Revision',
        description: '<h2>Description test 123123123123123232</h2> ',
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
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 3,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: true,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 2,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 4,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              }
            ]
          }
        ],
        assets: [],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: true,
        is_promotional: false,
        order: 2
      }
    ]
  },
  {
    id: 4,

    course_id: 1,

    title: 'Introduction',

    description: 'Get the first 10 grade',
    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),

    lectures: [
      {
        curriculum_id: 4,
        id: 7,
        type: ELectureType.Lecture,
        title: 'Hello world with C#',
        description: '<p>Description test 123123123123123232</p> ',
        assets: [
          {
            id: Math.random(),
            bunnyID: Math.random() + 1 + '',
            url: '',
            type: EAssetType.VideoWatch,
            duration: 5,
            name: 'Screenshot 2024-03-05 001222.png',
            size: 7000,
            lecture_id: 1,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          }
        ],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: false,
        is_promotional: false,
        order: 1,
        questions: []
      },
      {
        curriculum_id: 4,
        id: 8,
        type: ELectureType.Quiz,
        title: 'Mini Test Quiz  Revision',
        description: '<h2>Description test 123123123123123232</h2> ',
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
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 3,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: true,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 2,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              },
              {
                question_id: 1,
                id: 4,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explain:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!',
                is_correct: false,
                updated_at: '05 October 2011 14:48 UTC',
                created_at: '05 October 2011 14:48 UTC'
              }
            ]
          }
        ],
        assets: [],
        article: null,
        created_at: '',
        updated_at: '',
        is_done: false,
        is_promotional: false,
        order: 2
      }
    ]
  }
]

const initCourseShow: CourseShow = {
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
  title: 'Docker & Kubernetes: The Practical Guide [2024 Edition]',
  review_status: 1,
  welcome_message: null,
  congratulations_message: null,
  subtitle:
    'Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up!',
  primarily_teach: null,
  description: '<p>KEKE</p>',
  status: 1,
  promotional_video: null,
  image:
    'https://images.pexels.com/photos/18536697/pexels-photo-18536697/free-photo-of-woman-in-a-dress-dancing-on-a-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  curriculums: initCurriculums,
  updated_at: '',
  created_at: '',
  average_review: 3.5,
  count_review: 1578,
  count_student: 200,
  category: {
    id: 3,
    name: 'Programming',
    parent_id: 1,
    children: null,
    created_at: '05 October 2011 14:48 UTC',
    updated_at: '05 October 2011 14:48 UTC'
  },
  language: {
    id: 1,
    name: 'English',
    created_at: '05 October 2011 14:48 UTC',
    updated_at: '05 October 2011 14:48 UTC'
  },
  level: {
    id: 1,
    name: 'Intermediate',
    created_at: '05 October 2011 14:48 UTC',
    updated_at: '05 October 2011 14:48 UTC'
  },
  price: {
    id: 1,
    tier: '50-100',
    value: 75,
    created_at: '05 October 2011 14:48 UTC',
    updated_at: '05 October 2011 14:48 UTC'
  },
  sub_category: {
    id: 3,
    name: 'Programming',
    parent_id: 1,
    children: null,
    created_at: '05 October 2011 14:48 UTC',
    updated_at: '05 October 2011 14:48 UTC'
  },
  user: {
    id: 1,
    name: 'Damian Tony'
  }
}

const TAB = {
  QAndA: 'Q&A',
  Reviews: 'Reviews'
}

export interface MarkLecture {
  lecture_id: number
  curriculum_id: number
}

const initCurrentLecture = (curriculums: Curriculum[]) => {
  if (!curriculums || curriculums.length === 0 || curriculums[0].lectures.length === 0) {
    return null
  } else {
    const lecturenInfo = curriculums[0].lectures[0]

    if (lecturenInfo.type === ELectureType.Lecture) {
      return {
        type: 'video',
        id: lecturenInfo.id,
        curriculumID: curriculums[0].id,

        index: 0,

        content: {
          url: 'https://iframe.mediadelivery.net/play/155247/fee1d27b-4728-4c7b-8484-1eb4cd21a3cf'
        }
      }
    } else {
      return {
        type: 'quiz',
        id: lecturenInfo.id,
        curriculumID: curriculums[0].id,
        index: 0,
        content: {
          indexNumber: 'Quiz 1:',
          title: curriculums[0].lectures[0].title,
          questions: curriculums[0].lectures[0].questions
        }
      }
    }
  }
}

function LectureLearning() {
  const [course, setCourse] = useState<CourseShow>(initCourseShow)

  const [currentLecture, setCurrentLecture] = useState<ContentCourse | null>(initCurrentLecture(course.curriculums))

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [searchParams, setSearchParams] = useSearchParams()

  const courseId = searchParams.get('courseId')

  useEffect(() => {
    // fetch API Course by id
    //
  }, [])

  const handleUpdateCompleteLecure = (formData: MarkLecture) => {
    const updatedCurriculum = course.curriculums.map((curriculumItem) => {
      if (curriculumItem.id === formData.curriculum_id) {
        const updatedLectures = curriculumItem.lectures.map((lectureItem) => {
          if (lectureItem.id === formData.lecture_id) {
            return {
              ...lectureItem,
              is_done: true
            }
          }
          return lectureItem
        })

        return {
          ...curriculumItem,

          lectures: updatedLectures
        }
      }
      return curriculumItem
    })

    setCourse({
      ...course,
      curriculums: updatedCurriculum
    })
  }

  return (
    <div className={styles.pageWrapper}>
      {!course ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card>
            <h4>Course not found</h4>
            <NavLink to='/'>Back To Home</NavLink>
          </Card>
        </div>
      ) : (
        <>
          <LectureLearningContextProvider
            value={{
              course: course,
              currentLecture: currentLecture,
              handleUpdateCompleteLecure: handleUpdateCompleteLecure,
              setCurrentLecture: setCurrentLecture
            }}
          >
            <LectureLearningDetail />
          </LectureLearningContextProvider>
        </>
      )}
    </div>
  )
}

export default LectureLearning
