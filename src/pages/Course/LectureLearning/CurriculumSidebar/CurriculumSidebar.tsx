import { Dropdown } from 'antd'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegFile } from 'react-icons/fa6'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { ImFolderOpen } from 'react-icons/im'
import { MdOndemandVideo } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'
import AccordionPanel from './AccordionPanel'
import { IoMdClose } from 'react-icons/io'

import styles from '../LectureLearning.module.scss'

interface ITEST {
  isCompleted: boolean
}

function CurriculumSidebar() {
  const { register, watch } = useForm<ITEST>({
    defaultValues: {
      isCompleted: false
    }
  })

  console.log('watch: ', watch())

  const isVideo = false

  const hasResource = true

  const items = [
    {
      key: '1',
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
          <HiOutlineFolderDownload size={16} className='downloadIcon' />

          <span className='ud-block-list-item-content ellipse-1-row'>Identify-Your-Intended-Learners.pdf</span>
        </button>
      )
    },
    {
      key: '2',
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
          <HiOutlineFolderDownload size={16} className='downloadIcon' />

          <span className='ud-block-list-item-content ellipse-1-row'>Identify-Your-Intended-Learners.pdf</span>
        </button>
      )
    },
    {
      key: '3',
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-text-sm ud-block-list-item ud-block-list-item-small ud-block-list-item-neutral resouceButton'>
          <HiOutlineFolderDownload size={16} className='downloadIcon' />

          <span className='ud-block-list-item-content ellipse-1-row'>Identify-Your-Intended-Learners.pdf</span>
        </button>
      )
    }
  ]

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

  return (
    <div className='curriculumSiderbar' ref={sidebarRef}>
      <div className='sidebar--header'>
        <h2 className='ud-heading-md'>Course content</h2>
        <button className='ud-btn ud-btn-large ud-btn-link ud-heading-md ud-link-neutral sidebar--closeBtn'>
          <IoMdClose size={20} />
        </button>
      </div>

      <div className='sidebar--content'>
        {Array(10)
          .fill(0)
          .map((item, index) => (
            <AccordionPanel title={`Section ${index + 1}: Save A Life by NHCPS & the Disque Foundation`} key={index}>
              {Array(5)
                .fill(0)
                .map((item, index) => (
                  <div className='curriculumItem' key={index}>
                    {/* <Checkbox {...register('isCompleted')} /> */}

                    <div className='inputContainer'>
                      <input type='checkbox' {...register('isCompleted')} className='inputElement' />
                    </div>

                    <div className='itemContainer'>
                      <div className='ud-text-sm ud-focus-visible-target'>
                        <div>1. Introducing Save A Life by NHCPS & the Disque Foundation</div>
                      </div>

                      <div className='bottomRow ud-text-xs'>
                        <div className='metaData'>
                          {isVideo ? <FaRegFile size={16} /> : <MdOndemandVideo size={16} />}
                          <span>1 min</span>
                        </div>

                        {hasResource && (
                          <Dropdown
                            menu={{ items }}
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
                ))}
            </AccordionPanel>
          ))}
      </div>
    </div>
  )
}

export default CurriculumSidebar
