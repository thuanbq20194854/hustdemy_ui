import { ContentCourse, CourseShow } from '@/models/course'
import { ReactNode, createContext, useContext } from 'react'
import { MarkLecture } from '../LectureLearning'

interface IContext {
  course: CourseShow | null
  currentLecture: ContentCourse | null
  handleUpdateCompleteLecure: (formData: MarkLecture) => void
}

const LectureLearningContext = createContext<IContext>({
  course: null,
  currentLecture: null,
  handleUpdateCompleteLecure: () => {}
})

interface LectureLearningContextProps {
  children: ReactNode
  value: IContext
}

const LectureLearningContextProvider: React.FC<LectureLearningContextProps> = ({
  value,
  children
}: LectureLearningContextProps) => {
  return <LectureLearningContext.Provider value={value}>{children}</LectureLearningContext.Provider>
}

const useLectureLearningContext = () => useContext(LectureLearningContext)

export { useLectureLearningContext, LectureLearningContextProvider }
