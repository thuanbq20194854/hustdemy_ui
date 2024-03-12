import React from 'react'
import CustomInput from '../../components/CustomInput'
import TextEditor from '../../../../components/TextEditor/TextEditor'
import { ADD_CURRICULUM_ITEM_MODE } from './AddNewCurriculumItem'
import { ICreateQuiz } from '../../../../models/course'

import styles from './AddQuizForm.module.scss'
import { useForm } from 'react-hook-form'

interface IProps {
  setAddCurriculumMode: React.Dispatch<React.SetStateAction<number>>
  handleAddQuiz: (quizData: ICreateQuiz) => void
}

function AddQuizForm({ setAddCurriculumMode }: IProps) {
  const customToolBar = [['bold', 'italic']]

  const {} = useForm<ICreateQuiz>({
    defaultValues: {
        desc: "",
        id : 
    }
  })

  return (
    <div className={styles.addLectureWrapper}>
      <div className='labelWrapper'>
        <span>New Quiz:</span>
      </div>

      <form className='formEdit'>
        <CustomInput placeholder='Enter a title' maxLength={80} />

        <TextEditor className='textEditor' customToolBar={customToolBar} />

        <div className='btnsContainer'>
          <button
            className='ud-btn ud-btn-small ud-btn-ghost ud-heading-sm ud-link-neutral'
            onClick={() => setAddCurriculumMode(ADD_CURRICULUM_ITEM_MODE.NORMAL)}
          >
            <span>Cancle</span>
          </button>

          <div className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
            <span>Add Lecture</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddQuizForm
