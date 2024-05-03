import { ReactNode, createContext, useContext } from 'react'
import {
  Course,
  CreateLectureForm,
  CreateQuestionForm,
  CreateQuiz,
  CreateSection,
  DeleteLecture,
  IDeleteQuestion,
  IDeleteResource,
  UpdateQuiz,
  UpdateSection,
  IntendedLearners,
  UpdateAnswerForm,
  UpdateCourseLandingPageForm,
  UpdateCoursePrice,
  UpdateLectureDesc,
  UpdateQuestionForm,
  UpdateResource,
  UpdateVideoForm
} from '../../../../models/course'

interface CourseManageContextProps {
  handleAddSection: (data: CreateSection) => void
  handleEditSection: (formData: UpdateSection) => void

  handleDeleteSection: (deletedId: number) => void
  handleAddQuiz: (quizData: CreateQuiz) => void
  handleUpdateQuiz: (quizData: UpdateQuiz) => void
  handleDeleteLecture: (lectureData: DeleteLecture) => void
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
  handleUpdateIntendedLearner: (formData: IntendedLearners, courseId: number) => void
  course: Course | null
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
  handleUpdateIntendedLearner: () => {},
  course: null
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
