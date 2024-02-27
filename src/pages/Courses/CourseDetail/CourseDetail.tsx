import React, { useState } from 'react'

import styles from './CourseDetail.module.scss'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Bestseller, UpdatedRecently } from '../../../components/Badges/Badges'
import RatingContainer from '../../Home/RatingContainer'

import { BsPatchExclamation } from 'react-icons/bs'

import { MdLanguage } from 'react-icons/md'

import { IoCheckmark } from 'react-icons/io5'

import { IoIosArrowDown } from 'react-icons/io'

function CourseDetail() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.courseDetailPage}>
      <div className='topContainer'>
        <div className='inner'>
          <div className='mainContent'>
            {/* topic menu */}

            <div className='topicMenu'>
              <div className='breadCumb ud-heading-sm'>
                <span>Development</span>
                <MdOutlineKeyboardArrowRight color='#fff' size={18} />
                <span>Web Development</span>
              </div>
            </div>

            {/* title */}

            <div className='title ud-heading-xl'>The Complete 2024 Web Development Bootcamp</div>
            {/* headline */}
            <div className='headline ud-text-md'>
              Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL,
              Web3 and DApps
            </div>

            {/* rating badge */}

            <div className='ratingContainer'>
              <Bestseller />
              <UpdatedRecently />

              <RatingContainer averageReview={4.7} />
              <a className='ratingCount' href='/'>
                360000 rating
              </a>
              <span>1,206,049 students</span>
            </div>

            {/* instructor */}

            <div className='instructor'>
              Created by
              <a href='/'>Dr. THuan Bui</a>
            </div>

            {/* meata*/}

            <div className='meta'>
              <div className='updated'>
                <BsPatchExclamation />
                <span>Last updated 2/2024</span>
              </div>

              <div className='language'>
                <MdLanguage />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bodyContainer'>
        <div className='inner'>
          <div className='mainContent'>
            {/* what you will learn */}
            <div className='whatYouWillLearn'>
              <div className='title'>What you'll learn</div>

              <ul>
                <li>
                  <IoCheckmark size={40} />

                  <div>
                    <span>
                      Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.
                    </span>
                  </div>
                </li>
                <li>
                  <IoCheckmark size={40} />

                  <div>
                    <span>
                      Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.
                    </span>
                  </div>
                </li>
                <li>
                  <IoCheckmark size={40} />

                  <div>
                    <span>
                      Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.
                    </span>
                  </div>
                </li>
                <li>
                  <IoCheckmark size={40} />

                  <div>
                    <span>
                      Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* curriculum */}

            <div className='curriculumContainer'>
              <div className='header ud-heading-xl'>Course content</div>
              <div className='subheader ud-heading-xl'>
                <div className='contentLength ud-text-sm'>
                  <span>44 sections</span>
                  <span> • </span>
                  <span>375 lectures</span>
                  <span> • </span>
                  <span>62h&nbsp;12m total length</span>
                </div>

                <button className='ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm'>
                  <span>Expand all sections</span>
                </button>
              </div>

              <div>
                <div className='section-panel'>
                  <div className='section-toggleContainer' onClick={handleToggleOpen}>
                    <div className='section-toggler'>
                      <IoIosArrowDown className={`${isOpen && 'isOpened'} svg-icon`} />
                      <div className='section-title ud-heading-md'>Front-End Web Development</div>
                      <span>
                        <span>9 lectures</span>
                        <span> • </span>
                        <span>37min</span>
                      </span>
                    </div>
                  </div>

                  <div className='content-wrapper'></div>
                </div>
              </div>
            </div>

            {/* requirement */}

            {/* description */}

            {/* instructor */}
            {/* reviews */}
          </div>
        </div>
      </div>

      <div className='sidebarContainer'>
        {/* preview course */}

        {/* purchase */}

        {/* buy box main */}
        {/* incentives */}
      </div>
    </div>
  )
}

export default CourseDetail
