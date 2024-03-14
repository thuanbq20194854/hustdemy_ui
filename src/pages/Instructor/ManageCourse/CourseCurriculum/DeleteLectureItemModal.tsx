import CustomModal from '../../../../components/CustomModal/CustomModal'
import { IDeleteLecture, ILecture } from '../../../../models/course'
import { useForm } from 'react-hook-form'

interface IProps {
  isOpen: boolean
  setCommandModal: (cmd: boolean) => void
  sectionId: number
  lectureItem: ILecture
}

function DeleteQuestionItemModal({ isOpen, setCommandModal, sectionId, lectureItem }: IProps) {
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
