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
  type: string
  title: string
  desc?: string | null
  questions?: IQuestion[]

  // assets?: IAssets
}

// export interface IAsset {

// }

export interface ICreateQuiz {
  sectionId: number
  type: string
  title: string
  desc?: string | null
}

export interface IUpdateQuiz {
  id: number
  sectionId: number
  type: string
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

export interface ICreateLecure {
  id: number
  sectionId: string
  type: string
  title: string
}
export interface IUpdateLecure {
  id: number
  sectionId: number
  type: string
  title: string
}

export interface IDeleteLecure {
  id: number
  sectionId: number
}
