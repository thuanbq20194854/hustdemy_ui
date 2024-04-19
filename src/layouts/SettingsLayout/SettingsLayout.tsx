import React from 'react'

import styles from './SettingsLayout.module.scss'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function SettingsLayout() {
  return (
    <>
      <div className={styles.layoutWrapper}>
        <div className='sidebar'>
          <div className='avatarContaner'>
            <div className='ud-avatar ud-heading-xl'>
              <img
                src='https://images.pexels.com/photos/17290327/pexels-photo-17290327/free-photo-of-photoshoot-with-joana-slva.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt=''
              />
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
