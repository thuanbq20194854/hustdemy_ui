import { FaBars } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'

import { useBoolean } from '../../../../../hooks/useBoolean'
import { Question } from '../../../../../models/course'
import DeleteQuestionItemModal from './DeleteQuestionItemModal'
import styles from './QuestionItem.module.scss'

interface IProps {
  handleQuestionEdit: () => void

  questionItem: Question
  sectionId: number
  index: number
}

function QuestionItem({ questionItem, index, handleQuestionEdit, sectionId }: IProps) {
  const [isOpen, handleCommandModal] = useBoolean(false)
  return (
    <div className={`${styles.questionItemWrapper} ud-text-sm`}>
      <DeleteQuestionItemModal
        isOpen={isOpen}
        handleCommandModal={handleCommandModal}
        questionItem={questionItem}
        sectionId={sectionId}
      />
      <div className='infoPart'>
        <div className='index ud-text-bold'>{index + '.'}</div>
        <div className='questionName' dangerouslySetInnerHTML={{ __html: questionItem.question_text }} />

        <span>Multiple Choice</span>
      </div>

      <div className='actionPart'>
        <button className='btnContainer editBtn' onClick={handleQuestionEdit}>
          <MdEdit size={16} />
        </button>
        <button className='btnContainer deleteBtn' onClick={() => handleCommandModal(true)}>
          <MdDelete size={16} />
        </button>
        <button className='btnContainer dragBtn'>
          <FaBars size={16} />
        </button>
      </div>
    </div>
  )
}

export default QuestionItem
