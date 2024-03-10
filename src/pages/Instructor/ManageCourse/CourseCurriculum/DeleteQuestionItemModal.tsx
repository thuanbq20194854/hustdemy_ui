import React from 'react'
import CustomModal from '../../../../components/CustomModal/CustomModal'

interface IProps {
  isOpen: boolean
  setCommandModal: (cmd: boolean) => void
}

function DeleteQuestionItemModal({ isOpen, setCommandModal }: IProps) {
  const handleSubmitForm = () => {
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

export default DeleteQuestionItemModal
