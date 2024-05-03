import { useForm } from 'react-hook-form'
import { MdOutlineClose } from 'react-icons/md'
import TextEditor from '../../../../../components/TextEditor/TextEditor'
import { Lecture, UpdateLectureDesc } from '../../../../../models/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'

interface IProps {
  lectureItem: Lecture
  sectionId: number
  handleBackToNormal: () => void
}

const customToolbar = [
  //   [{ header: [1, 2, 3, 4, false] }],
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }]
]

const LectureDescriptionForm = ({ lectureItem, sectionId, handleBackToNormal }: IProps) => {
  const { handleUpdateLectureDesc } = useCourseManageContext()

  const {
    setValue,
    handleSubmit,
    // formState: { errors },
    watch
  } = useForm<UpdateLectureDesc>({
    defaultValues: {
      lecture_id: lectureItem.id,
      section_id: sectionId,
      description: lectureItem.desc ?? ''
    }
  })

  const handleSaveDescription = (formData: UpdateLectureDesc) => {
    console.log('formData :', formData)
    handleUpdateLectureDesc(formData)
    handleBackToNormal()
  }

  const handleOnChangeDescription = (htmlString: string, text: string | undefined) => {
    if (text && text.trim().length === 0) {
      setValue('description', undefined)
    } else {
      setValue('description', htmlString)
    }
  }

  return (
    <div className='lectureDescFormWrapper'>
      <form onSubmit={handleSubmit(handleSaveDescription)}>
        <div className='descContainer'>
          <TextEditor
            customToolBar={customToolbar}
            defaultValue={watch('description') ?? ''}
            handleHTMLChange={handleOnChangeDescription}
          />
          <div className='buttonContainer' style={{ marginTop: '16px' }}>
            <button
              className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
              onClick={handleBackToNormal}
            >
              Cancle
            </button>
            <button type='submit' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
              Save
            </button>
          </div>
        </div>
      </form>

      <div className='tabTitleContainer'>
        <span className='text ud-heading-sm'>Add Lecture Description</span>
        <button className='iconBtn' onClick={handleBackToNormal}>
          <MdOutlineClose />
        </button>
      </div>
    </div>
  )
}

export default LectureDescriptionForm
