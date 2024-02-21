import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Home.module.scss'

import BannerImage from 'src/assets/images/banner.png'
import { useRef } from 'react'

import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

export default function Home() {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  const sliderRef = useRef<any>(null)

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }
  const goToNext = () => {
    sliderRef.current.slickNext()
  }

  return (
    <div className={styles.homePage}>
      {/* CAROUSEL */}

      <div className='carousel'></div>
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
      <h1 className='heading'>What to learn next</h1>
      <div className='courseCardListContainer'>
        <div className='listType ud-heading-xl'>Recommended for you</div>
        <div className='courseCardList' style={{ height: '500px' }}>
          <button className='leftArrow' onClick={goToPrev}>
            <MdArrowBackIosNew />
          </button>
          <button className='rightArrow' onClick={goToNext}>
            <MdArrowForwardIos />
          </button>
          <Slider {...settings} ref={sliderRef}>
            <div className='courseCard'>
              <div className='courseCardAvatar'>
                <img src='https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg' alt='' />
              </div>

              <div className='couseInfo'>
                <div className='courseName'>
                  Javascript for BeginnersLearn javascript online and supercharge your web design with this Javascript
                  for beginners training course.Rating: 4.5 out of 52786 reviews8 total hours72 lecturesAll
                  LevelsCurrent price: ₫299,000Original price: ₫399,000
                </div>

                <div className='courseInstructor'>Instructor: SkillSprints Inc. Rating: 4.5 out of 5</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
