import React from 'react'
import CustomModal from '../../../../components/CustomModal/CustomModal'

interface IProps {
  curriculumItemId: string
  open: boolean
  handleCloseModal: () => void
}

function DeleteCurriculumItemModal(props: IProps) {
  const handleOkModal = (curriculumItemId: string) => {
    console.log(curriculumItemId)

    props.handleCloseModal()
  }

  return (
    <CustomModal
      onCancleModal={props.handleCloseModal}
      modalTitle='Please confirm'
      modalMessage='You are about to remove a curriculum item. Are you sure you want to continue?'
      open={props.open}
      onOkModal={() => handleOkModal(props.curriculumItemId)}
    />
  )
}

export default DeleteCurriculumItemModal
