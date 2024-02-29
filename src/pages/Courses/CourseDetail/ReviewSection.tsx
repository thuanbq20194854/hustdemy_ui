import React, { useState } from 'react'

import styles from './ReviewSection.module.scss'

import { IoStar } from 'react-icons/io5'
import { BsDot } from 'react-icons/bs'
import RatingContainer from '../../../components/RatingContainer/RatingContainer'
import { RiMore2Fill } from 'react-icons/ri'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import { Modal } from 'antd'
import { useBoolean } from '../../../hooks/useBoolean'

import { IoClose } from 'react-icons/io5'

const fakeFilters = [
  {
    id: '1',
    order: 1,
    percent: 20
  },
  {
    id: '1',
    order: 2,
    percent: 20
  },
  {
    id: '1',
    order: 3,
    percent: 20
  },
  {
    id: '1',
    order: 4,
    percent: 20
  },
  {
    id: '1',
    order: 5,
    percent: 20
  }
]

function ReviewSection() {
  const [isOpen, handleOpen, handleClose] = useBoolean()

  const initialFilter = [1, 2, 3, 4, 5]

  const [filterRateOrder, setFilterRateOrder] = useState(initialFilter)

  const handleSelectFilterOptions = (passOrdered: number) => {
    setFilterRateOrder((prev) => [passOrdered])
  }

  const resetFilter = () => {
    setFilterRateOrder(initialFilter)
  }

  return (
    <div className={styles.reviewSection}>
      <div className='title ud-heading-xl'>
        <div className='courseRating'>
          <IoStar fill='#b4690e' />
          <span>4.7 course rating</span>
        </div>
        <BsDot fill='#6a6f73' />
        <span className='ratingCount'>362K ratings</span>
      </div>

      <div className='reviews'>
        {Array(5)
          .fill(0)
          .slice(0, 4)
          .map((item, index) => (
            <div className='reviewContainer' key={index}>
              <div className='heading'>
                <div className='imgContainer'>
                  <img src='https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg' alt='' />
                </div>

                <div className='name-and-rating'>
                  <div className='name ud-heading-md'>Akshay K.</div>
                  <div className='rating'>
                    <RatingContainer averageReview={4.5} />
                    <span className='ud-heading-xs'>2 weeks ago</span>
                  </div>
                </div>

                <RiMore2Fill className='moreIcon' />
              </div>
              <div className='content'>
                I really liked the build first approach in this course, you basically build a mini project for every
                section you learn. Some sections are little outdated but Angela is adding constant updates.
              </div>

              <div className='feedback'>
                <span className='ud-text-xs'>Helpful?</span>
                <BiLike />
                <BiDislike />
              </div>
            </div>
          ))}
      </div>

      <button className='showReviewBtn ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm' onClick={handleOpen}>
        <span>Show all reviews</span>
      </button>

      <Modal open={isOpen} closeIcon={<IoClose onClick={handleClose} />} rootClassName={styles.rootClassModal}>
        <div className='title ud-heading-xl'>
          <div className='courseRating'>
            <IoStar className='starIcon' fill='#b4690e' />
            <span>4.7 course rating</span>
          </div>
          <BsDot fill='#6a6f73' />
          <span className='ratingCount'>362K ratings</span>
        </div>

        <div className='content'>
          <div className='reviewControls'>
            <div className='ratingFilter'>
              {fakeFilters
                .sort((itemA, ItemB) => {
                  if (itemA.order > ItemB.order) return -1
                  if (itemA.order < ItemB.order) return 1
                  return 0
                })
                .map((item) => (
                  <button
                    className='filterRow'
                    key={item.id}
                    style={{ opacity: filterRateOrder.includes(item.order) ? '1' : '0.25' }}
                    onClick={() => {
                      filterRateOrder.includes(item.order) && filterRateOrder.length === 1
                        ? resetFilter()
                        : handleSelectFilterOptions(item.order)
                    }}
                  >
                    <div className='ratingPercentBar'>
                      <div className='inner' style={{ width: item.percent + '%' }}></div>
                    </div>
                    <RatingContainer showNumber={false} averageReview={item.order} />
                    <div className='ratePercent ud-text-xs'>{item.percent}</div>
                    <button className='closeBtn'>
                      <IoClose />
                    </button>
                  </button>
                ))}
            </div>
          </div>

          <div className='reviewList'>
            {Array(10)
              .fill(0)
              .map((item, index) => (
                <div className='reviewContainer' key={index}>
                  <div className='heading'>
                    <div className='imgContainer'>
                      <img src='https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg' alt='' />
                    </div>

                    <div className='name-and-rating'>
                      <div className='name ud-heading-md'>Akshay K.</div>
                      <div className='rating'>
                        <RatingContainer averageReview={4.5} />
                        <span className='ud-heading-xs'>2 weeks ago</span>
                      </div>
                    </div>

                    <RiMore2Fill className='moreIcon' />
                  </div>
                  <div className='content'>
                    I really liked the build first approach in this course, you basically build a mini project for every
                    section you learn. Some sections are little outdated but Angela is adding constant updates.
                  </div>

                  <div className='feedback'>
                    <span className='ud-text-xs'>Helpful?</span>
                    <BiLike />
                    <BiDislike />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ReviewSection
