import React from 'react'
import { GoDotFill } from 'react-icons/go'

import styles from './RequirementSection.module.scss'

function RequirementSection() {
  return (
    <div className={styles.requirementSection}>
      <h2 className='title ud-heading-xl'>Requirements</h2>

      <ul className='ud-unstyled-list list'>
        <li>
          <GoDotFill />
          <span>No programming experience needed - I'll teach you everything you need to know</span>
        </li>
        <li>
          <GoDotFill />
          <span>No programming experience needed - I'll teach you everything you need to know</span>
        </li>
        <li>
          <GoDotFill />
          <span>No programming experience needed - I'll teach you everything you need to know</span>
        </li>
        <li>
          <GoDotFill />
          <span>No programming experience needed - I'll teach you everything you need to know</span>
        </li>
      </ul>
    </div>
  )
}

export default RequirementSection
