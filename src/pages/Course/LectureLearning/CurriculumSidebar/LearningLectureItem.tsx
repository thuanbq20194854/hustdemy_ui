import { Dropdown } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { ImFolderOpen } from 'react-icons/im'
import { MdOndemandVideo } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'

import { Curriculum, EAssetType, ELectureType, Lecture } from '@/models/course'
import styles from '../LectureLearning.module.scss'
import { useLectureLearningContext } from '../context/LectureLearningContext'
import { MarkLecture } from '../LectureLearning'

interface IProps {
  lectureItem: Lecture

  index: number
}

function LearningLectureItem({ lectureItem, index }: IProps) {
  const { handleUpdateCompleteLecure, course } = useLectureLearningContext()

  const renderResourceDropdown = (lectureItem: Lecture) => {
    return lectureItem.assets
      .filter((assetItem) => assetItem.type === EAssetType.Resource)
      .map((resourceItem) => ({
        key: resourceItem.id,
        label: (
          <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
            <HiOutlineFolderDownload size={16} className='downloadIcon' />

            <span className='ud-block-list-item-content ellipse-1-row'>{resourceItem.name}</span>
          </button>
        )
      }))
  }

  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const element: HTMLDivElement | null = sidebarRef.current
      if (element && scrollPosition > 56) {
        element.style.top = '0px' // Change margin when scrolled more than 56px
      } else if (element) {
        element.style.top = '56px'
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const convertToHourMins = (passedMin: number) => {
    const hour = Math.floor(passedMin / 60)
    const minute = passedMin % 60

    if (hour === 0) {
      return `${minute}min`
    } else {
      return `${hour}hr${minute}min`
    }
  }

  const handleChangeChecked = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // API and Update State

    const formData: MarkLecture = {
      curriculum_id: lectureItem.curriculum_id,
      lecture_id: lectureItem.id
    }

    try {
      handleUpdateCompleteLecure(formData)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangeLecture = () => {}

  console.log('render')
  return (
    <div className='learningLectureItem' key={lectureItem.id}>
      <div className='inputContainer'>
        <input
          type='checkbox'
          className='inputElement'
          // disabled={lectureItem.is_done}
          // readOnly={lectureItem.is_done}
          checked={lectureItem.is_done}
          onChange={handleChangeChecked}
        />
      </div>

      <div className='itemContainer'>
        <div className='ud-text-sm ud-focus-visible-target'>
          <div>{`${
            lectureItem.type === ELectureType.Lecture ? index : `Quiz ${index}`
          }. Introducing Save A Life by NHCPS & the Disque Foundation`}</div>
        </div>

        <div className='bottomRow ud-text-xs'>
          <div className='metaData'>
            {lectureItem.type === ELectureType.Lecture && (
              <>
                <MdOndemandVideo size={16} />
                <span>
                  {convertToHourMins(
                    lectureItem.assets.find((assetItem) => assetItem.type === EAssetType.VideoWatch)?.duration as number
                  )}
                </span>
              </>
            )}
          </div>

          {lectureItem.type === ELectureType.Lecture && lectureItem.assets.length >= 2 && (
            <Dropdown
              menu={{ items: renderResourceDropdown(lectureItem) }}
              placement='bottomRight'
              trigger={['click']}
              rootClassName={styles.rootDropdown}
            >
              <div className='resourcePopper'>
                <button className='ud-btn ud-btn-xsmall ud-btn-secondary ud-text-sm'>
                  <ImFolderOpen size={16} />

                  <span>Resources</span>

                  <RiArrowDownSLine size={16} />
                </button>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  )
}

export default LearningLectureItem
