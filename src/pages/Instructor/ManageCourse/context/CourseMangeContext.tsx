import { ReactNode, createContext, useContext } from 'react'
import {
  Course,
  CreateLectureForm,
  CreateQuestionForm,
  ICreateQuiz,
  ICreateSection,
  IDeleteLecture,
  IDeleteQuestion,
  IDeleteResource,
  IUpdateQuiz,
  IUpdateSection,
  UpdateAnswerForm,
  UpdateCourseLandingPageForm,
  UpdateCoursePrice,
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
  handleUpdateCourseLandingPage: (updateCourseLandingPage: UpdateCourseLandingPageForm, courseImage?: File) => void
  handleUpdateCoursePrice: (formData: UpdateCoursePrice, courseId: number) => void
  course: Course
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
  handleUpdateCourseLandingPage: () => {},
  handleUpdateCoursePrice: () => {},
  course: {}
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
