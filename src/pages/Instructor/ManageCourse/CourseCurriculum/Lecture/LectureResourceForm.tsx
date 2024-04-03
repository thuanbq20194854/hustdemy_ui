import { Button, Form, Upload } from 'antd'
import { useForm, useWatch } from 'antd/es/form/Form'
import { MdOutlineClose } from 'react-icons/md'
import { UpdateResource } from '../../../../../models/course'
import { BsUpload } from 'react-icons/bs'
import { useCourseManageContext } from '../../context/CourseMangeContext'

interface IProps {
  sectionId: number
  lectureId: number
  handleBackToNormal: () => void
}

interface IForm {
  resource: IUpload
}

interface IUpload {
  file: File
  fileList: FileList
}

const MAX_FILE_SIZE = 200000000000000

function LectureResourceForm({ sectionId, lectureId, handleBackToNormal }: IProps) {
  const { handleAddLectureResource } = useCourseManageContext()

  const [form] = useForm<IForm>()

  const formWatch = useWatch([], form) ?? {}

  const handleFileUpload = () => {
    return
  }

  const handleSubmit = () => {
    const formData: UpdateResource = {
      lecture_id: lectureId,
      section_id: sectionId,
      resource: form.getFieldValue('resource').fileList
    }

    handleAddLectureResource(formData)
    handleBackToNormal()
  }

  return (
    // <div className={styles.lectureResourceFormWrapper}>
    <div className='lectureResourceFormWrapper'>
      <Form form={form} className='formAntd'>
        <div className='title ud-heading-md'>Upload File</div>

        <Form.Item
          style={{ marginTop: '16px' }}
          name='resource'
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
          help={form.getFieldError('resource').length > 0 ? form.getFieldError('resource') : undefined}
        >
          <Upload className='uploadBtnAntd' maxCount={1} showUploadList={false} customRequest={handleFileUpload}>
            <Button icon={<BsUpload />}>Click to upload file</Button>

            <span style={{ marginLeft: '16px' }}>{formWatch.resource ? formWatch.resource.fileList[0].name : ''}</span>
          </Upload>
        </Form.Item>

        <Button className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm submitBtn' onClick={handleSubmit}>
          Upload Resource
        </Button>
        <div className='tabTitleContainer'>
          <span className='text ud-heading-sm'>Add Resource</span>
          <button className='iconBtn' onClick={handleBackToNormal}>
            <MdOutlineClose />
          </button>
        </div>
      </Form>
    </div>
  )
}

export default LectureResourceForm
