import CustomModal from '../../../../components/CustomModal/CustomModal'
import { ISection } from '../../../../models/course'
import { useCourseManageContext } from '../context/CourseMangeContext'

interface IProps {
  open: boolean
  handleCommandModal: (cmd: boolean) => void

  section: ISection
}

function DeleteSectionItemModal({ section, open, handleCommandModal }: IProps) {
  const { handleDeleteSection } = useCourseManageContext()

  const handleOkModal = (sectionId: number) => {
    handleDeleteSection(sectionId)
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
