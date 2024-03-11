export interface ISection {
  id: string
  sectionTitle: string

  lectures: ILecture[]
}

export interface ILecture {
  id: string
  type: string
  title: string
  desc: string
  questions?: IQuestion[]
  videoURL?: string
}

export interface IQuestion {
  id: string
  desc: string
  title: string
  question_text: string
  answers: IAnswer[]
}

export interface IAnswer {
  id: string
  answer_text: string
  explaination: string
}
