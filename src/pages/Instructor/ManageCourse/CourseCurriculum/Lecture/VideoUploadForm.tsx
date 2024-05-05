import { Button, Form, Upload } from 'antd'
import { useForm, useWatch } from 'antd/es/form/Form'
import { MdOutlineClose } from 'react-icons/md'
import { Asset, UpdateVideoForm } from '../../../../../models/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'

import { BsUpload } from 'react-icons/bs'

interface IProps {
  curriculumId: number
  lectureId: number
  handleBackToNormal: () => void
  lectureVideoWatch: Asset | undefined
}

interface IForm {
  videoUpload: IUpload
}

interface IUpload {
  file: File
  fileList: FileList
}

const MAX_FILE_SIZE = 200000000000000

function VideoUploadForm({ curriculumId, lectureId, handleBackToNormal, lectureVideoWatch }: IProps) {
  const { handleUploadLectureVideo, handleReplaceLectureVideo } = useCourseManageContext()

  const [form] = useForm<IForm>()

  const formWatch = useWatch([], form) ?? {}

  const handleFileUpload = () => {
    return
  }

  const handleSubmit = () => {
    const formData: UpdateVideoForm = {
      lecture_id: lectureId,
      section_id: curriculumId,
      video: form.getFieldValue('videoUpload').fileList
    }

    console.log('formData: ', formData)

    if (lectureVideoWatch) {
      handleReplaceLectureVideo(formData)
    } else {
      handleUploadLectureVideo(formData)
    }

    handleBackToNormal()
  }

  // const handleBeforeUpload = (file: RcFile) => {
  //   const isZip = file.type === 'application/zip'
  //   if (!isZip) {
  //     message.error('You can only upload ZIP file!')
  //   }
  //   return isZip
  // }

  return (
    <div className={'addContentWrapper'}>
      <Form form={form} onFinish={handleSubmit} className='formAntd'>
        <div className='title ud-heading-md'>Upload Video</div>

        <Form.Item
          style={{ marginTop: '16px' }}
          name='videoUpload'
          shouldUpdate={true}
          rules={[
            {
              required: true,
              message: 'Please upload your lecture video'
            },

            {
              validator(_, value) {
                const isVideo = value.file.type.startsWith('video/mp4')
                return new Promise((resolve, reject) => {
                  if (!isVideo) {
                    reject(`You can only upload .mp4 file`)
                  } else {
                    resolve('')
                  }
                })
              }
            },
            {
              validator(_, value) {
                return new Promise((resolve, reject) => {
                  if (value && value.file.size > MAX_FILE_SIZE) {
                    reject(`File size exceeded ${MAX_FILE_SIZE}`)
                  } else {
                    resolve('')
                  }
                })
              }
            }
          ]}
          help={form.getFieldError('videoUpload').length > 0 ? form.getFieldError('videoUpload') : undefined}
        >
          <Upload
            className='uploadBtnAntd'
            maxCount={1}
            showUploadList={false}
            customRequest={handleFileUpload}
            // beforeUpload={handleBeforeUpload}
          >
            <Button icon={<BsUpload />}>Click to upload video</Button>

            <span style={{ marginLeft: '16px' }}>
              {formWatch.videoUpload ? formWatch.videoUpload.fileList[0].name : ''}
            </span>
          </Upload>
        </Form.Item>

        <Button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm submitBtn' onClick={() => form.submit()}>
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
