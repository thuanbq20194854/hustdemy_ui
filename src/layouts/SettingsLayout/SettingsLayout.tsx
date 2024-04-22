import React from 'react'

import styles from './SettingsLayout.module.scss'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { useAppSelector } from '../../services/state/redux/store'

function SettingsLayout() {
  const { user } = useAppSelector((state) => state.auth)
  return (
    <>
      <Header />
      <div className={styles.layoutWrapper}>
        <div className='sidebar'>
          <div className='avatarContaner'>
            <div className='ud-avatar ud-heading-xl'>
              <img src={user?.avatar ?? 'https://img-c.udemycdn.com/user/200_H/anonymous_3.png'} alt='' />
            </div>
          </div>
          <div className='userTitle ud-heading-md'>Bui Quoc THuan</div>

          <ul className='sideNavMenu'>
            <li className='sideNavItem'>
              <NavLink
                to='/user/edit-profile'
                className={({ isActive, isPending }) => (isActive || isPending ? 'active' : '')}
              >
                Profile
              </NavLink>
            </li>
            <li className='sideNavItem'>
              <NavLink to='/user/edit-photo'>Photo</NavLink>
            </li>
            <li className='sideNavItem'>
              <NavLink to='/user/edit-account'>Account</NavLink>
            </li>
          </ul>
        </div>
        <div className='mainContent'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default SettingsLayout
