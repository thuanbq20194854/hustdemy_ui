import { ContentCourse, EContentCourseType } from '@/models/course'
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
  const { currentLecture } = useLectureLearningContext()
  return (
    <>
      <LearningHeader />

      <div className='pageContainer'>
        <div className='containerContent'>
          <div className='lectureContent'>
            {currentLecture?.type === EContentCourseType.Video && (
              <div className='videoWrapper'>
                <iframe
                  // src={`https://iframe.mediadelivery.net/embed/155247/${contentCourse.content?.url}?autoplay=false&loop=false&muted=false&preload=true`}
                  src={`https://iframe.mediadelivery.net/play/155247/fee1d27b-4728-4c7b-8484-1eb4cd21a3cf`}
                  loading='lazy'
                  style={{
                    border: 0,
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: '100%'
                  }}
                  allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
                  allowFullScreen={true}
                  className='iframeElement'
                ></iframe>
              </div>
            )}

            {/* Quiz */}

            {/* Handle Next */}

            {/* Handle Prev */}

            {/* Handle Skip */}
          </div>

          <CurriculumSidebar />
          <TabsSection />
        </div>
      </div>
    </>
  )
}

export default LectureLearningDetail
