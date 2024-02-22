import Slider from 'react-slick'

import styles from './Home.module.scss'

import BannerImage from 'src/assets/images/banner.png'
import { useRef } from 'react'

import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

import StarsContainer from './StarsContainer'
import CustomTooltip from '../../components/CustomTooltip/CustomTooltip'

import { IoCheckmark } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'
const items = [
  {
    key: '1',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
    courseName: 'Become a Certified Web Developer: HTML, CSS and JavaScript',

    courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 4.5,
    sold: 3628
  },
  {
    key: '2',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg',
    courseName: 'Become a Certified Web Developer: HTML, CSS and JavaScript',

    courseInstrutor:
      'Javascript for BeginnersLearn javascript online and supercharge your web design with this Javascript for beginners training course.Rating: 4.5 out of 52786 reviews8 total hours72 lecturesAll',
    courseActualPrice: 399000,
    courseOriginalPrice: 299000,
    courseRating: 4.5,
    sold: 2786
  },
  {
    key: '3',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/14346_9972_8.jpg',
    courseName: 'Learn C# Programming (In Ten Easy Steps)',

    courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 3.5,
    sold: 3628
  },
  {
    key: '4',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
    courseName: '[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02',

    courseInstrutor: 'Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 5.5,
    sold: 3628
  },
  {
    key: '5',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
    courseName: '555555555555555Become a Certified Web Developer: HTML, CSS and JavaScript',

    courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 4.5,
    sold: 3628
  }

  // {
  //   key: '6',
  //   courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
  //   courseName: '66666Become a Certified Web Developer: HTML, CSS and JavaScript',

  //   courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
  //   courseActualPrice: 12999000,
  //   courseOriginalPrice: 89900,
  //   courseRating: 4.5,
  //   sold: 3628
  // }
  // {
  //   key: '7',
  //   courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
  //   courseName: '7777777Become a Certified Web Developer: HTML, CSS and JavaScript',

  //   courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
  //   courseActualPrice: 12999000,
  //   courseOriginalPrice: 89900,
  //   courseRating: 4.5,
  //   sold: 3628
  // },
  // {
  //   key: '8',
  //   courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
  //   courseName: '8888888Become a Certified Web Developer: HTML, CSS and JavaScript',

  //   courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
  //   courseActualPrice: 12999000,
  //   courseOriginalPrice: 89900,
  //   courseRating: 4.5,
  //   sold: 3628
  // },
  // {
  //   key: '9',
  //   courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
  //   courseName: '9999999999Become a Certified Web Developer: HTML, CSS and JavaScript',

  //   courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
  //   courseActualPrice: 12999000,
  //   courseOriginalPrice: 89900,
  //   courseRating: 4.5,
  //   sold: 3628
  // }
]

export default function Home() {
  const settings = {
    // dots: true,
    infinite: false,
    swipeToSlide: true,
    rows: 1,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    adaptiveHeight: true
  }

  const sliderRef = useRef<any>(null)

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }
  const goToNext = () => {
    sliderRef.current.slickNext()
  }

  const renderCourseCardPopover = () => {
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
          <button className='atc-btn ud-btn ud-btn-large ud-heading-md ud-btn-brand'>Add To Cart</button>
          <button className='heart-btn'>
            <CiHeart size={24} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.homePage}>
      {/* CAROUSEL */}

      <div className='carousel'>
        <div className='imgContainer'>
          <img src={BannerImage} alt='' />
        </div>
        <div className='heroBanner'>
          <div className='heroBannerInner'>
            <h1 className='hero-heading'>You’re back, Bui Quoc!</h1>
            <p className='ud-text-md'>
              Stand out from the crowd with the latest skills. Get courses from ₫299,000 during this special offer.
            </p>
          </div>
        </div>
      </div>

      <h1 className='heading'>What to learn next</h1>
      <div className='courseCardListContainer'>
        <div className='listType ud-heading-xl'>Recommended for you</div>
        <div className='courseCardList'>
          <button className='btnArrow leftArrow' onClick={goToPrev}>
            <MdArrowBackIosNew />
          </button>
          <button className='btnArrow rightArrow' onClick={goToNext}>
            <MdArrowForwardIos />
          </button>
          <Slider {...settings} ref={sliderRef}>
            {items.map((itemCourse) => (
              <CustomTooltip
                title={renderCourseCardPopover()}
                key={itemCourse.key}
                rootClassName={styles.cardTooltipRootClass}
                placement='left'
              >
                <div className='courseCard' key={itemCourse.key}>
                  <div className='courseCardAvatar'>
                    <img src={itemCourse.courseAvatar} alt='' />
                  </div>

                  <div className='ud-heading-md courseName'>{itemCourse.courseName}</div>

                  <div className='ud-text-xs courseInstructor'>{itemCourse.courseInstrutor}</div>

                  <div className='statics'>
                    <StarsContainer rating={3.5} />
                    <div className='ud-text-xs sold'>277,455</div>
                  </div>
                  <div className='price'>
                    <div className='currentPrice ud-heading-md'>₫2,499,000</div>
                  </div>

                  <div className='courseBadges'>
                    <div className='courseBadge ud-heading-xs'>Best Seller</div>
                  </div>
                </div>
              </CustomTooltip>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
