import { ReactNode, createContext, useContext } from 'react'
import {
  CreateQuestionForm,
  ICreateQuiz,
  ICreateSection,
  IDeleteLecture,
  IDeleteQuestion,
  ISection,
  IUpdateQuiz,
  IUpdateSection,
  UpdateAnswerForm,
  UpdateLectureDesc,
  UpdateQuestionForm,
  UpdateVideoForm
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
  handleDeleteQuestion: (questionItem: IDeleteQuestion) => void
  handleUploadLectureVideo: (data: UpdateVideoForm) => void
  handleReplaceLectureVideo: (data: UpdateVideoForm) => void
  handleUpdateLectureDesc: (formData: UpdateLectureDesc) => void
  sections: ISection[]
}
2
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
