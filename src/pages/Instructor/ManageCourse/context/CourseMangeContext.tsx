import { ReactNode, createContext, useContext } from 'react'
import {
  CreateLectureForm,
  CreateQuestionForm,
  ICreateQuiz,
  ICreateSection,
  IDeleteLecture,
  IDeleteQuestion,
  IDeleteResource,
  ISection,
  IUpdateQuiz,
  IUpdateSection,
  UpdateAnswerForm,
  UpdateLectureDesc,
  UpdateQuestionForm,
  UpdateResource,
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
  handleAddLectureResource: (updateResourceFormData: UpdateResource) => void
  handleDeleteResource: (deleteResourceFormData: IDeleteResource) => void
  handleAddLecture: (addLectureForm: CreateLectureForm) => void

  sections: ISection[]
}
const CourseManageContext = createContext<CourseManageContextProps>({
  handleAddSection: () => {},
  handleEditSection: () => {},
  handleDeleteSection: () => {},
  handleAddQuiz: () => {},
  handleUpdateQuiz: () => {},
  handleDeleteLecture: () => {},
  handleAddQuestion: () => {},
  handleUpdateQuestion: () => {},
  handleDeleteQuestion: () => {},
  handleUploadLectureVideo: () => {},
  handleReplaceLectureVideo: () => {},
  handleUpdateLectureDesc: () => {},
  handleAddLectureResource: () => {},
  handleDeleteResource: () => {},
  handleAddLecture: () => {},
  sections: []
})

interface CourseMangeProviderProps {
  children: ReactNode
  value: CourseManageContextProps
}

const CourseManageProvider: React.FC<CourseMangeProviderProps> = ({ children, value }: CourseMangeProviderProps) => {
  return <CourseManageContext.Provider value={value}>{children}</CourseManageContext.Provider>
}

const useCourseManageContext = () => useContext(CourseManageContext)

export { CourseManageContext, CourseManageProvider, useCourseManageContext }
