import styles from './CourseDetail.module.scss'
import { MdOutlineAlarm, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Bestseller, UpdatedRecently } from '../../../components/Badges/Badges'
import RatingContainer from '../../../components/RatingContainer/RatingContainer'

import { BsPatchExclamation } from 'react-icons/bs'
import { IoIosHeartEmpty } from 'react-icons/io'

import { MdLanguage } from 'react-icons/md'
import { LuPlaySquare } from 'react-icons/lu'

import ObjectiveList from './ObjectiveList'
import { useEffect, useRef, useState } from 'react'

import DescriptionSection from './DescriptionSection'
import RequirementSection from './RequirementSection'
import InstructorSection from './InstructorSection'
import ReviewSection from './ReviewSection'
import CurriculumSection from './CurriculumSection'
import ReportSection from './ReportSection'
import { IoCodeOutline } from 'react-icons/io5'
import { CiFileOn, CiMobile4 } from 'react-icons/ci'
import { RiFolderDownloadLine } from 'react-icons/ri'
import { TfiInfinite } from 'react-icons/tfi'
import { GoTrophy } from 'react-icons/go'
import { NavLink } from 'react-router-dom'

function CourseDetail() {
  const targetRef = useRef(null)
  const fixedRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 1 // Trigger the intersection callback when any part of the target element enters the viewport
      }
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])

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

          <div className={`sidebar ${isIntersecting && 'fixed'}`} ref={fixedRef}>
            <div className='introductionVideo'>
              <img src='https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg' alt='' />
            </div>

            <div className='purchaseSection'>
              <div className='price'>
                <div className='currentPrice ud-heading-xxl'> ₫249,000</div>
                <div className='basePrice'>₫1,599,000</div>
                <div className='discount ud-text-sm'>84% off</div>
              </div>

              <div className='discountExpiration'>
                <MdOutlineAlarm />
                <b>1 day</b>
                <span>left at this price!</span>
              </div>

              <div className='actions'>
                <div className='topActions'>
                  <button className='addToCartBtn ud-btn ud-btn-large ud-btn-brand ud-heading-md add-to-cart'>
                    <NavLink to='/cart'>
                      <span>Go to cart</span>
                    </NavLink>
                  </button>

                  <button className='addToWishlistBtn ud-btn ud-btn-large ud-btn-secondary ud-heading-md ud-btn-icon ud-btn-icon-large'>
                    <IoIosHeartEmpty fill='#2d2f31' />
                  </button>
                </div>

                <button className='buynowBtn ud-btn ud-btn-large ud-btn-primary ud-heading-md'>
                  <NavLink to='/PAYMENT'>Buy now</NavLink>
                </button>
              </div>

              <div className='incentivesContainer'>
                <div className='title ud-heading-md'>This course includes:</div>

                <ul className='incentiveList'>
                  <li className='incentiveItem'>
                    <LuPlaySquare />
                    <span>61.5 hours on-demand video</span>
                  </li>
                  <li className='incentiveItem'>
                    <IoCodeOutline />
                    <span>7 coding exercises</span>
                  </li>
                  <li className='incentiveItem'>
                    <RiFolderDownloadLine />
                    <span>121 downloadable resources</span>
                  </li>
                  <li className='incentiveItem'>
                    <CiMobile4 />
                    <span>Access on mobile</span>
                  </li>
                  <li className='incentiveItem'>
                    <TfiInfinite />
                    <span>Fulltime life access</span>
                  </li>
                  <li className='incentiveItem'>
                    <GoTrophy />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bodyContainer' ref={targetRef}>
        <div className='inner'>
          <div className='mainContent'>
            {/* what you will learn */}
            <ObjectiveList />

            {/* curriculum */}

            <CurriculumSection />

            {/* requirement */}

            <RequirementSection />

            {/* description */}

            <DescriptionSection />

            {/* instructor */}
            <InstructorSection />

            {/* reviews */}
            <ReviewSection />

            {/* Report Abuse */}
            <ReportSection />
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
