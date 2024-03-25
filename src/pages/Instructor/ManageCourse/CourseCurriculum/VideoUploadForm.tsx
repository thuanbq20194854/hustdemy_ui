import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UpdateVideoForm, UpdateVideoWatch } from '../../../../models/course'
import { MdOutlineClose } from 'react-icons/md'
import { Button, Upload } from 'antd'
import { useCourseManageContext } from '../context/CourseMangeContext'

interface IProps {
  sectionId: number
  lectureId: number
  handleBackToNormal: () => void
}

function VideoUploadForm({ sectionId, lectureId, handleBackToNormal }: IProps) {
  const { handleUpdateVideo } = useCourseManageContext()
  const { handleSubmit, watch, control, setValue } = useForm<UpdateVideoForm>({
    defaultValues: {
      curriculum_id: sectionId,
      lecture_id: lectureId
      //   video: FileList
    }

    // resolver : yupResolver(schemaUpdate)
  })

  const handleSubmitForm = (data: UpdateVideoForm) => {
    console.log(data)
  }

  const handleFileUpload = ({ file }: any) => {
    console.log(file)
  }

  const handleUploadChange = (info: any) => {
    console.log('info: ', info)

    const { file, fileList } = info

    setValue('video', fileList)

    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`)
      // Perform any additional actions you need when the file upload is successful
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`)
      // Handle error cases if necessary
    }
  }

  console.log("watch('video'): ", watch('video'))

  return (
    <div className='addContentWrapper'>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className='title ud-heading-md'>Upload Video</div>

        <Controller
          control={control}
          name='video'
          render={(fields) => (
            <Upload
              {...fields}
              action={'http://localhost:3000/'}
              customRequest={handleFileUpload}
              onChange={handleUploadChange}
            >
              <Button>Click to upload video</Button>
            </Upload>

            // <input type='file' onChange={(e) => handleUploadChange(e)} {...fields} />
          )}
        />

        <div className='tabTitleContainer'>
          <span className='text ud-heading-sm'>Add Content</span>
          <button className='iconBtn' onClick={handleBackToNormal}>
            <MdOutlineClose />
          </button>
        </div>
      </form>
    </div>
  )
}

export default VideoUploadForm
