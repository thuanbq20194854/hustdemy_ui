import { useState } from 'react'

// 1. Normal 2 Show 3. Add/Select/Loading Recourse 4. Add/Select/Loading Content

import { AiOutlinePlus } from 'react-icons/ai'
import { GoFile } from 'react-icons/go'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdDelete, MdEdit, MdOutlineClose } from 'react-icons/md'
import { SlControlPlay } from 'react-icons/sl'
import { ILecture } from '../../../../models/course'
import styles from './LectureItem.module.scss'
import VideoUploadForm from './VideoUploadForm'

const LECTURE_MODE = {
  NORMAL: 1,
  SHOW: 2,
  ADD_CONTENT: 3,
  UPLOAD_CONTENT: 4,
  SELECT_CONTENT_TYPE: 5,
  ADD_RESOURCE: 6,
  UPLOAD_RESOURCE: 7,
  SELECT_RESOURCE_TYPE: 8
}

interface IProps {
  lectureItem: ILecture
  sectionId: number
}

function LectureItem({ lectureItem, sectionId }: IProps) {
  const [lectureMode, setLectureMode] = useState(LECTURE_MODE.NORMAL)

  const [open, setOpen] = useState(false)

  const handleBackToNormal = () => {
    setLectureMode(LECTURE_MODE.NORMAL)
  }

  const lectureVideoWatch = lectureItem.assets?.find((item) => item.type === 1)

  return (
    <div className={styles.lectureItemWrapper}>
      <div className='normalWrapper'>
        <div className='leftRegion'>
          <div className='iconContainer'>
            <IoCheckmarkCircle />
          </div>

          <div className='quizLabel'>Lecture 5</div>

          <div className='iconContainer'>
            <GoFile />
          </div>

          <div className='quizTitle'>How React Work Behind</div>

          <>
            <button className='editBtn'>
              <MdEdit size={16} />
            </button>
            <button className='deleteBtn'>
              <MdDelete size={16} />
            </button>
          </>
        </div>

        {lectureMode === LECTURE_MODE.NORMAL && (
          <div className='rightRegion'>
            <button
              className='addBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'
              onClick={() => setLectureMode(LECTURE_MODE.SELECT_CONTENT_TYPE)}
            >
              <AiOutlinePlus size={16} className='plusIcon' />
              <span>Content</span>
            </button>

            {!open ? (
              <button className='showBtn' onClick={() => setOpen(true)}>
                <IoIosArrowDown size={16} />
              </button>
            ) : (
              <button className='showBtn' onClick={() => setOpen(false)}>
                <IoIosArrowUp size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      {lectureMode === LECTURE_MODE.NORMAL && open && (
        <div className='showWrapper'>
          <div className='contentContainer'>
            <div className='lectureHeader'>
              <div className='imgContainer'>
                <img
                  src='<img lazy="load" src="https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" srcset="https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=150&amp;lazy=load 150w, https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=300&amp;lazy=load 300w, https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400&amp;lazy=load 400w, https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load 600w, https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800&amp;lazy=load 800w, https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200&amp;lazy=load 1200w, https://images.pexels.com/photos/20451076/pexels-photo-20451076/free-photo-of-thanh-th-n.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600&amp;lazy=load 1600w" sizes="(max-width: 650px) calc((100vw - 45px) / 2), (max-width: 900px) calc((100vw - 45px) / 2), (max-width: 1440px) calc((100vw - 100px) / 3), (max-width: 1600px) calc((100vw - 200px) / 3), calc((1600px - 200px) / 3)" alt="Miễn phí Thanh Thản Ảnh lưu trữ" class="spacing_noMargin__Q_PsJ MediaCard_image__ljFAl">'
                  alt=''
                />
              </div>

              <div className='lectureInfo'>
                <div className='fileName ud-heading-md'>production_id_5120413 (1080p).mp4</div>
                <div className='timeLength'>00:07</div>
                <button
                  className='editContentBtn ud-btn ud-btn-link ud-text-md'
                  onClick={() => setLectureMode(LECTURE_MODE.ADD_CONTENT)}
                >
                  <MdEdit />
                  <span>Edit Content</span>
                </button>
              </div>
            </div>

            <div className='lectureSetting'></div>
          </div>
          <div className='descContainer'>
            <div className='descInner'>Description DescriptionDescriptionDescriptionDescription</div>
          </div>
          <div className='materialContainer'>
            <div className='materialTitle ud-heading-sm'>Downloadable materials</div>
            <div className='materialItem'>
              <div className='iconContainer'>
                <HiOutlineFolderDownload />
              </div>
              <div className='materialItem--fileName'>Screenshot 2024-03-05 001222.png {`12.4kB`}</div>
              <button className='iconContainer deleteContainer'>
                <MdDelete />
              </button>
            </div>
          </div>

          <div className='btnRegion'>
            <button className='addBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'>
              <AiOutlinePlus size={16} className='plusIcon' />
              <span>Description</span>
            </button>
            <button className='addBtn ud-btn ud-btn-small ud-btn-secondary ud-heading-sm'>
              <AiOutlinePlus size={16} className='plusIcon' />
              <span>Resources</span>
            </button>
          </div>
        </div>
      )}

      {lectureMode === LECTURE_MODE.SELECT_CONTENT_TYPE && (
        <div className='selectContentTypeWrapper'>
          <button className='imageContainer' onClick={() => setLectureMode(LECTURE_MODE.ADD_CONTENT)}>
            <div className='multiChoiceBtn'>
              <div className='iconContainer'>
                <SlControlPlay />
              </div>
              <div className='text ud-text-xs'>Video</div>
            </div>
          </button>

          <div className='tabTitleContainer'>
            <span className='text ud-heading-sm'>Select content type</span>
            <button className='iconBtn' onClick={() => setLectureMode(LECTURE_MODE.NORMAL)}>
              <MdOutlineClose />
            </button>
          </div>
        </div>
      )}

      {lectureMode === LECTURE_MODE.ADD_CONTENT && (
        <VideoUploadForm
          lectureVideoWatch={lectureVideoWatch}
          handleBackToNormal={handleBackToNormal}
          sectionId={sectionId}
          lectureId={lectureItem.id}
        />
      )}
    </div>
  )
}

export default LectureItem
