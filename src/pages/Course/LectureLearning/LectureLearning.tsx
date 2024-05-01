import { Dropdown, Progress, Spin, Tabs, TabsProps } from 'antd'
import { useForm } from 'react-hook-form'
import { IoIosShareAlt, IoMdClose, IoMdMore } from 'react-icons/io'
import { IoStar } from 'react-icons/io5'
import { MdKeyboardArrowDown, MdOndemandVideo } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import AccordionPanel from './AccordionPanel'
import styles from './LectureLearning.module.scss'
import { FaRegFile } from 'react-icons/fa6'
import { ImFolderOpen } from 'react-icons/im'
import { RiArrowDownSLine, RiArrowDropDownLine } from 'react-icons/ri'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import ReviewSection from '../CourseDetail/ReviewSection'
import { useState } from 'react'
import CommentSection from './ReviewSection'

interface ITEST {
  isCompleted: boolean
}

const TAB = {
  QAndA: 'Q&A',
  Reviews: 'Reviews'
}

function LectureLearning() {
  const { register, watch } = useForm<ITEST>({
    defaultValues: {
      isCompleted: false
    }
  })

  const [tab, setTab] = useState(TAB.QAndA)

  const [isLoading, setIsLoading] = useState<boolean>(false)

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

  const tabsItem: TabsProps['items'] = [
    {
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button navBtn'>
          <span>Q&A</span>
        </button>
      ),

      key: TAB.QAndA
    },
    {
      label: (
        <button className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button navBtn'>
          <span>Reviews</span>
        </button>
      ),
      key: TAB.Reviews
    }
  ]

  const handleTabChange = async (value: string) => {
    setIsLoading(true)
    setTab(value)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  console.log('render')
  return (
    <div className={styles.pageWrapper}>
      <div className='pageHeader'>
        <div className='headerContent'>
          <header className='header'>
            <NavLink to='/' className='navLink'>
              <img
                src='	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
                alt=''
                width='91'
                height='34'
              />
            </NavLink>

            <div className='verticalDivider'></div>

            <div className='title'>
              <h1 className='courseTitle'>
                <NavLink className='titleNavLink' to='/course/123312312'>
                  How to Create an Online Course: The Official Udemy Course
                </NavLink>
              </h1>
            </div>

            <button className='progressContainer ud-btn ud-btn-large ud-btn-ghost ud-text-sm'>
              <IoStar size={20} color='rgb(106, 111, 115)' />

              <span className='text'>Leaving a rating</span>
            </button>

            <button className='progressContainer'>
              <Progress type='circle' showInfo={false} percent={75} size={35} className='antdProgress' />

              <span className='text'>Your progress</span>
              <MdKeyboardArrowDown size={20} className='ud-icon ud-icon-small downIcon' />
            </button>

            <div className='menuOptions'>
              <button className='ud-btn ud-btn-medium ud-btn-white-outline ud-heading-sm'>
                <span>Share</span>
                <IoIosShareAlt size={15} />
              </button>
              <button className='ud-btn ud-btn-medium ud-btn-white-outline ud-heading-sm ud-btn-icon ud-btn-icon-medium'>
                <IoMdMore size={20} />
              </button>
            </div>
          </header>
        </div>
      </div>

      <div className='pageContainer'>
        <div className='containerContent'>
          <div className='videoSection'></div>
          <div className='curriculumSiderbar'>
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
                  <AccordionPanel title={`Section ${index + 1}: Save A Life by NHCPS & the Disque Foundation`}>
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
          <div className='dashboardSection'>
            <div className='tabWrapper'>
              <Tabs rootClassName={styles.rootTabs} items={tabsItem} onChange={(value) => handleTabChange(value)} />
            </div>

            <div className='sizingWrapper'>
              {isLoading ? <Spin rootClassName={styles.rootSpin} /> : <>{tab === TAB.Reviews && <CommentSection />}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LectureLearning
