import { ContentCourse, Course, CourseShow, Curriculum, EAssetType, ELectureType } from '@/models/course'
import { Card, Spin, Tabs, TabsProps } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import CurriculumSidebar from './CurriculumSidebar/CurriculumSidebar'
import LearningHeader from './LearningHeader/LearningHeader'
import styles from './LectureLearning.module.scss'
import QASection from './QASection/QASection'
import ReviewSection from './ReviewSection/ReviewSection'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useLectureLearningContext } from './context/LectureLearningContext'

interface ITEST {
  isCompleted: boolean
}

const TAB = {
  QAndA: 'Q&A',
  Reviews: 'Reviews'
}

function LectureLearningDetail() {
  // const initCurrentLecture = (courseCurriculum : Curriculum[]) => {

  //     if ()
  // }

  const { course } = useLectureLearningContext()
  const [currentLecture, setCurrentLecture] = useState<ContentCourse | null>()

  const [tab, setTab] = useState(TAB.QAndA)

  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    <>
      <LearningHeader />

      <div className='pageContainer'>
        <div className='containerContent'>
          <div className='videoSection'></div>
          <CurriculumSidebar />
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
    </>
  )
}

export default LectureLearningDetail
