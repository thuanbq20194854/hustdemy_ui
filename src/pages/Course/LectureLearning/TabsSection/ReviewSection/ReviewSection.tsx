import RatingContainer from '@/components/RatingContainer/RatingContainer'
import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'

import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import styles from '../../LectureLearning.module.scss'
import ReviewItem from './ReviewItem'
import { LearningReview } from '@/models/course'
import { useLectureLearningContext } from '../../context/LectureLearningContext'
import { TRUE } from 'sass'

const fakeFilters = [
  {
    id: '1',
    order: 1,
    percent: 20
  },
  {
    id: '2',
    order: 2,
    percent: 20
  },
  {
    id: '3',
    order: 3,
    percent: 20
  },
  {
    id: '4',
    order: 4,
    percent: 20
  },
  {
    id: '5',
    order: 5,
    percent: 20
  }
]

const fakeReviewList = [
  {
    id: 1,
    type: 1,
    star_count: 4.5,
    comment:
      'Those who are interested to learn in designing, this course is informative and so helpful. Easy to understand and concepts will be cleared. Personally i enjoyed learning process.',
    user: {
      id: 1,
      name: 'Namrata M.',
      avatar: 'https://img-c.udemycdn.com/user/50x50/45305182_3569.jpg'
    },
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 2,
    type: 1,
    star_count: 4.5,
    comment:
      'Those who are interested to learn in designing, this course is informative and so helpful. Easy to understand and concepts will be cleared. Personally i enjoyed learning process.',
    user: {
      id: 1,
      name: 'Namrata M.',
      avatar: 'https://img-c.udemycdn.com/user/50x50/45305182_3569.jpg'
    },
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 3,
    type: 1,
    star_count: 4.5,
    comment:
      'Those who are interested to learn in designing, this course is informative and so helpful. Easy to understand and concepts will be cleared. Personally i enjoyed learning process.',
    user: {
      id: 1,
      name: 'Namrata M.',
      avatar: 'https://img-c.udemycdn.com/user/50x50/45305182_3569.jpg'
    },
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 4,
    type: 1,
    star_count: 4.5,
    comment:
      'Those who are interested to learn in designing, this course is informative and so helpful. Easy to understand and concepts will be cleared. Personally i enjoyed learning process.',
    user: {
      id: 1,
      name: 'Namrata M.',
      avatar: 'https://img-c.udemycdn.com/user/50x50/45305182_3569.jpg'
    },
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 5,
    type: 1,
    star_count: 4.5,
    comment:
      'Those who are interested to learn in designing, this course is informative and so helpful. Easy to understand and concepts will be cleared. Personally i enjoyed learning process.',
    user: {
      id: 1,
      name: 'Namrata M.',
      avatar: 'https://img-c.udemycdn.com/user/50x50/45305182_3569.jpg'
    },
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  },
  {
    id: 6,
    type: 1,
    star_count: 4.5,
    comment:
      'Those who are interested to learn in designing, this course is informative and so helpful. Easy to understand and concepts will be cleared. Personally i enjoyed learning process.',
    user: {
      id: 1,
      name: 'Namrata M.',
      avatar: 'https://img-c.udemycdn.com/user/50x50/45305182_3569.jpg'
    },
    updated_at: '2024-05-06T04:50:32.1079751+00:00',
    created_at: '2024-05-06T04:50:32.1079751+00:00'
  }
]

interface IProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function ReviewSection({ setIsLoading }: IProps) {
  const initialFilter = [1, 2, 3, 4, 5]

  const [filterRateOrder, setFilterRateOrder] = useState(initialFilter)

  const [searchInput, setSearchInput] = useState('')

  const [selectedRating, setSelectedRating] = useState(-1)

  const [ratingOptions, setRatingOptions] = useState(fakeFilters)

  const [totalPage, setTotalPage] = useState(1)

  const [reviewList, setReviewList] = useState<LearningReview[]>(fakeReviewList)

  const { currentLecture } = useLectureLearningContext()

  const handleSelectFilterOptions = (passOrdered: number) => {
    setFilterRateOrder((prev) => [passOrdered])
    setSelectedRating(passOrdered)
  }

  const handleRatingOptionChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    if (Number(evt.target.value) === -1) {
      setSelectedRating(Number(evt.target.value))
      setFilterRateOrder(initialFilter)

      return
    }
    setSelectedRating(Number(evt.target.value))
    setFilterRateOrder([Number(evt.target.value)])
  }

  const resetFilter = () => {
    if (filterRateOrder !== initialFilter) {
      setFilterRateOrder(initialFilter)
      setSelectedRating(-1)
    }
  }

  const handleSearch = () => {
    // change Param API
  }

  const handleSeeMoreReview = () => {
    // change Params
    setTotalPage((prev) => prev + 1)
  }

  useEffect(() => {
    try {
      setIsLoading(true)

      // API follow lecture id
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [currentLecture?.id, searchInput, selectedRating, totalPage])

  // useEffect call API filter whenever one of filter is change + get filterOption + reviewStatics
  // search + option + totalPage

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
              {ratingOptions
                .sort((itemA, ItemB) => {
                  if (itemA.order > ItemB.order) return -1
                  if (itemA.order < ItemB.order) return 1
                  return 0
                })
                .map((item) => (
                  <div className='filterRowContainer'>
                    <button
                      className='filterRow'
                      key={item.id}
                      style={{ opacity: filterRateOrder.includes(item.order) ? '1' : '0.25' }}
                      onClick={() => handleSelectFilterOptions(item.order)}
                    >
                      <div className='ratingPercentBar'>
                        <div className='inner' style={{ width: item.percent + '%' }}></div>
                      </div>
                      <RatingContainer showNumber={false} averageReview={item.order} />
                      <div className='ratePercent ud-text-xs'>{item.percent}</div>
                    </button>

                    {selectedRating === item.order && (
                      <button className='closeBtn' onClick={resetFilter}>
                        <IoClose />
                      </button>
                    )}
                  </div>
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
                  value={searchInput}
                  onChange={(evt) => setSearchInput(evt.target.value)}
                />

                <button
                  className='searchBtn ud-btn ud-btn-large ud-btn-primary ud-heading-md ud-btn-icon ud-btn-icon-large'
                  onClick={handleSearch}
                >
                  <IoIosSearch />
                </button>
              </div>
            </div>

            <div className='ud-form-group ml-32'>
              <div className='ud-form-label ud-heading-sm'>Filter ratings</div>
              <div className='ud-select-container ud-select-container-large'>
                <select className='ud-select ud-text-md' value={selectedRating} onChange={handleRatingOptionChange}>
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
            {reviewList.map((item, index) => (
              <ReviewItem review={item} />
            ))}
          </div>

          <div className='reviewShowMore'>
            <button className='ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm' onClick={handleSeeMoreReview}>
              <span>See more reviews</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
