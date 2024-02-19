import styles from './Home.module.scss'

import BannerImage from 'src/assets/images/banner.png'

export default function Home() {
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

      {/*Course List  */}
    </div>
  )
}
