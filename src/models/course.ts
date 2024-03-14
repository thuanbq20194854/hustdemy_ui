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
  desc: string
  title: string
  question_text: string
  lectureId: number
  answers: IAnswer[]
}

export interface IAnswer {
  id: number
  answer_text: string
  explain: string | null
  is_correct: boolean
  question_id: number
  updated_at: string
  created_at: string
}

export interface ICreateQuestion {}

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
