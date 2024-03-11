import CustomModal from '../../../../components/CustomModal/CustomModal'

interface IProps {
  curriculumItemId: string
  open: boolean
  handleCommandModal: (cmd: boolean) => void
}

function DeleteSectionItemModal({ curriculumItemId, open, handleCommandModal }: IProps) {
  const handleOkModal = (curriculumItemId: string) => {
    console.log(curriculumItemId)

    handleCommandModal(false)
  }

  return (
    <CustomModal
      onCancleModal={() => handleCommandModal(false)}
      modalTitle='Please confirm'
      modalMessage='You are about to remove a curriculum item. Are you sure you want to continue?'
      open={open}
      onOkModal={() => handleOkModal(curriculumItemId)}
    />
  )
}

export default DeleteSectionItemModal
