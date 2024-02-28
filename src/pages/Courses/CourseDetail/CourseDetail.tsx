import styles from './CourseDetail.module.scss'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Bestseller, UpdatedRecently } from '../../../components/Badges/Badges'
import RatingContainer from '../../Home/RatingContainer'

import { BsPatchExclamation } from 'react-icons/bs'

import { MdLanguage } from 'react-icons/md'

import SectionPanel from './SectionPanel'
import ObjectiveList from './ObjectiveList'
import { useState } from 'react'

import DescriptionSection from './DescriptionSection'
import RequirementSection from './RequirementSection'
import InstructorSection from './InstructorSection'
import ReviewSection from './ReviewSection'
import CurriculumSection from './CurriculumSection'
import ReportSection from './ReportSection'

function CourseDetail() {
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
