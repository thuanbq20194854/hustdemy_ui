import { ReactNode, createContext, useContext } from 'react'
import {
  CreateQuestionForm,
  ICreateQuiz,
  ICreateSection,
  IDeleteLecture,
  ISection,
  IUpdateQuiz,
  IUpdateSection,
  UpdateAnswerForm,
  UpdateQuestionForm
} from '../../../../models/course'

interface CourseManageContextProps {
  handleAddSection: (data: ICreateSection) => void
  handleEditSection: (formData: IUpdateSection) => void

  handleDeleteSection: (deletedId: number) => void
  handleAddQuiz: (quizData: ICreateQuiz) => void
  handleUpdateQuiz: (quizData: IUpdateQuiz) => void
  handleDeleteLecture: (lectureData: IDeleteLecture) => void
  handleAddQuestion: (data: CreateQuestionForm) => void
  handleUpdateQuestion: (updateQuestionFormData: UpdateQuestionForm, updateAnswerArrayForm: UpdateAnswerForm[]) => void
  sections: ISection[]
}

const CourseManageContext = createContext<CourseManageContextProps>(undefined)

interface CourseMangeProviderProps {
  children: ReactNode
  value: CourseManageContextProps
}

const CourseManageProvider: React.FC<CourseMangeProviderProps> = ({ children, value }: CourseMangeProviderProps) => {
  return <CourseManageContext.Provider value={value}>{children}</CourseManageContext.Provider>
}

const useCourseManageContext = () => useContext(CourseManageContext)

export { CourseManageContext, CourseManageProvider, useCourseManageContext }
