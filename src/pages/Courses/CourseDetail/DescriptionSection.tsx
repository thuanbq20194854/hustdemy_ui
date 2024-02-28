import React, { useState } from 'react'

import styles from './DescriptionSection.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
function DescriptionSection() {
  const [isContentShowm, setIsContentShown] = useState(false)

  const handleToggleShow = () => {
    setIsContentShown((prev) => !prev)
  }

  return (
    <div className={styles.descriptionSection}>
      <div className='title ud-heading-xl'>Description</div>

      <div className={`content ${isContentShowm && 'show'}`}>
        <span>
          Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a
          full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the
          HIGHEST RATED courses in the history of Udemy! At 62+ hours, this Web Development course is without a doubt
          the most comprehensive web development course available online. Even if you have zero programming experience,
          this course will take you from beginner to mastery. Here's why: The course is taught by the lead instructor at
          the App Brewery, London's leading in-person programming bootcamp. The course has been updated to be 2024 ready
          and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and
          Netflix. This course doesn't cut any corners, there are beautiful animated explanation videos and tens of
          real-world projects which you will get to build. The curriculum was developed over a period of four years,
          with comprehensive student testing and feedback. We've taught over a million students how to code and many
          have gone on to change their lives by becoming professional developers or starting their own tech startup.
          You'll save yourself over 12,000 USD by enrolling, but still get access to the same teaching materials and
          learn from the same instructor and curriculum as our in-person programming bootcamp. The course is constantly
          updated with new content, with new projects and modules determined by students - that's you! We'll take you
          step-by-step through engaging video tutorials and teach you everything you need to know to succeed as a web
          developer. The course includes over 62 hours of HD video tutorials and builds your programming knowledge while
          making real-world websites and web apps.
        </span>
      </div>
      <button className='showBtn ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm' onClick={handleToggleShow}>
        <span>Show {!isContentShowm ? 'more' : 'less'}</span>
        <IoIosArrowDown className={`${isContentShowm && 'rotate'} iconArrow`} />
      </button>
    </div>
  )
}

export default DescriptionSection
