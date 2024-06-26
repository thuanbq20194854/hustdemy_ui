import CustomModal from '../../../../components/CustomModal/CustomModal'
import { Curriculum } from '../../../../models/course'
import { useCourseManageContext } from '../context/CourseMangeContext'

interface IProps {
  open: boolean
  handleCommandModal: (cmd: boolean) => void

  section: Curriculum
}

function DeleteSectionItemModal({ section, open, handleCommandModal }: IProps) {
  const { handleDeleteSection } = useCourseManageContext()

  const handleOkModal = (curriculumId: number) => {
    handleDeleteSection(curriculumId)
    handleCommandModal(false)
  }

  return (
    <CustomModal
      onCancleModal={() => handleCommandModal(false)}
      modalTitle='Please confirm'
      modalMessage='You are about to remove a curriculum item. Are you sure you want to continue?'
      open={open}
      onOkModal={() => handleOkModal(section.id)}
    />
  )
}

export default DeleteSectionItemModal
