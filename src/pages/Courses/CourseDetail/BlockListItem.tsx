import React from 'react'

import { PiVideoLight } from 'react-icons/pi'
import { FaRegFile } from 'react-icons/fa6'

import styles from './BlockListItem.module.scss'

interface IProps {
  previewable?: boolean
  type?: string
}

function BlockListItem({ previewable = false, type = 'video' }: IProps) {
  return (
    <div className={`${styles.blockListItem} ${previewable && styles.previewable}`}>
      {type === 'file' ? <FaRegFile size={14} /> : <PiVideoLight size={16} />}
      <div className='blockListItem-content'>
        <div className='title'>
          {previewable ? (
            <button className='ud-btn ud-btn-large ud-btn-link ud-text-sm'>
              <span>What You'll Get in This Course</span>
            </button>
          ) : (
            <span className='title-span'>What You'll Get in This Course</span>
          )}
        </div>
        {previewable && (
          <button className='previewBtn'>
            <span>Preview</span>
          </button>
        )}
        <span className='duration'>03:08</span>
      </div>
    </div>
  )
}

export default BlockListItem
