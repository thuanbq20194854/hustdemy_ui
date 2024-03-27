import { Button, Form, Upload } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { IAsset, UpdateVideoForm } from '../../../../models/course'
import { useCourseManageContext } from '../context/CourseMangeContext'

import styles from './VideoUploadForm.module.scss'
import { BsUpload } from 'react-icons/bs'
import axios from 'axios'

interface IProps {
  sectionId: number
  lectureId: number
  handleBackToNormal: () => void
  lectureVideo: IAsset | undefined
}

const MAX_FILE_SIZE = 2000000000

function VideoUploadForm({ sectionId, lectureId, handleBackToNormal }: IProps) {
  const [fileList, setFileList] = useState<any>([])
  const { handleUpdateLectureVideo } = useCourseManageContext()

  const [form] = useForm()

  const handleFileUpload = (info) => {
    // setFileList([info.file])
    // console.log(info)
    // const { file } = info
    // const percent = Math.round((file?.percent || 0) * 100)
    // console.log(info)
    // console.log('zzzzz: ', percent)

    console.log(info)
  }

  const handleOnChange = (info) => {
    // setShowupload(true)
    const { status } = info.file
    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList)
    // }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`)
    //   setShowupload(false)
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`)
    //   setShowupload(false)
    // }

    console.log('status: ', status)
  }

  const handleSubmit = () => {
    // console.log('hehe')
    const formData: UpdateVideoForm = {
      lecture_id: lectureId,
      section_id: sectionId,
      video: fileList[0]
    }

    handleUpdateLectureVideo(formData)
  }

  console.log('form.getFieldsValue(): ', form.getFieldsValue())

  return (
    <div className={'addContentWrapper'}>
      <Form form={form} className='formAntd'>
        <div className='title ud-heading-md'>Upload Video</div>

        <Form.Item
          style={{ marginTop: '16px' }}
          name='videoFile'
          valuePropName='fileList222'
          getValueFromEvent={(event) => {
            return event?.fileList
          }}
          // initialValue={lectureVideo}
          rules={[
            {
              required: true,
              message: 'Please upload your lecture video'
            },
            {
              validator(_, fileList) {
                console.log('run validate')
                return new Promise((resolve, reject) => {
                  if (fileList && fileList[0].size > MAX_FILE_SIZE) {
                    reject(`File size exceeded ${MAX_FILE_SIZE}`)
                  } else {
                    resolve('Success')
                  }
                })
              }
            }
          ]}
        >
          <Upload
            maxCount={1}
            beforeUpload={(file) => {
              return new Promise((resolve, reject) => {
                if (file.size > MAX_FILE_SIZE) {
                  reject(`File size exceeded ${MAX_FILE_SIZE}`)
                } else {
                  resolve('Success')
                }
              })
            }}
            showUploadList={false}
            customRequest={handleFileUpload}
            onChange={handleOnChange}
            // progress={{
            //   format: (pervent) {

            //     console.log(pervent)
            //   }
            // }}
          >
            <Button icon={<BsUpload />}>Click to upload video</Button>

            <span style={{ marginLeft: '16px' }}>{fileList[0]?.name}</span>
          </Upload>
        </Form.Item>

        <Button onClick={handleSubmit}>Upload</Button>
        <div className='tabTitleContainer'>
          <span className='text ud-heading-sm'>Add Content</span>
          <button className='iconBtn' onClick={handleBackToNormal}>
            <MdOutlineClose />
          </button>
        </div>
      </Form>
    </div>
  )
}

export default VideoUploadForm
