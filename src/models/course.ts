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

export interface ICreateLecure {
  id: number
  sectionId: string
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
  curriculum_id: number
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
