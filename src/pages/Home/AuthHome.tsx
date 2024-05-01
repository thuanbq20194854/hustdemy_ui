import styles from './AuthHome.module.scss'

import BannerImage from '@/assets/images/banner.png'

// import Swiper core and required modules
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import CourseCardListSlider from './CourseCardListSlider'
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
  },

  {
    key: '6',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
    courseName: '66666Become a Certified Web Developer: HTML, CSS and JavaScript',

    courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 4.5,
    sold: 3628
  },
  {
    key: '7',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
    courseName: '7777777Become a Certified Web Developer: HTML, CSS and JavaScript',

    courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 4.5,
    sold: 3628
  },
  {
    key: '8',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
    courseName: '8888888Become a Certified Web Developer: HTML, CSS and JavaScript',

    courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 4.5,
    sold: 3628
  },
  {
    key: '9',
    courseAvatar: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
    courseName: '9999999999Become a Certified Web Developer: HTML, CSS and JavaScript',

    courseInstrutor: 'SkillSprints Inc., Mark Lassoff',
    courseActualPrice: 12999000,
    courseOriginalPrice: 89900,
    courseRating: 4.5,
    sold: 3628
  }
]

const fakesCategories = [
  'Development',
  'Business',
  'Finance & Accounting',
  'IT & Software',
  'Office Productivity',
  'Personal Development',
  'Design',
  'Marketing',
  'Health & Fitness',
  'Music'
]

export default function Home() {
  return (
    <div className={styles.authHomePage}>
      {/* CAROUSEL */}

      <div className='navLinkSection'>
        {fakesCategories.map((cateItem, index) => (
          <div key={index}>
            <button className='btn-wrapper'>{cateItem}</button>
          </div>
        ))}
      </div>

      <div className='ud-container ud-page-wrapper'>
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
        <div className='courseListsContainer'>
          <CourseCardListSlider title='Viết gì đó vào đây' />
        </div>
      </div>
    </div>
  )
}
