import { Button, Form, Upload } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useEffect } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { IAsset, UpdateVideoForm } from '../../../../models/course'
import { useCourseManageContext } from '../context/CourseMangeContext'

import { BsUpload } from 'react-icons/bs'

interface IProps {
  sectionId: number
  lectureId: number
  handleBackToNormal: () => void
  lectureVideoWatch: IAsset | undefined
}

const MAX_FILE_SIZE = 2000000000

function VideoUploadForm({ sectionId, lectureId, handleBackToNormal, lectureVideoWatch }: IProps) {
  const { handleUpdateLectureVideo } = useCourseManageContext()

  const [form] = useForm()

  const handleFileUpload = (info: any) => {
    // setFileList([info.file])
    // console.log(info)
    // const { file } = info
    // const percent = Math.round((file?.percent || 0) * 100)
    // console.log(info)
    // console.log('zzzzz: ', percent)

    console.log(info)

    form.setFieldValue('fileList', info.fileList)

    console.log(info)
  }

  const handleSubmit = () => {
    console.log(form.getFieldsValue())
    // console.log('hehe')
    const formData: UpdateVideoForm = {
      lecture_id: lectureId,
      section_id: sectionId,
      video: form.getFieldValue('fileList')
    }

    handleUpdateLectureVideo(formData)
  }

  useEffect(() => {
    if (lectureVideoWatch) {
      form.setFieldValue('fileList', lectureVideoWatch)
    }
  }, [])

  console.log(form.getFieldsError())

  console.log('form.getFieldsValue(): ', form.getFieldsValue())

  return (
    <div className={'addContentWrapper'}>
      <Form form={form} className='formAntd'>
        <div className='title ud-heading-md'>Upload Video</div>

        <Form.Item
          style={{ marginTop: '16px' }}
          name='fileList'
          // valuePropName='fileList222'
          // getValueFromEvent={(event) => {
          //   return event?.fileList
          // }}
          // initialValue={lectureVideo}
          shouldUpdate={true}
          rules={
            [
              // {
              //   required: true,
              //   message: 'Please upload your lecture video'
              // },
              // {
              //   validator(_, fileList) {
              //     console.log('run validate')
              //     return new Promise((resolve, reject) => {
              //       if (fileList && fileList[0].size > MAX_FILE_SIZE) {
              //         reject(`File size exceeded ${MAX_FILE_SIZE}`)
              //       } else {
              //         resolve('Success')
              //       }
              //     })
              //   }
              // }
            ]
          }
        >
          <Upload
            maxCount={1}
            // beforeUpload={(file) => {
            //   return new Promise((resolve, reject) => {
            //     if (file.size > MAX_FILE_SIZE) {
            //       reject(`File size exceeded ${MAX_FILE_SIZE}`)
            //     } else {
            //       resolve('Success')
            //     }
            //   })
            // }}
            showUploadList={false}
            customRequest={handleFileUpload}
          >
            <Button icon={<BsUpload />}>Click to upload video</Button>

            <span style={{ marginLeft: '16px' }}>{form.getFieldValue('fileList')?.name ?? ''}</span>
          </Upload>
        </Form.Item>

        <Button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm uploadBtn' onClick={handleSubmit}>
          {lectureVideoWatch ? 'Replace' : 'Upload'}
        </Button>
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
