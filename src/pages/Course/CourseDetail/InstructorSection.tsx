import React, { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { MdPreview } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { FaPlayCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import styles from './InstructorSection.module.scss'
function InstructorSection() {
  const [isContentShowm, setIsContentShown] = useState(false)

  const handleToggleShow = () => {
    setIsContentShown((prev) => !prev)
  }

  return (
    <div className={styles.instructorSection}>
      <div className='title ud-heading-xl'>Instructor</div>
      <NavLink className='ud-heading-lg ud-link-underline' to='/instructor:id'>
        <div className='instructorTitle ud-heading-lg ud-link-underline'>Dr. Angela Yu</div>
      </NavLink>
      <div className='jobTitle ud-text-md'>Developer and Lead Instructor</div>

      <div className='imageAndStats'>
        <div className='imgContainer'>
          <img src='https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg' alt='' />
        </div>
        <div className='stats'>
          <div className='ratingCount'>
            <MdOutlineStarPurple500 />
            <span>4.7 Instructor Rating</span>
          </div>
          <div className='reviewCount'>
            <MdPreview />
            <span>899,999 Reviews</span>
          </div>
          <div className='studentCount'>
            <BsPeopleFill />
            <span>7,899,999 Students</span>
          </div>
          <div className='courseCount'>
            <FaPlayCircle />
            <span>7 courses</span>
          </div>
        </div>
      </div>
      <div className={`description ${isContentShowm && 'show'}`}>
        I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery,
        London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change
        their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to
        teach their employees. My first foray into programming was when I was just 12 years old, wanting to build my own
        Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised
        that my greatest passion is teaching. I spend most of my time researching how to make learning to code fun and
        make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses,
        you'll find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to
        understand. I'll be there for you every step of the way. I'm Angela, I'm a developer with a passion for
        teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped
        hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been
        invited by companies such as Twitter, Facebook and Google to teach their employees. My first foray into
        programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made
        hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching. I
        spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I
        apply everything I discover into my bootcamp courses. In my courses, you'll find lots of geeky humour but also
        lots of explanations and animations to make sure everything is easy to understand. I'll be there for you every
        step of the way.
      </div>

      <button className='showBtn ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm' onClick={handleToggleShow}>
        <span>Show {!isContentShowm ? 'more' : 'less'}</span>
        <IoIosArrowDown className={`${isContentShowm && 'rotate'} iconArrow`} />
      </button>
    </div>
  )
}

export default InstructorSection
