import CustomModal from '../../../../components/CustomModal/CustomModal'
import { ILecture } from '../../../../models/course'
import { useCourseManageContext } from '../context/CourseMangeContext'

interface IProps {
  isOpen: boolean
  setCommandModal: (cmd: boolean) => void
  sectionId: number
  lectureItem: ILecture
}

function DeleteLectureItemModal({ isOpen, setCommandModal, lectureItem }: IProps) {
  const { handleDeleteLecture } = useCourseManageContext()

  const handleSubmitForm = () => {
    handleDeleteLecture(lectureItem)
    console.log('ssubmit')
  }
  return (
    <CustomModal
      modalMessage='You are about to remove a question. Are you sure you want to continue?'
      modalTitle='Please confirm'
      open={isOpen}
      onCancleModal={() => setCommandModal(false)}
      onOkModal={handleSubmitForm}
    />
  )
}

export default DeleteLectureItemModal
