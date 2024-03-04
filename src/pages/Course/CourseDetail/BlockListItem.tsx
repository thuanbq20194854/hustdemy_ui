import React from 'react'

import { PiVideoLight } from 'react-icons/pi'
import { FaRegFile } from 'react-icons/fa6'

import styles from './BlockListItem.module.scss'

interface IProps {
  itemData?: any
  previewable?: boolean
  type?: string
  onClickItem?: (previewVideoId: string) => void
}

function BlockListItem({ previewable = false, type = 'video', onClickItem, itemData }: IProps) {
  return (
    <button
      className={`${styles.blockListItem} ${previewable && styles.previewable}`}
      onClick={() => onClickItem && onClickItem(itemData.id)}
    >
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
    </button>
  )
}

export default BlockListItem
