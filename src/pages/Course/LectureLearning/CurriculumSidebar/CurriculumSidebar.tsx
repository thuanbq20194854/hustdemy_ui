import { useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import AccordionPanel from './AccordionPanel'

import { Course, CourseShow, Curriculum, ELectureType } from '@/models/course'
import LearningLectureItem from './LearningLectureItem'
import { useLectureLearningContext } from '../context/LectureLearningContext'

function CurriculumSidebar() {
  // const [curriculumContent, setCurriculumContent] = useState<Curriculum[]>(course.curriculums)

  const { course } = useLectureLearningContext()

  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const element: HTMLDivElement | null = sidebarRef.current

      if (element && scrollPosition < 56) {
        element.style.top = `${56 - scrollPosition}px`
      } else if (element) {
        element.style.top = '0px'
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let quizIndex = 0
  let lectureIndex = 0

  const convertToHourMins = (passedMin: number) => {
    const hour = Math.floor(passedMin / 60)
    const minute = passedMin % 60

    if (hour === 0) {
      return `${minute}min`
    } else {
      return `${hour}hr${minute}min`
    }
  }

  return (
    <div className='curriculumSiderbar' ref={sidebarRef}>
      <div className='sidebar--header'>
        <h2 className='ud-heading-md'>Course content</h2>
        <button className='ud-btn ud-btn-large ud-btn-link ud-heading-md ud-link-neutral sidebar--closeBtn'>
          <IoMdClose size={20} />
        </button>
      </div>

      <div className='sidebar--content'>
        {course?.curriculums.map((curriculumItem, index) => (
          <AccordionPanel
            title={`Section ${index + 1}: ${curriculumItem.title}`}
            key={curriculumItem.id}
            totalLecture={curriculumItem.lectures.length}
            completedLecture={curriculumItem.lectures.filter((lectureItem) => lectureItem.is_done).length}
          >
            {curriculumItem.lectures.map((lectureItem) => {
              return (
                <LearningLectureItem
                  key={lectureItem.id}
                  index={lectureItem.type === ELectureType.Lecture ? ++lectureIndex : ++quizIndex}
                  lectureItem={lectureItem}
                />
              )
            })}
          </AccordionPanel>
        ))}
      </div>
    </div>
  )
}

export default CurriculumSidebar
