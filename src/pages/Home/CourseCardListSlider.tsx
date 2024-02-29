import styles from './CourseCardListSlider.module.scss'

import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

import RatingContainer from '../../components/RatingContainer/RatingContainer'
import CustomTooltip from '../../components/CustomTooltip/CustomTooltip'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import { NavLink } from 'react-router-dom'
import { IoCheckmark } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'
import { useAppDispatch } from '../../services/state/redux/store'
import { cartSliceActions } from '../../services/state/redux/cartSlice'
import { CartItem } from '../../models/cart'

const items: CartItem[] = [
  {
    id: '1',
    cart_id: '1',
    cartCourse: {
      ID: 1,
      Title: '1111 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '2',
    cart_id: '1',
    cartCourse: {
      ID: 2,
      Title: '2222 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '3',
    cart_id: '1',
    cartCourse: {
      ID: 3,
      Title: '3333 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '4',
    cart_id: '1',
    cartCourse: {
      ID: 4,
      Title: '4444 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '5',
    cart_id: '1',
    cartCourse: {
      ID: 5,
      Title: '5555 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '6',
    cart_id: '1',
    cartCourse: {
      ID: 6,
      Title: '6666 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  }
]

// const items: IItem[] = [
//   {
//     id: '1',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
//     courseName: 'Become a Certified Web Developer: HTML, CSS and JavaScript',

//     courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 300,
//     sold: 3628
//   },
//   {
//     id: '2',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg',
//     courseName: 'Become a Certified Web Developer: HTML, CSS and JavaScript',

//     courseInstrutor:
//       'Javascript for BeginnersLearn javascript online and supercharge your web design with this Javascript for beginners training course.Rating: 300 out of 52786 reviews8 total hours72 lecturesAll',
//     courseActualPrice: 399000,
//     courseOriginalPrice: 299000,
//     courseRating: 300,
//     sold: 2786
//   },
//   {
//     id: '3',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/14346_9972_8.jpg',
//     courseName: 'Learn C# Programming (In Ten Easy Steps)',

//     courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 3.5,
//     sold: 3628
//   },
//   {
//     id: '4',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
//     courseName: '[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02',

//     courseInstrutor: 'Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 5.5,
//     sold: 3628
//   },
//   {
//     id: '5',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
//     courseName: '555555555555555Become a Certified Web Developer: HTML, CSS and JavaScript',

//     courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 4.5,
//     sold: 3628
//   },

//   {
//     id: '6',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
//     courseName: '66666Become a Certified Web Developer: HTML, CSS and JavaScript',

//     courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 4.5,
//     sold: 3628
//   },
//   {
//     id: '7',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
//     courseName: '7777777Become a Certified Web Developer: HTML, CSS and JavaScript',

//     courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 4.5,
//     sold: 3628
//   },
//   {
//     id: '8',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
//     courseName: '8888888Become a Certified Web Developer: HTML, CSS and JavaScript',

//     courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 4.5,
//     sold: 3628
//   },
//   {
//     id: '9',
//     courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
//     courseName: '9999999999Become a Certified Web Developer: HTML, CSS and JavaScript',

//     courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
//     courseActualPrice: 12999000,
//     courseOriginalPrice: 89900,
//     courseRating: 4.5,
//     sold: 3628
//   }
// ]

interface IProps {
  title: string
}

function CourseCardListSlider(props: IProps) {
  const { title } = props

  const dispatch = useAppDispatch()
  const handleAddToCart = (cartItem: CartItem) => {
    dispatch(cartSliceActions.addCartItem(cartItem))
  }
  const renderCourseCardPopover = (cartItem: CartItem) => {
    return (
      <div className='courseQuickViewWrapper'>
        <div className='title ud-heading-lg'>100 Days of Code: The Complete Python Pro Bootcamp</div>

        <div className='badge-container'>
          <div className='courseBadges'>
            <div className='courseBadge ud-heading-xs'>Best Seller</div>
          </div>

          <div className='updated ud-text-xs'>
            Updated <span>February 2024</span>
          </div>
        </div>

        <div className='stats ud-text-xs'>
          <span>58.5 hours</span>
          <span>All Levels</span>
          <span>Subtitles</span>
        </div>

        <div className='headline ud-text-sm'>
          Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and
          apps!
        </div>
        <div className='objectives ud-text-sm'>
          <ul>
            <li className='objective-item'>
              <IoCheckmark />
              <div className='objective-content'>
                You will master the Python programming language by building 100 unique projects over 100 days.
              </div>
            </li>
            <li className='objective-item'>
              <IoCheckmark />
              <div className='objective-content'>
                You will learn automation, game, app and web development, data science and machine learning all using
                Python.
              </div>
            </li>
            <li className='objective-item'>
              <IoCheckmark />
              <div className='objective-content'>You will be able to program in Python professionally</div>
            </li>
          </ul>
        </div>

        <div className='actionContainer'>
          <button
            className='atc-btn ud-btn ud-btn-large ud-heading-md ud-btn-brand'
            onClick={() => handleAddToCart(cartItem)}
          >
            Add To Cart
          </button>
          <button className='heart-btn'>
            <CiHeart size={24} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.courseCardListContainer}>
      <div className='listTitle ud-heading-xl'>{title}</div>
      <div className='courseCardList'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            nextEl: '.btnArrow.rightArrow',
            prevEl: '.btnArrow.leftArrow'
          }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          effect='fade'
          fadeEffect={{
            crossFade: true
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              slidesPerGroup: 1
            },
            700: {
              slidesPerView: 3,
              slidesPerGroup: 2
            },
            980: {
              slidesPerView: 4,
              slidesPerGroup: 3
            },
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 3
            }
          }}
        >
          {items.map((cartItem: CartItem) => (
            <SwiperSlide key={cartItem.cartCourse.ID}>
              <CustomTooltip
                title={renderCourseCardPopover(cartItem)}
                rootClassName={styles.cardTooltipRootClass}
                placement='left'
              >
                <NavLink to='/' className='courseCard navLink'>
                  <div className='courseAvatar'>
                    <img src={cartItem.cartCourse.Image ?? ''} alt='' />
                    {/* <img src='https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg' alt='' /> */}
                  </div>

                  <div className='ud-heading-md courseName'>{cartItem.cartCourse.Title}</div>

                  <div className='ud-text-xs courseInstructor'>Instructor Bui Quoc Thuan</div>

                  <div className='statics'>
                    <RatingContainer
                      averageReview={cartItem.cartCourse.AverageReview as number}
                      countReview={cartItem.cartCourse.CountReview}
                    />
                  </div>
                  <div className='price'>
                    <div className='currentPrice ud-heading-md'>₫{cartItem.cartCourse.Price}</div>
                  </div>

                  <div className='courseBadges'>
                    <div className='courseBadge ud-heading-xs'>Best Seller</div>
                  </div>
                </NavLink>
              </CustomTooltip>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='btnArrow leftArrow'>
          <MdArrowBackIosNew />
        </button>
        <button className='btnArrow rightArrow'>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  )
}

export default CourseCardListSlider
