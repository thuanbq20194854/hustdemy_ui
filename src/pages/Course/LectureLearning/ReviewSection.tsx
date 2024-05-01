import RatingContainer from '@/components/RatingContainer/RatingContainer'
import { useBoolean } from '@/hooks/useBoolean'
import React, { useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { IoClose, IoStar } from 'react-icons/io5'
import { RiMore2Fill } from 'react-icons/ri'

import styles from './LectureLearning.module.scss'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'

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
  const initialFilter = [1, 2, 3, 4, 5]

  const [filterRateOrder, setFilterRateOrder] = useState(initialFilter)

  const [searchInput, setSearchInput] = useState('')

  const [ratingOption, setRatingOption] = useState(-1)

  const [totalPage, setTotalPage] = useState(1)

  const handleSelectFilterOptions = (passOrdered: number) => {
    setFilterRateOrder((prev) => [passOrdered])
    setRatingOption(passOrdered)
  }

  const handleRatingOptionChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setRatingOption(Number(evt.target.value))
    setFilterRateOrder([Number(evt.target.value)])
  }

  const resetFilter = () => {
    setFilterRateOrder(initialFilter)
  }
  return (
    <div className={styles.commentSectionWrapper}>
      <div className='content'>
        <h2 className='ud-heading-xl title'>Student feedback</h2>
        <div className='ratingPart'>
          <div className='averageContainer ud-text-md'>
            <div className='ratingNumber'>4.5</div>
            <RatingContainer averageReview={4.5} showNumber={false} />
            <p>Course Rating</p>
          </div>
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
        </div>

        <div className='reviewPart'>
          <h2 className='ud-heading-xl title'>Reviews</h2>

          <div className='filterRegion'>
            <div className='ud-form-group flex-1'>
              <div className='searchContainer'>
                <input
                  type='text'
                  className='searchInput ud-text-input ud-text-input-large ud-text-md'
                  placeholder='Search your courses'
                />

                <button className='searchBtn ud-btn ud-btn-large ud-btn-primary ud-heading-md ud-btn-icon ud-btn-icon-large'>
                  <IoIosSearch />
                </button>
              </div>
            </div>

            <div className='ud-form-group ml-32'>
              <div className='ud-form-label ud-heading-sm'>Filter ratings</div>
              <div className='ud-select-container ud-select-container-large'>
                <select className='ud-select ud-text-md' value={ratingOption} onChange={handleRatingOptionChange}>
                  <option value={-1}>All ratings</option>
                  <option value={5}>Five stars</option>
                  <option value={4}>Four stars</option>
                  <option value={3}>Three stars</option>
                  <option value={2}>Two stars</option>
                  <option value={1}>One star</option>
                </select>
                <div className='ud-select-icon-container ud-select-icon-right'>
                  <IoIosArrowDown className='ud-icon ud-icon-small ud-icon-color-neutral' />
                </div>
              </div>
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
                  </div>
                  <div className='content'>
                    I really liked the build first approach in this course, you basically build a mini project for every
                    section you learn. Some sections are little outdated but Angela is adding constant updates.
                  </div>

                  <div className='feedback'>
                    <BiLike />
                    <BiDislike />

                    <button className='ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-text-sm review-report-abuse'>
                      <span>Report</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
