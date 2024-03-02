import { useForm } from 'antd/es/form/Form'
import AccordionFilterPanel from './AccordionFilterPanel'
import styles from './CourseSearch.module.scss'
import { Form, Pagination, Select, SelectProps, Spin } from 'antd'
import RatingContainer from '../../../components/RatingContainer/RatingContainer'
import { NavLink } from 'react-router-dom'
import CustomTooltip from '../../../components/CustomTooltip/CustomTooltip'
import { IoCheckmark } from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'
import { useState } from 'react'

const options: SelectProps['options'] = []

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i
  })
}

const result = {
  total: 124,
  pageSize: 10,
  currentPage: 5
}

function CourseSearch() {
  const [page, setPage] = useState(1)
  const [form] = useForm()

  const handleChangePage = (newPage: any) => {
    console.log('zzz', newPage)

    setPage(newPage)

    {
      /* API + Lazy Loading + move screen to the top of list => field currentPage + setPage, total + pageSize lấy từ  */
    }
  }

  return (
    <div className={styles.courseSearchPageWrapper}>
      <h1 className='headerTitle ud-heading-xl'>904 results for “abc”</h1>

      <div className='filterSection'>
        <div className='heading'>
          <div className='sortBtn'>
            <Select options={options} id='sort' rootClassName={styles.rootClassSelect} className='classSelect'></Select>
            <label htmlFor='sort' className='label ud-heading-xs'>
              Sort by
            </label>
          </div>
          <button className='clearFilterBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'>
            <span>Clear Filters</span>
          </button>
          <div className='resultCount ud-heading-md'>904 results</div>
        </div>

        <div className='filterRegion'>
          <div className='filterSidebar'>
            <Form action='' form={form}>
              <AccordionFilterPanel filterType='radio' filterTitle='Rating' />
              <AccordionFilterPanel filterType='checkbox' filterTitle='Language' />
            </Form>
          </div>

          <div className='paginatedCourseList'>
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
                total={result.total}
                pageSize={result.pageSize}
                current={page}
                onChange={(page) => handleChangePage(page)}
                className='pageinationClass'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSearch
