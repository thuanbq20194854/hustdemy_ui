import { forwardRef, useImperativeHandle, useState } from 'react'
import TextEditor from '../../../../components/TextEditor/TextEditor'
import { ILecture, UpdateLectureDesc } from '../../../../models/course'
import { UseFormWatch, useForm } from 'react-hook-form'
import { useCourseManageContext } from '../context/CourseMangeContext'

interface IProps {
  lectureItem: ILecture
  sectionId: number
}

const customToolbar = [
  //   [{ header: [1, 2, 3, 4, false] }],
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }]
]

interface ILectureDescriptionFormRef {
  watch: UseFormWatch<UpdateLectureDesc>
}

const LectureDescriptionForm = ({ lectureItem, sectionId }: IProps, ref: React.Ref<ILectureDescriptionFormRef>) => {
  const [editingDesc, setEditingDesc] = useState<boolean>(false)

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
  }

  const handleOnChangeDescription = (htmlString: string) => {
    console.log('11' + htmlString + '11')
    if (htmlString === '<p><br></p>') {
      console.log('hehe')
      setValue('description', undefined)
      return
    }
    setValue('description', htmlString)
  }

  useImperativeHandle(ref, () => {
    return {
      watch: watch
    }
  })

  return (
    <form onSubmit={handleSubmit(handleSaveDescription)}>
      <div className='descContainer'>
        {lectureItem.desc && (
          <div className='ud-heading-sm' style={{ paddingBottom: '8px' }}>
            Lecture Description
          </div>
        )}
        {!editingDesc && (
          <div
            aria-hidden='true'
            onClick={() => setEditingDesc(true)}
            className='desc-text'
            dangerouslySetInnerHTML={{ __html: watch('description') ?? '' }}
          />
        )}

        <div className='textEdtiorContainer ' style={{ display: editingDesc ? '' : 'none' }}>
          <TextEditor
            customToolBar={customToolbar}
            defaultValue={watch('description') ?? ''}
            handleHTMLChange={handleOnChangeDescription}
          />
          <div className='buttonContainer' style={{ marginTop: '16px' }}>
            <button
              className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
              onClick={() => setEditingDesc(false)}
            >
              Cancle
            </button>
            <button type='submit' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default forwardRef(LectureDescriptionForm)
