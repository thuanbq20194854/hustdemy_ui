import { Button, Form, Upload } from 'antd'
import { useForm, useWatch } from 'antd/es/form/Form'
import { RcFile } from 'antd/es/upload'
import { BsUpload } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'
import { UpdateResource } from '../../../../../models/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'

interface IProps {
  curriculumId: number
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

function LectureResourceForm({ curriculumId, lectureId, handleBackToNormal }: IProps) {
  const { handleAddLectureResource } = useCourseManageContext()

  const [form] = useForm<IForm>()

  const formWatch = useWatch([], form) ?? {}

  const handleFileUpload = () => {
    return
  }

  const handleSubmitForm = () => {
    const formData: UpdateResource = {
      lecture_id: lectureId,
      section_id: curriculumId,
      resource: form.getFieldValue('resource').fileList
    }

    handleAddLectureResource(formData)
    handleBackToNormal()
  }

  const beforeUpload = (file: RcFile) => {
    const isZip = file.type === 'application/zip'

    // if (!isZip) {
    //   // message.error('ZIPPPPPPPPPPPP')
    //   return
    // }
    return isZip
  }

  return (
    // <div className={styles.lectureResourceFormWrapper}>
    <div className='lectureResourceFormWrapper'>
      <Form form={form} className='formAntd' onFinish={handleSubmitForm}>
        <div className='title ud-heading-md'>Upload Resource</div>

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
                  const isZip = value.file.type === 'application/zip'

                  if (!isZip) {
                    reject(`You can only upload ZIP file!`)
                  } else {
                    resolve('')
                  }
                })
              }
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
          <Upload
            className='uploadBtnAntd'
            maxCount={1}
            multiple={false}
            showUploadList={false}
            customRequest={handleFileUpload}
            beforeUpload={beforeUpload}
          >
            <Button icon={<BsUpload />}>Click to upload file</Button>

            <span style={{ marginLeft: '16px' }}>{formWatch.resource ? formWatch.resource.fileList[0].name : ''}</span>
          </Upload>
        </Form.Item>

        <Button
          className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm submitBtn'
          onClick={() => {
            form.submit()
          }}
        >
          Upload
        </Button>
        <div className='tabTitleContainer'>
          <span className='text ud-heading-sm'>Add Resource</span>
          <button
            className='iconBtn'
            onClick={() => {
              handleBackToNormal()
            }}
          >
            <MdOutlineClose />
          </button>
        </div>
      </Form>
    </div>
  )
}

export default LectureResourceForm
