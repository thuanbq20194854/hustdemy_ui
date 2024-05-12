import { ContentCourse } from '@/models/course'
import { TabsProps } from 'antd'
import { useState } from 'react'
import CurriculumSidebar from './CurriculumSidebar/CurriculumSidebar'
import LearningHeader from './LearningHeader/LearningHeader'
import TabsSection from './TabsSection/TabsSection'
import { useLectureLearningContext } from './context/LectureLearningContext'

interface ITEST {
  isCompleted: boolean
}

const TAB = {
  QAndA: 'Q&A',
  Reviews: 'Reviews'
}

function LectureLearningDetail() {
  return (
    <>
      <LearningHeader />

      <div className='pageContainer'>
        <div className='containerContent'>
          <div className='videoSection'></div>

          <CurriculumSidebar />
          <TabsSection />
        </div>
      </div>
    </>
  )
}

export default LectureLearningDetail
