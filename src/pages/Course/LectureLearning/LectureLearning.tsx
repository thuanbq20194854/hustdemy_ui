import { Spin, Tabs, TabsProps } from 'antd'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import ReviewSection from './ReviewSection/ReviewSection'
import AppHeader from './AppHeader/AppHeader'
import CurriculumSidebar from './CurriculumSidebar/CurriculumSidebar'
import styles from './LectureLearning.module.scss'

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
      <AppHeader />

      <div className='pageContainer'>
        <div className='containerContent'>
          <div className='videoSection'></div>
          <CurriculumSidebar />
          <div className='dashboardSection'>
            <div className='tabWrapper'>
              <Tabs rootClassName={styles.rootTabs} items={tabsItem} onChange={(value) => handleTabChange(value)} />
            </div>

            <div className='sizingWrapper'>
              {isLoading ? <Spin rootClassName={styles.rootSpin} /> : <>{tab === TAB.Reviews && <ReviewSection />}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LectureLearning
