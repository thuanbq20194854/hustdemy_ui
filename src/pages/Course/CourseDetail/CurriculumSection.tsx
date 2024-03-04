import React, { useState } from 'react'

import styles from './CurriculumSection.module.scss'
import SectionPanel from './SectionPanel'
import { Modal } from 'antd'
import { useBoolean } from '../../../hooks/useBoolean'
import { IoClose } from 'react-icons/io5'
import { FaRegCirclePlay } from 'react-icons/fa6'

const items = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' }
]

function CurriculumSection() {
  const [totalItems, setTotalItems] = useState<any>(items)

  const hidenItems = totalItems.slice(3)

  const [showMoreSection, setShowMoreSection] = useState<boolean>(false)

  const handleShowMoreSections = () => {
    setShowMoreSection(true)
  }

  const [isOpenModal, handleOpenModal, handleCloseModal] = useBoolean()

  const [previewItemIdToPlay, setPreviewItemIdToPlay] = useState<string>('')

  const handleOpenPreviewModal = (previewItemId: string) => {
    setPreviewItemIdToPlay(previewItemId)
    handleOpenModal()

    // Call API
  }
  return (
    <div className={styles.curriculumContainer}>
      <div className='header ud-heading-xl'>Course content</div>
      <div className='subheader ud-heading-xl'>
        <div className='contentLength ud-text-sm'>
          <span>44 sections</span>
          <span> • </span>
          <span>375 lectures</span>
          <span> • </span>
          <span>62h&nbsp;12m total length</span>
        </div>

        <button className='ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm'>
          <span>Expand all sections</span>
        </button>
      </div>

      <div className='section-panel-list'>
        {totalItems.slice(0, showMoreSection ? totalItems.length : 3).map((item: any) => {
          return <SectionPanel onOpenPreviewModal={handleOpenPreviewModal} key={item.id} />
        })}
      </div>

      {!showMoreSection && (
        <button
          className='moreSectionBtn ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm'
          onClick={handleShowMoreSections}
        >
          Show more {hidenItems.length} sections
        </button>
      )}

      <h1 onClick={handleOpenModal}>Open</h1>
      <Modal
        rootClassName={styles.rootPreviewModal}
        open={isOpenModal}
        closeIcon={<IoClose onClick={handleCloseModal} fill='#fff' />}
      >
        <div className='coursePreviewContainer'>
          <div className='title'>
            <span className='coursePreview ud-heading-sm'>Course Preview </span>
            <span className='courseTitle ud-heading-lg'>The Complete 2024 Web Development Bootcamp</span>
          </div>

          <h1>Embedded Video</h1>

          <div className='separationText ud-heading-md'>Free Sample Videos:</div>

          <div className='previewCourseItem'>
            <div className='thumbnailWrapper'>
              <img
                src='https://mp4-c.udemycdn.com/2023-10-26_09-22-56-36f5f7ae44167ec7e57442fc8f165c34/2/thumb-1.jpg?Expires=1709139641&Signature=KpVXLeqBg6NDB6TY81XiwVCNF1z0o~V0NWbJnVUjykKnZNJFhCHm3LE6a8f8wMcbU6O158JX0wNSD10f0JxWYfD3OsZvP75mV1YRhqincgicc-M-52c2~5qKEOnhBLMMCQ8Y2MfsHODmVhD40-7KsmD49x~cLCO2voQQBk~6dBv-VV9W8YFnJV3L6bJ5CamqR~zMvTzmllvVE1X4aidMqipGcBYsR2QipQKXr6BabD0966sBuId0GDlOO7UtknaeV8AzMhe8~4E4zuI3Qbl676zvNXdMPcgF-zKFHy2TdOIFM133qLlpg9Ep~UfMlhSzxwiFrssXVZgyBDhJXai7sw__&Key-Pair-Id=K3MG148K9RIRF4'
                alt=''
              />
            </div>

            <div className='previewTitle ud-heading-sm'>The Complete 2024 Web Development Bootcamp</div>
            <div className='ud-heading-xs'>03:06</div>
          </div>
          <div className='previewCourseItem'>
            <div className='thumbnailWrapper'>
              <img
                src='https://mp4-c.udemycdn.com/2023-10-26_09-22-56-36f5f7ae44167ec7e57442fc8f165c34/2/thumb-1.jpg?Expires=1709139641&Signature=KpVXLeqBg6NDB6TY81XiwVCNF1z0o~V0NWbJnVUjykKnZNJFhCHm3LE6a8f8wMcbU6O158JX0wNSD10f0JxWYfD3OsZvP75mV1YRhqincgicc-M-52c2~5qKEOnhBLMMCQ8Y2MfsHODmVhD40-7KsmD49x~cLCO2voQQBk~6dBv-VV9W8YFnJV3L6bJ5CamqR~zMvTzmllvVE1X4aidMqipGcBYsR2QipQKXr6BabD0966sBuId0GDlOO7UtknaeV8AzMhe8~4E4zuI3Qbl676zvNXdMPcgF-zKFHy2TdOIFM133qLlpg9Ep~UfMlhSzxwiFrssXVZgyBDhJXai7sw__&Key-Pair-Id=K3MG148K9RIRF4'
                alt=''
              />
            </div>

            <div className='previewTitle ud-heading-sm'>
              <FaRegCirclePlay className='playIcon'/>
              <span>The Complete 2024 Web Development Bootcamp</span>
            </div>
            <div className='ud-heading-xs'>03:06</div>
          </div>
          <div className='previewCourseItem'>
            <div className='thumbnailWrapper'>
              <img
                src='https://mp4-c.udemycdn.com/2023-10-26_09-22-56-36f5f7ae44167ec7e57442fc8f165c34/2/thumb-1.jpg?Expires=1709139641&Signature=KpVXLeqBg6NDB6TY81XiwVCNF1z0o~V0NWbJnVUjykKnZNJFhCHm3LE6a8f8wMcbU6O158JX0wNSD10f0JxWYfD3OsZvP75mV1YRhqincgicc-M-52c2~5qKEOnhBLMMCQ8Y2MfsHODmVhD40-7KsmD49x~cLCO2voQQBk~6dBv-VV9W8YFnJV3L6bJ5CamqR~zMvTzmllvVE1X4aidMqipGcBYsR2QipQKXr6BabD0966sBuId0GDlOO7UtknaeV8AzMhe8~4E4zuI3Qbl676zvNXdMPcgF-zKFHy2TdOIFM133qLlpg9Ep~UfMlhSzxwiFrssXVZgyBDhJXai7sw__&Key-Pair-Id=K3MG148K9RIRF4'
                alt=''
              />
            </div>

            <div className='previewTitle ud-heading-sm'>The Complete 2024 Web Development Bootcamp</div>
            <div className='ud-heading-xs'>03:06</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CurriculumSection
