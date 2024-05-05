import React, { useState } from 'react'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { Asset } from '../../../../../models/course'
import { MdDelete } from 'react-icons/md'
import DeleteResourceItemModal from './DeleteResourceItemModal'

interface IProps {
  resourceItem: Asset

  curriculumId: number
  lectureId: number
}

function ResourceItem({ resourceItem, curriculumId, lectureId }: IProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className='materialItem'>
      <div className='iconContainer'>
        <HiOutlineFolderDownload />
      </div>
      <div className='materialItem--fileName'>
        {resourceItem.name} {`${resourceItem.size}kB`}
      </div>
      <button className='iconContainer deleteContainer' onClick={() => setOpen(true)}>
        <MdDelete />
      </button>

      <DeleteResourceItemModal
        resourceId={resourceItem.id}
        handleCommandModal={setOpen}
        isOpen={open}
        curriculumId={curriculumId}
        lectureId={lectureId}
      />
    </div>
  )
}

export default ResourceItem
