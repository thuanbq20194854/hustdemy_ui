import CustomModal from '../../../../components/CustomModal/CustomModal'
import { ISection } from '../../../../models/course'

interface IProps {
  open: boolean
  handleCommandModal: (cmd: boolean) => void
  handleDeleteSection: (deletedId: number) => void

  section: ISection
}

function DeleteSectionItemModal({ section, open, handleCommandModal, handleDeleteSection }: IProps) {
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
