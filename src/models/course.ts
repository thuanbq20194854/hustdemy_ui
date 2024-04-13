export interface Course {
  id?: number
  out_comes?: string[] | null
  intended_for?: string[] | null
  requirements?: string[] | null
  product_id_stripe?: string
  level_id?: number | null
  category_id?: number
  sub_category_id?: number
  title?: string
  review_status?: number
  welcome_message?: string | null
  congratulations_message?: string | null
  subtitle?: string | null
  primarily_teach?: string | null
  description?: string | null
  status?: number
  language_id?: number | null
  price_id?: number | null
  user_id?: number | null
  promotional_video?: string | null
  image?: string | null
  curriculums?: ISection[]
  updated_at?: string
  created_at?: string
}

export interface IntendedLearnForm {
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

export interface ISection {
  id: number
  sectionTitle: string
  sectionOutcome: string
  lectures: ILecture[]
}

export interface ICreateSection {
  sectionTitle: string
  sectionOutcome: string
}
export interface IUpdateSection {
  id: number
  sectionTitle: string
  sectionOutcome: string
}
export interface IDeleteSection {
  id: number
}

export interface ILecture {
  sectionId: number
  id: number
  type: number
  title: string
  desc?: string | null
  questions?: IQuestion[]

  assets?: IAsset[]
}

export interface IAsset {
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

// export interface IAsset {

// }

export interface ICreateQuiz {
  sectionId: number
  type: number
  title: string
  desc?: string | null
}

export interface IUpdateQuiz {
  id: number
  sectionId: number
  type: number
  title: string
  desc?: string | null
}

export interface IDeleteLecture {
  id: number
  sectionId: number
}

export interface IQuestion {
  id: number
  question_text: string
  lectureId: number
  answers: IAnswer[]
}

export interface IAnswer {
  id: number
  answer_text: string
  explain?: string
  is_correct: boolean
  question_id: number
}

export interface CreateQuestionForm {
  sectionID: number
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
  sectionID: number
}
export interface UpdateAnswerForm {
  id: number
  answer_text: string
  is_correct: boolean
  explain?: string
  lectureID: number
  sectionID: number
}

export interface IDeleteQuestion {
  sectionID: number
  lectureID: number
  questionID: number
}

export interface CreateLectureForm {
  // id: number
  sectionId: number
  type: number
  title: string
}
export interface IUpdateLecure {
  id: number
  sectionId: number
  type: number
  title: string
}

export interface IDeleteLecure {
  id: number
  sectionId: number
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
