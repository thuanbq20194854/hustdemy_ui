import CurriculumSidebar from './CurriculumSidebar/CurriculumSidebar'
import LearningHeader from './LearningHeader/LearningHeader'
import LectureContent from './LectureContent.tsx/LectureContent'
import TabsSection from './TabsSection/TabsSection'

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
          <LectureContent />
          <CurriculumSidebar />
          <TabsSection />
        </div>
      </div>
    </>
  )
}

export default LectureLearningDetail
