import CustomModal from '../../../../../components/CustomModal/CustomModal'
import { IDeleteResource } from '../../../../../models/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'

interface IProps {
  curriculumId: number
  handleCommandModal: (cmd: boolean) => void
  isOpen: boolean

  lectureId: number

  resourceId: number
}

function DeleteResourceItemModal({ curriculumId, isOpen, handleCommandModal, resourceId, lectureId }: IProps) {
  const { handleDeleteResource } = useCourseManageContext()

  const handleSubmitForm = () => {
    const deleteQuestionFormData: IDeleteResource = {
      section_id: curriculumId,
      lecture_id: lectureId,
      resource_id: resourceId
    }
    handleDeleteResource(deleteQuestionFormData)
  }
  return (
    <CustomModal
      modalMessage='You are about to remove a resource file. Are you sure you want to continue?'
      modalTitle='Please confirm'
      open={isOpen}
      onCancleModal={() => handleCommandModal(false)}
      onOkModal={handleSubmitForm}
    />
  )
}

export default DeleteResourceItemModal
