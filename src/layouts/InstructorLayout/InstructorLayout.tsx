import { NavLink, Outlet } from 'react-router-dom'
import styles from './InstructorLayout.module.scss'
import Footer from '../components/Footer'
import { GoBell } from 'react-icons/go'

function InstructorLayout() {
  return (
    <div className={styles.instructorLayout}>
      <div className='headerWrapper'>
        <div className='headerInner'>
          <div className='studentBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md'>
            <NavLink to='/'>
              <span className='ud-text-sm'>Student</span>
            </NavLink>
          </div>

          <div className='notificationBtn'>
            <NavLink to='/'>
              <GoBell />
            </NavLink>
          </div>

          <div className='avatarContainer'>
            <div className='innerContainer'>
              <img
                // src='https://www.istockphoto.com/photo/the-royal-standard-of-the-united-kingdom-waving-the-wind-along-with-the-uk-flag-gm1422333301-467654133?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Ftim-kiem%2Fqe%2F&utm_medium=affiliate&utm_source=pexels&utm_term=qe'
                src='https://media.istockphoto.com/id/1422333301/vi/anh/ti%C3%AAu-chu%E1%BA%A9n-ho%C3%A0ng-gia-c%E1%BB%A7a-v%C6%B0%C6%A1ng-qu%E1%BB%91c-anh-v%E1%BA%ABy-gi%C3%B3-c%C3%B9ng-v%E1%BB%9Bi-l%C3%A1-c%E1%BB%9D-v%C6%B0%C6%A1ng-qu%E1%BB%91c-anh.jpg?b=1&s=612x612&w=0&k=20&c=Vt33IrtCcVBR38ff3801VukUoMM2eNAWvt5TTIlIq7U='
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mainContent'>
        <div className='sideNavWrapper'>
          <div className='inner'>size NAV</div>
        </div>
        <div className='mainContainer'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default InstructorLayout
