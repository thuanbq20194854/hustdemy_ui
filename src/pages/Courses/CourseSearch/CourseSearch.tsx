import { Pagination, SelectProps, Spin } from 'antd'
import { useLayoutEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoCheckmark } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { NavLink, useSearchParams } from 'react-router-dom'
import CustomTooltip from '@/components/CustomTooltip/CustomTooltip'
import RatingContainer from '../../../components/RatingContainer/RatingContainer'
import { CategoryCourse, FilterCoursesCategory } from '../../../models/course'
import AccordionFilterPanel from './AccordionFilterPanel'
import styles from './CourseSearch.module.scss'

const options: SelectProps['options'] = []

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i
  })
}

export const NEWEST_SORT = 'newest'
export const MOST_REVIEW_SORT = 'most_review'
export const HIGHEST_SORT = 'highest_rated'

interface IPaginationInfo {
  pageSize: number
  totalRecord: number
  totalPage: number
}

/*
 ? await CourseServiceApi.getCoursesSearch(
                              searchQuery,
                              SIZE,
                              currentPage,
                              filter,
                          )
*/

interface IOption {
  label: string
  value: string
}

const ratingOptions: IOption[] = [
  {
    label: '4.5 & up',
    value: '4.5 & up'
  },
  {
    label: '4.0 & up',
    value: '4.0 & up'
  },
  {
    label: '3.5 & up',
    value: '3.5 & up'
  },
  {
    label: '3.0 & up',
    value: '3.0 & up'
  }
]
const durationOptions: IOption[] = [
  {
    label: '0-1 Hours',
    value: '0-1 Hours'
  },
  {
    label: '1-3 Hours',
    value: '1-3 Hours'
  },
  {
    label: '3-6 Hours',
    value: '3-6 Hours'
  },
  {
    label: '6-17 Hours',
    value: '6-17 Hours'
  }
]
const levelOptions: IOption[] = [
  {
    label: 'All Levels',
    value: 'All Levels'
  },
  {
    label: 'Beginner',
    value: 'Beginner'
  },
  {
    label: 'Intermediate',
    value: 'Intermediate'
  },
  {
    label: 'Expert',
    value: 'Expert'
  }
]

function CourseSearch() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [foundCourse, setFoundCourse] = useState<CategoryCourse[]>([])

  const [currentPage, setCurrentPage] = useState(2)

  const [paginationInfo, setPaginationInfo] = useState<IPaginationInfo>({
    pageSize: 10,
    totalPage: 5,
    totalRecord: 45
  })
  const {
    register,
    reset,
    watch,
    getValues,
    formState: { isDirty }
  } = useForm<FilterCoursesCategory>({
    mode: 'onChange'
  })

  const searchQuery = searchParams.get('q')

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage)
  }

  useLayoutEffect(() => {
    const fetchFoundCourses = async (filterParams: FilterCoursesCategory) => {
      try {
        // API

        //set State

        /// loading
        console.log(filterParams)

        console.log(searchQuery)
        console.log(currentPage)
        console.log(watch())
      } catch (e) {
        console.log(e)
      }
    }

    const filter = {
      rate: watch('rating') ? watch('rating') : null,
      sort: watch('sort') ? watch('sort') : null,
      duration: watch('duration') ? watch('duration') : [],
      level: watch('level') ? watch('level') : []
    }

    fetchFoundCourses(filter)
  }, [searchQuery, currentPage, watch])

  return (
    <div className={styles.courseSearchPageWrapper}>
      <h1 className='headerTitle ud-heading-xl'>904 results for “abc”</h1>

      <div className='filterSection'>
        <div className='heading'>
          <div className='ud-compact-form-group ud-form-group' style={{ height: '60px' }}>
            <div className='ud-compact-form-control-container ud-compact-form-control-container-active'>
              <div className='ud-select-container ud-select-container-large'>
                <select className='ud-select ud-text-md ud-compact-form-control' {...register('sort')}>
                  <option value={NEWEST_SORT}>Newest</option>
                  <option value={HIGHEST_SORT}>Highest Rated</option>
                  <option value={MOST_REVIEW_SORT}>Most Reviewed</option>
                </select>
                <div className='ud-select-icon-container ud-select-icon-right'>
                  {/* <svg aria-hidden='true' focusable='false' className='ud-icon ud-icon-small ud-icon-color-neutral'>
                <use xlinkHref='#icon-expand' />
              </svg> */}
                  <MdKeyboardArrowDown className='ud-icon ud-icon-small ud-icon-color-neutral' />
                </div>
              </div>

              <div className='ud-form-label ud-heading-sm'>
                <div className='ud-compact-form-label-content'>
                  <span className='ud-compact-form-label-text'>Sort By</span>
                </div>
              </div>
            </div>
          </div>

          <button className='clearFilterBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'>
            <span>Clear Filters</span>
          </button>
          <div className='resultCount ud-heading-md'>904 results</div>
        </div>

        <div className='filterRegion'>
          <div className='filterSidebar'>
            <AccordionFilterPanel title='Rating' className='accordionFilterPanel'>
              {ratingOptions.map((item, index) => (
                <div className='inputContainer radioType' key={item.value}>
                  <input type='radio' id={item.value + ''} />
                  <RatingContainer averageReview={4.5} showNumber={false} />
                  <span className='label'>{item.label}</span>
                  <div className='count'>(201)</div>
                </div>
              ))}
            </AccordionFilterPanel>

            <AccordionFilterPanel title='Duration' className='accordionFilterPanel'>
              {durationOptions.map((item, index) => (
                <div className='inputContainer' key={item.value}>
                  <input type='checkbox' id={item.value + ''} />
                  <label htmlFor={index + ''}>{item.label}</label>
                  <span className='count'>(1000)</span>
                </div>
              ))}
            </AccordionFilterPanel>
            <AccordionFilterPanel title='Level' className='accordionFilterPanel'>
              {levelOptions.map((item, index) => (
                <div className='inputContainer' key={item.value}>
                  <input type='checkbox' id={item.value + ''} />
                  <label htmlFor={index + ''}>{item.label}</label>
                  <span className='count'>(1000)</span>
                </div>
              ))}
            </AccordionFilterPanel>
          </div>

          <div className='paginatedCourseList'>
            {isLoading ? (
              <Spin tip='Loading' size='large'>
                <div className='content' />
              </Spin>
            ) : (
              <>
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <CustomTooltip
                      key={index}
                      title={
                        <div className='tooltipConentWrapper'>
                          <div className='contentHeader ud-heading-md'>What you’ll learn</div>

                          <div className='objectiveList'>
                            <div className='objectiveItem'>
                              <div className='iconContainer'>
                                <IoCheckmark className='icon' />
                              </div>

                              <span className='text'>
                                Develop an AI model to Reduce hiring and training costs of employees by predicting which
                                employees might leave the company.
                              </span>
                            </div>
                            <div className='objectiveItem'>
                              <div className='iconContainer'>
                                <IoCheckmark className='icon' />
                              </div>

                              <span className='text'>
                                Develop an AI model to Reduce hiring and training costs of employees by predicting which
                                employees might leave the company.
                              </span>
                            </div>
                            <div className='objectiveItem'>
                              <div className='iconContainer'>
                                <IoCheckmark className='icon' />
                              </div>

                              <span className='text'>
                                Develop an AI model to Reduce hiring and training costs of employees by predicting which
                                employees might leave the company.
                              </span>
                            </div>
                          </div>

                          <div className='actionsBtn'>
                            <button className='addToCart ud-btn ud-btn-large ud-btn-brand ud-heading-md add-to-cart'>
                              Add to cart
                            </button>

                            <button className='addWishlist ud-btn ud-btn-large ud-btn-secondary ud-btn-round ud-heading-md ud-btn-icon ud-btn-icon-large ud-btn-icon-round'>
                              <IoIosHeartEmpty />
                            </button>
                          </div>
                        </div>
                      }
                      rootClassName={styles.rootClassCoursCardTooltip}
                    >
                      <div className='courseCardContainer'>
                        <NavLink to='/course/keke' className='courseCardContainer--inner'>
                          <div className='imgContainer'>
                            <img src='https://img-c.udemycdn.com/course/240x135/3360526_8e7b_6.jpg' alt='' />
                          </div>
                          <div className='mainContent'>
                            <div className='title ud-heading-md'>
                              LeetCode in Java: Algorithms Coding Interview Questions
                            </div>
                            <div className='headline ud-text-sm'>
                              Ace your next coding interview by solving essential coding interview questions and get an
                              offer from big tech company.
                            </div>

                            <div className='ud-text-xs'>Instructor: Md. A. Barik</div>
                            <div className='rating ud-text-xs'>
                              <RatingContainer averageReview={4.4} />
                              <div className='ratingCount'>(1111)</div>
                            </div>
                            <div className='details ud-text-xs'>
                              <span>26.5 hours</span>
                              <span>230 lectures</span>
                              <span>All levels</span>
                            </div>

                            <div className='priceContainer'>
                              <div className='currentPrice ud-heading-md'>₫1,099,000</div>
                              <div className='basePrice ud-heading-sm'>₫2,099,000</div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    </CustomTooltip>
                  ))}

                <div className='paginationContainer'>
                  <Pagination
                    total={paginationInfo.totalRecord}
                    pageSize={paginationInfo.pageSize}
                    current={currentPage}
                    onChange={handleChangePage}
                    className='pageinationClass'
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSearch
