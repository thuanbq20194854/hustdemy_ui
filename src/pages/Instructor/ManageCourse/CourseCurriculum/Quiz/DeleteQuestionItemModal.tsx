import CustomModal from '../../../../../components/CustomModal/CustomModal'
import { IDeleteQuestion, Question } from '../../../../../models/course'
import { useCourseManageContext } from '../../context/CourseMangeContext'

interface IProps {
  questionItem: Question
  sectionId: number

  handleCommandModal: (cmd: boolean) => void
  isOpen: boolean
}

function DeleteQuestionItemModal({ questionItem, sectionId, isOpen, handleCommandModal }: IProps) {
  const { handleDeleteQuestion } = useCourseManageContext()

  const handleSubmitForm = () => {
    const deleteQuestionFormData: IDeleteQuestion = {
      sectionID: sectionId,
      lectureID: questionItem.lectureId,
      questionID: questionItem.id
    }
    handleDeleteQuestion(deleteQuestionFormData)
  }
  return (
    <CustomModal
      modalMessage='You are about to remove a question. Are you sure you want to continue?'
      modalTitle='Please confirm'
      open={isOpen}
      onCancleModal={() => handleCommandModal(false)}
      onOkModal={handleSubmitForm}
    />
  )
}

export default DeleteQuestionItemModal
