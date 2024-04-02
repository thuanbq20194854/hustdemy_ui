import { Button, Form, Upload } from 'antd'
import { useForm, useWatch } from 'antd/es/form/Form'
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

interface IForm {
  videoUpload: IUpload
}

interface IUpload {
  file: File
  fileList: FileList
}

const MAX_FILE_SIZE = 200000000000000

function VideoUploadForm({ sectionId, lectureId, handleBackToNormal, lectureVideoWatch }: IProps) {
  const { handleUploadLectureVideo, handleReplaceLectureVideo } = useCourseManageContext()

  const [form] = useForm<IForm>()

  const formWatch = useWatch([], form) ?? {}

  console.log('formWatch: ', formWatch)

  console.log('form.getFieldsValue(): ', form.getFieldsValue())

  const handleFileUpload = () => {
    return
  }

  const handleSubmit = () => {
    const formData: UpdateVideoForm = {
      lecture_id: lectureId,
      section_id: sectionId,
      video: form.getFieldValue('videoUpload').fileList
    }

    console.log('formData: ', formData)

    if (lectureVideoWatch) {
      handleReplaceLectureVideo(formData)
    } else {
      handleUploadLectureVideo(formData)
    }
  }

  return (
    <div className={'addContentWrapper'}>
      <Form form={form} className='formAntd'>
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
                console.log('value: ', value)
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
          <Upload maxCount={1} showUploadList={false} customRequest={handleFileUpload}>
            <Button icon={<BsUpload />}>Click to upload video</Button>

            <span style={{ marginLeft: '16px' }}>
              {formWatch.videoUpload ? formWatch.videoUpload.fileList[0].name : ''}
            </span>
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
