import React from 'react'

import styles from './Footer.module.scss'
import { GrLanguage } from 'react-icons/gr'

function Footer() {
  return (
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
        <div className='links-and-language-selector'>
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

        <div className='logo-and-copyright'>
          <img
            src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
            alt='Udemy'
            width='91'
            height='34'
            loading='lazy'
            className='logo'
          />

          <div className='copyright-container'>
            <div className='ud-text-xs'>© 2024 Udemy, Inc.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
