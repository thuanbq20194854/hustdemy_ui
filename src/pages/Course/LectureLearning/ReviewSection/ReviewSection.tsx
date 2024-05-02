import RatingContainer from '@/components/RatingContainer/RatingContainer'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import styles from '../LectureLearning.module.scss'
import ReviewItem from './ReviewItem'

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
                <ReviewItem key={index} />
              ))}
          </div>

          <div className='reviewShowMore'>
            <button className='ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm'>
              <span>See more reviews</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
