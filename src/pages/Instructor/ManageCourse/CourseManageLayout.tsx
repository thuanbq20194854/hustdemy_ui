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
import { ISection } from '../../../models/course'

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
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aut qui amet, at harum assumenda repudiandae. Et vitae facilis rem.',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, et.',
            question_text:
              ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ducimus qui molestiae saepe obcaecati excepturi dolor dignissimos laudantium unde ab?',
            answers: [
              {
                questionId: '1',
                id: 1,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explaination:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!'
              },
              {
                questionId: '1',
                id: 3,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explaination:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!'
              },
              {
                questionId: '1',
                id: 2,
                answer_text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto beatae nihil odit laboriosam itaque.',
                explaination:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sint labore cum asperiores voluptatum!'
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
          {renderedTab === 'goals' && <CourseGoals />}

          {renderedTab === 'curriculum' && <CourseCurriculum setSections={setSections} sections={sections} />}
          {renderedTab === 'pricing' && <CoursePricing />}

          {renderedTab === 'basics' && <CourseBasics />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CourseManageLayout
