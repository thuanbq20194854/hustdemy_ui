import React from 'react'

import styles from './ObjectiveList.module.scss'
import { IoCheckmark } from 'react-icons/io5'

function ObjectiveList() {
  return (
    <div className={styles.objectiveList}>
      <div className='title ud-heading-xl'>What you'll learn</div>

      <ul>
        <li>
          <div className='icon'>
            <IoCheckmark />
          </div>

          <div className='objective'>
            <span>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</span>
          </div>
        </li>
        <li>
          <div className='icon'>
            <IoCheckmark />
          </div>

          <div className='objective'>
            <span>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</span>
          </div>
        </li>
        <li>
          <div className='icon'>
            <IoCheckmark />
          </div>

          <div className='objective'>
            <span>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</span>
          </div>
        </li>
        <li>
          <div className='icon'>
            <IoCheckmark />
          </div>

          <div>
            <span className='objective'>
              Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ObjectiveList
