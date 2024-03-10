import React from 'react'

import styles from './CourseCurriculum.module.scss'
import SectionItem from './SectionItem'

function CourseCurriculum() {
  const handleUpdateSection = () => {
    // API Update Section
    // Loading
    // Toasting
  }
  return (
    <div className={styles.courseCurriculumPage}>
      <div className='subHeaderWrapper'>
        <div className='subHeaderContent ud-heading-serif-xl'>Curriculum</div>
      </div>

      <div className='mainContent'>
        <div className='alertContainer'>
          <p>
            Start putting together your course by creating sections, lectures and practice activities (
            <span className='ud-link-underline' color='#5624d0'>
              quizzes, coding exercises and assignments
            </span>
            ). Use your
            <span className='ud-link-underline' color='#5624d0'>
              course outline
            </span>
            to structure your content and label your sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than 2 hours.
          </p>
        </div>

        <div className='curriculumPart'>
          <SectionItem handleUpdateSection={handleUpdateSection} />
        </div>
      </div>
    </div>
  )
}

export default CourseCurriculum
