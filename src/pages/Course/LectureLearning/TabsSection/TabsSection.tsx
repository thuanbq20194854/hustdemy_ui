import { ContentCourse } from '@/models/course'
import { Spin, Tabs, TabsProps } from 'antd'
import { useState } from 'react'
import styles from '../LectureLearning.module.scss'
import { useLectureLearningContext } from '../context/LectureLearningContext'
import QASection from './QASection/QASection'
import ReviewSection from './ReviewSection/ReviewSection'
interface ITEST {
  isCompleted: boolean
}

const TAB = {
  QAndA: 'Q&A',
  Reviews: 'Reviews'
}

function TabsSection() {
  // const initCurrentLecture = (courseCurriculum : Curriculum[]) => {

  //     if ()
  // }

  const { course } = useLectureLearningContext()

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
    <div className='dashboardSection'>
      <div className='tabWrapper'>
        <Tabs rootClassName={styles.rootTabs} items={tabsItem} onChange={(value) => handleTabChange(value)} />
      </div>

      <div className='sizingWrapper'>
        {isLoading ? (
          <Spin rootClassName={styles.rootSpin} />
        ) : (
          <>
            {tab === TAB.QAndA && <QASection setIsLoading={setIsLoading} />}

            {tab === TAB.Reviews && <ReviewSection setIsLoading={setIsLoading} />}
          </>
        )}
      </div>
    </div>
  )
}

export default TabsSection
