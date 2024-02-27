import React from 'react'
import styles from './Badges.module.scss'

export function Bestseller() {
  return <div className={`${styles.bestseller} badgeItem ud-badge ud-heading-xs bestseller`}>Bestseller</div>
}

export function UpdatedRecently() {
  return (
    <div className={`${styles.updatedRecently} badgeItem ud-badge ud-heading-xs updated-recently`}>
      Updated Recently
    </div>
  )
}
