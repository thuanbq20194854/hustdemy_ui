import React, { useState } from 'react'

import styles from './SectionPanel.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import BlockListItem from './BlockListItem'

interface IProps {
  hiden?: boolean
  onOpenPreviewModal: (previewItemId: string) => void
}

function SectionPanel({ hiden = false, onOpenPreviewModal }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickPreviewableItem = (previewVideoId: string) => {
    onOpenPreviewModal(previewVideoId)
  }

  return (
    <div className={styles.sectionPanel} style={{ display: hiden ? 'none' : '' }}>
      <button className='section-toggleContainer' onClick={handleToggleOpen}>
        <div className='section-toggler'>
          <IoIosArrowDown className={`${isOpen && 'isOpened'} svg-icon`} />
          <div className='section-title ud-heading-md'>Front-End Web Development</div>
          <span>
            <span>9 lectures</span>
            <span> • </span>
            <span>37min</span>
          </span>
        </div>
      </button>
      <div style={{ display: isOpen ? '' : 'none' }} className='content-wrapper'>
        {/* If item.previewable === true => pass handleClickPreviewableItem */}
        <BlockListItem />
        <BlockListItem type='file' previewable={true} onClickItem={handleClickPreviewableItem} />
        <BlockListItem />
        <BlockListItem type='video' previewable={true} />
      </div>
    </div>
  )
}

export default SectionPanel
