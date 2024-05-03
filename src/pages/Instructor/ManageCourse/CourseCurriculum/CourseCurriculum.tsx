import { useCourseManageContext } from '../context/CourseMangeContext'
import AddSectionForm from './AddSectionForm'
import styles from './CourseCurriculum.module.scss'
import SectionItem from './SectionItem'

function CourseCurriculum() {
  const { course } = useCourseManageContext()
  return (
    <div className={styles.courseCurriculumPage}>
      <div className='subHeaderWrapper'>
        <div className='subHeaderContent ud-heading-serif-xl'>Curriculum</div>
      </div>

      <div className='mainContent'>
        <div className='alertContainer'>
          <p>
            Start putting together your course by creating sections, lectures and practice activities (
            <span className='ud-link-underline' style={{ color: '#5624d0' }}>
              quizzes, coding exercises and assignments
            </span>
            ). Use your
            <span className='ud-link-underline' style={{ color: '#5624d0', marginLeft: '6px', marginRight: '6px' }}>
              course outline
            </span>
            to structure your content and label your sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than 2 hours.
          </p>
        </div>

        <div className='curriculumPart'>
          {(course?.curriculums ?? []).map((sectionItem, index) => (
            <SectionItem index={index + 1} key={sectionItem.id} section={sectionItem} />
          ))}

          <AddSectionForm />
        </div>
      </div>
    </div>
  )
}

export default CourseCurriculum
