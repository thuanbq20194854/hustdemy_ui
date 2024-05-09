//Course Management
export interface Course {
  id: number
  out_comes: string[] | null
  intended_for: string[] | null
  requirements: string[] | null
  product_id_stripe: string
  level_id: number | null
  category_id: number
  sub_category_id: number
  title: string
  review_status: number
  welcome_message: string | null
  congratulations_message: string | null
  subtitle: string | null
  primarily_teach: string | null
  description: string | null
  status: number
  language_id: number | null
  price_id: number | null
  user_id: number | null
  promotional_video: string | null
  image: string | null
  curriculums: Curriculum[]
  updated_at: string
  created_at: string
}

export interface IntendedLearners {
  out_comes: {
    value: string
  }[]
  requirements?: {
    value: string
  }[]
  intended_for?: {
    value: string
  }[]
}

export interface Curriculum {
  id: number
  title: string
  description: string | null
  course_id: number
  lectures: Lecture[]
  updated_at: string
  created_at: string
}

export interface CreateSection {
  title: string
  description: string
}
export interface UpdateSection {
  id: number
  title: string
  description: string
}
export interface IDeleteSection {
  id: number
}

export interface Lecture {
  id: number
  title: string
  type: number
  article: string | null
  curriculum_id: number
  description: string | null
  is_promotional: boolean
  is_done: boolean
  assets: Asset[]
  questions: Question[]
  order: number
  updated_at: string
  created_at: string
}

export interface Asset {
  id: number
  bunnyID: string
  url: string
  type: number
  duration: number
  name?: string
  size: number
  lecture_id: number
  updated_at: string
  created_at: string
}

// export interface Asset {

// }

export interface CreateQuiz {
  curriculum_id: number
  type: number
  title: string
  desc?: string | null
}

export interface UpdateQuiz {
  id: number
  curriculum_id: number
  type: number
  title: string
  desc?: string | null
}

export interface DeleteLecture {
  id: number
  curriculum_id: number
}

export interface Question {
  id: number
  question_text: string
  lectureId: number
  answers: Answer[]
}

export interface Answer {
  id: number
  answer_text: string
  explain?: string
  is_correct: boolean
  question_id: number
  updated_at: string
  created_at: string
}

export interface CreateQuestionForm {
  curriculumID: number
  lectureID: number
  question_text: string
  indexOfCorrectAnswer?: string
  answers: CreateAnswerForm[]
}

export interface CreateAnswerForm {
  id: number
  answer_text: string
  explain?: string
}

export interface UpdateQuestionForm {
  id: number
  question_text: string
  lectureID: number
  curriculumID: number
}
export interface UpdateAnswerForm {
  id: number
  answer_text: string
  is_correct: boolean
  explain?: string
  lectureID: number
  curriculumID: number
}

export interface IDeleteQuestion {
  curriculumID: number
  lectureID: number
  questionID: number
}

export interface CreateLectureForm {
  // id: number
  curriculum_id: number
  type: number
  title: string
}
export interface UpdateLecture {
  id: number
  curriculum_id: number
  type: number
  title: string
}

export interface DeleteLecture {
  id: number
  curriculum_id: number
}

export interface UpdateVideoForm {
  section_id: number
  lecture_id: number
  video: FileList
}

export interface UpdateResource {
  section_id: number
  lecture_id: number
  resource: FileList
}

export enum ELectureType {
  Quiz = 1,
  Lecture = 2
}

export enum EAssetType {
  VideoWatch = 1,
  Resource = 2
}

export interface UpdateLectureDesc {
  section_id: number
  lecture_id: number
  description?: string
}

export interface IDeleteResource {
  section_id: number
  lecture_id: number
  resource_id: number
}

export interface UpdateCourseLandingPageForm {
  title: string
  subtitle?: string
  description?: string
  primarily_teach?: string
  category_id: number
  sub_category_id: number
  level_id?: number
  language_id?: number
}

export interface UpdateCourseImage {
  image?: File
}

export interface PriceLearning {
  id: number
  tier: number
  value: number
}

export interface UpdateCoursePrice {
  id: number
  tier: number
}

// Course Search
export interface CategoryCourse {
  id: number
  level: LevelLearning
  category_id: number
  sub_category_id: number
  title: string
  out_comes: string[] | null
  subtitle: string | null
  price: PriceLearning
  review_status: number
  is_purchased: boolean
  user: UserShow
  image: string | null
  average_rating: number
  total_review: number
  duration: number
  total_lecture: number
  updated_at: string
  created_at: string
}

interface LevelLearning {
  id: number
  name: string
}

interface UserShow {
  id: number
  name: string
}

export interface FilterCoursesCategory {
  rating: string | null
  sort: string | null
  duration: string[] | boolean
  level: string[] | boolean
}

export interface LearningReview {
  id: number
  type: number
  star_count: number | null
  comment: string | null
  user: UserReview
  updated_at: string
  created_at: string
}

interface UserReview {
  id: number
  name: string
  avatar?: string
}

export interface QuestionLecture {
  id: number
  course_id: number
  lecture_id: number
  user: UserQuestionLecture
  title: string
  description: string | null
  total_answer: number
  updated_at: string
  created_at: string
}

export interface AnswerLecture {
  id: number
  question_lecture_id: number
  user: UserQuestionLecture
  answer: string
  updated_at: string
  created_at: string
}

interface UserQuestionLecture {
  id: number
  avatar: string | null
  name: string
}

export interface CreateAnswerLecture {
  answer: string
}

export interface CourseShow {
  id: number
  out_comes: string[] | null
  intended_for: string[] | null
  requirements: string[] | null
  product_id_stripe: string
  level: Level | null
  category: Category | null
  sub_category: Category | null
  title: string
  review_status: number
  welcome_message: string | null
  congratulations_message: string | null
  subtitle: string | null
  primarily_teach: string | null
  description: string | null
  status: number
  language: Language | null
  price: Price | null
  user: UserShow
  promotional_video: string | null
  image: string | null
  curriculums: Curriculum[]
  average_review: number
  count_review: number
  count_student: number
  updated_at: string
  created_at: string
}

export interface Level {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  parent_id: number | null
  children: Category[] | null
  created_at: string
  updated_at: string
}

export interface Language {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface Price {
  id: number
  tier: string
  value: number
  created_at: string
  updated_at: string
}

export interface ContentCourse {
  type: string
  id: number
  curriculumID: number
  index: number
  content: ContentQuiz | ContentVideo | ContentArticle | null
}

export interface ContentQuiz {
  questions: Question[]
  title: string
  indexNumber: string
}

export interface ContentVideo {
  url: string
}

export interface ContentArticle {
  article: string
  title: string
}
