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
  desc: string
  questions?: IQuestion[]
  // asset?: IAsset
}

// export interface IAsset {

// }

export interface ICreateQuiz {
  id: number
  sectionId: number
  type: string
  title: string
  desc: string
}

export interface IUpdateQuiz {
  id: number
  sectionId: number
  type: string
  title: string
  desc: string
}

export interface IDeleteQuiz {
  id: number
  sectionId: string
}

export interface IQuestion {
  id: number
  desc: string
  title: string
  question_text: string

  lectureId: string
  answers: IAnswer[]
}

export interface IAnswer {
  questionId: string
  id: number
  answer_text: string
  explaination: string
}

export interface ICreateLecure {
  id: number
  sectionId: string
  type: string
  title: string
}
export interface IUpdateLecure {
  id: number
  sectionId: string
  type: string
  title: string
}

export interface IDeleteLecure {
  id: number
  sectionId: string
}
