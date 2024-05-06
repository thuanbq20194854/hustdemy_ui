import { Course, Curriculum, EAssetType, ELectureType } from '@/models/course'
import { Spin, Tabs, TabsProps } from 'antd'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CurriculumSidebar from './CurriculumSidebar/CurriculumSidebar'
import LearningHeader from './LearningHeader/LearningHeader'
import styles from './LectureLearning.module.scss'
import QASection from './QASection/QASection'
import ReviewSection from './ReviewSection/ReviewSection'

const initCurriculum: Curriculum[] = [
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
      },
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

interface ITEST {
  isCompleted: boolean
}

const TAB = {
  QAndA: 'Q&A',
  Reviews: 'Reviews'
}

function LectureLearning() {
  const { register, watch } = useForm<ITEST>({
    defaultValues: {
      isCompleted: false
    }
  })

  const [course, setCourse] = useState<Course>(initCourseData)

  const [tab, setTab] = useState(TAB.QAndA)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  console.log('watch: ', watch())

  const tabsItem: TabsProps['items'] = [
    {
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button navBtn'>
          <span>Q&A</span>
        </button>
      ),

      key: TAB.QAndA
    },
    {
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button navBtn'>
          <span>Reviews</span>
        </button>
      ),
      key: TAB.Reviews
    }
  ]

  const handleTabChange = async (value: string) => {
    setIsLoading(true)
    setTab(value)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className={styles.pageWrapper}>
      <LearningHeader course={course} />

      <div className='pageContainer'>
        <div className='containerContent'>
          <div className='videoSection'></div>
          <CurriculumSidebar course={course} />
          <div className='dashboardSection'>
            <div className='tabWrapper'>
              <Tabs rootClassName={styles.rootTabs} items={tabsItem} onChange={(value) => handleTabChange(value)} />
            </div>

            <div className='sizingWrapper'>
              {isLoading ? (
                <Spin rootClassName={styles.rootSpin} />
              ) : (
                <>
                  {tab === TAB.QAndA && <QASection />}

                  {tab === TAB.Reviews && <ReviewSection />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LectureLearning
