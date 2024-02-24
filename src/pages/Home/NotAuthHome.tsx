import { NavLink } from 'react-router-dom'
import styles from './NotAuthHome.module.scss'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Tabs } from 'antd'
import CourseCardListSlider from './CourseCardListSlider'

function NotAuthHome() {
  const items = [
    {
      key: '1',
      label: 'Business',
      children: null
    },
    {
      key: '2',
      label: 'Design',
      children: null
    },
    {
      key: '3',
      label: 'Photography & Video',
      children: null
    },
    {
      key: '4',
      label: 'Marketing',
      children: null
    },
    {
      key: '5',
      label: 'Development',
      children: null
    },
    {
      key: '6',
      label: 'IT & Software',
      children: null
    }
  ]

  const handleTabChange = () => {
    console.log('change')
  }
  return (
    <div className={`${styles.homePage} ${styles.NotAuthHomePage}`}>
      {/* Swiper Slider Banner */}

      <div className='heroSection'>
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
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          effect='fade'
          fadeEffect={{
            crossFade: true
          }}
          loop={true}
        >
          {Array(5)
            .fill(0)
            .map((itemCourse) => (
              <SwiperSlide key={itemCourse.key}>
                <div className='heroSlide'>
                  <div className='imageContainer'>
                    <img
                      src='https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg'
                      alt=''
                    />
                  </div>
                  <div className='contentBox'>
                    <div className='title ud-heading-sans-serif-xxl'>Skills that drive you forward</div>

                    <div className='subtitle ud-text-md'>
                      Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve
                      goals and stay competitive.
                    </div>

                    <div className='action'>
                      <NavLink to='/'>
                        <span className='ud-heading-md ud-btn ud-btn-primary ud-btn-large'>Plan for organizations</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <button className='btnArrow leftArrow'>
          <MdArrowBackIosNew size={20} />
        </button>
        <button className='btnArrow rightArrow'>
          <MdArrowForwardIos size={20} />
        </button>
      </div>

      {/* Logo Partner */}

      <div className='partnerSection'>
        <div className='heading'>Trusted by over 15,000 companies and millions of learners around the world</div>

        <div className='partnerLogos'>
          <ul>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg' alt='' />
            </li>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg' alt='' />
            </li>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg' alt='' />
            </li>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/att.svg' alt='' />
            </li>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg' alt='' />
            </li>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg' alt='' />
            </li>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/citi.svg' alt='' />
            </li>
            <li>
              <img src='https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg' alt='' />
            </li>
          </ul>
        </div>
      </div>

      {/* Tab courseList */}

      <div className='tabSection'>
        <Tabs
          defaultActiveKey='1'
          items={items}
          onChange={handleTabChange}
          tabBarStyle={{ borderBottomColor: '#fff' }}
        />

        <CourseCardListSlider />
      </div>
    </div>
  )
}

export default NotAuthHome
