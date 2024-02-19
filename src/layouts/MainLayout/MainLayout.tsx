import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './MainLayout.module.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { GoBell } from 'react-icons/go'
import { MdSearch } from 'react-icons/md'
import { GrLanguage } from 'react-icons/gr'

interface IProps {
  children?: React.ReactNode
}

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

function MainLayout(props: IProps) {
  const { children } = props
  return (
    <div className={styles.mainLayout}>
      {/* Header */}

      <div className={styles.headerWrapper}>
        <div className='upperRegion'>
          <img
            src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
            alt='Udemy'
            width='91'
            height='34'
            loading='lazy'
            className='logo'
          />

          <button className='text-item'>
            <span> Categories</span>
          </button>

          <div className='search-wrapper'>
            <form action=''>
              <button className='search-btn'>
                <MdSearch size={24} color='#747373' />
              </button>
              <input type='text' placeholder='Search for anything' className='search-input' />
            </form>
          </div>

          <button className='text-item'>
            <span>Hustdemy Business</span>
          </button>

          <button className='text-item'>
            <span>Instructor</span>
          </button>
          <button className='text-item'>
            <span>My Learning</span>
          </button>

          <div className='ud-btn'>
            <IoMdHeartEmpty size={24} />
          </div>
          <div className='ud-btn cart'>
            <MdOutlineShoppingCart size={24} />
            <span className='purchase-number'>
              <p>46</p>
            </span>
          </div>
          <div className='ud-btn'>
            <GoBell size={24} />
          </div>

          <div className='avatar-ud-btn'>
            <div className='avatar-container'>
              <img
                className='avatar'
                src='https://lh3.googleusercontent.com/a/ACg8ocJEoJUYixlFMzUzd9DpRQhHhKAAYx3l1wGSEWfeidHDyrw=s96-c'
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='bottomRegion'>
          {fakesCategories.map((cateItem, index) => (
            <div key={index}>
              <button className='btn-wrapper'>{cateItem}</button>
            </div>
          ))}
        </div>
      </div>
      {children}

      <div className={styles.contentWrapper}></div>
      <Outlet />

      {/* Footer */}

      <div className={styles.footerWrapper}>
        <div className='notice-part'>
          <div className='slogan'>
            Top companies choose <a href='/'>Udemy Business</a> to build in-demand career skills.
          </div>

          <div className='partner-logos'>
            <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' alt='' />
          </div>
        </div>

        <div className='footer-section-main'>
          <ul className='link-column'>
            <li>Udemy Business</li>
            <li>Teach On Udemy</li>
            <li>Get the app</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          <ul className='link-column'>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>

          <ul className='link-column'>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>

          <div className='language-setting'>
            <button className='language-btn'>
              <GrLanguage size={20} color='white' />
              <span>English</span>
            </button>
          </div>
        </div>

        <div className='logo-and-copyright'></div>
      </div>
    </div>
  )
}

export default MainLayout
