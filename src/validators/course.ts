import * as Yup from 'yup'
import {
  CreateLectureForm,
  CreateQuestionForm,
  ICreateQuiz,
  ICreateSection,
  IDeleteSection,
  IUpdateLecure,
  IUpdateSection,
  UpdateCourseLandingPageForm,
  UpdateCoursePrice
} from '../models/course'

// export const schemeUpdateIntendedLeaner: Yup.ObjectSchema<IntendedLearners> = Yup.object({
//   outcomes: Yup.array()
//     .required()
//     .of(
//       Yup.object().shape({
//         value: Yup.string().required().max(160, 'Kết quả lớn hơn 160 ký tự') // Each 'value' should not be empty
//       })
//     )
//     .min(4, 'Cần có ít nhất 4 kết quả'),
//   requirements: Yup.array().required(),
//   intended_for: Yup.array().required()
// })

export const schemeUdpateIntendedLearner: Yup.ObjectSchema<IntendedLearners> = Yup.object({
  outcomes: Yup.array()
    .required()
    .of(
      Yup.object().shape({
        value: Yup.string().required().max(160, 'String length is more than 160 character')
      })
    )
    .min(4, 'This field should contain at least 4 items'),

  requirements: Yup.array().required(),
  intended_for: Yup.array().required()
})

export const schemaCreateSection: Yup.ObjectSchema<ICreateSection> = Yup.object({
  sectionTitle: Yup.string().required('This field may not be blank').max(80, 'Max length of this field is 80'),
  sectionOutcome: Yup.string().required('This field may not be blank').max(200, 'Max length of this field is 200')
})
export const schemaUpdateSection: Yup.ObjectSchema<IUpdateSection> = Yup.object({
  id: Yup.number().required('This field may not be blank'),
  sectionTitle: Yup.string().required('This field may not be blank').max(80, 'Max length of this field is 80'),
  sectionOutcome: Yup.string().required('This field may not be blank').max(200, 'Max length of this field is 200')
})
export const schemaDeleteSection: Yup.ObjectSchema<IDeleteSection> = Yup.object({
  id: Yup.number().required('This field may not be blank')
})

export const schemaCreateQuiz: Yup.ObjectSchema<ICreateQuiz> = Yup.object({
  sectionId: Yup.number().required('This field may not be blank'),
  type: Yup.string().required('This field may not be blank'),
  title: Yup.string().required('This field may not be blank'),
  desc: Yup.string().nullable()
})
export const schemaUpdateQuiz: Yup.ObjectSchema<IUpdateLecure> = Yup.object({
  id: Yup.number().required('This field may not be blank'),
  sectionId: Yup.number().required('This field may not be blank'),
  type: Yup.string().required('This field may not be blank'),
  title: Yup.string().required('This field may not be blank'),
  desc: Yup.string().nullable()
})

export const schemaCreateQuestionForm: Yup.ObjectSchema<CreateQuestionForm> = Yup.object({
  sectionID: Yup.number().required('This field is required'),
  lectureID: Yup.number().required('This field is required'),
  question_text: Yup.string().required('Please write a question and not a blank '),
  indexOfCorrectAnswer: Yup.string().required('Please choose the best answer !'),
  answers: Yup.array()
    .required()
    .of(
      Yup.object().shape({
        id: Yup.number().required('This field is required'),
        answer_text: Yup.string().required('This field is required'),
        explain: Yup.string()
      })
    )
})
export const schemaUpdateQuestionForm: Yup.ObjectSchema<CreateQuestionForm> = Yup.object({
  sectionID: Yup.number().required('This field is required'),
  lectureID: Yup.number().required('This field is required'),
  question_text: Yup.string().required('This field is required'),
  indexOfCorrectAnswer: Yup.string().required('This field is required'),
  answers: Yup.array()
    .required()
    .of(
      Yup.object().shape({
        id: Yup.number().required('This field is required'),
        answer_text: Yup.string().required('This field is required'),
        explain: Yup.string().required('This field is required')
      })
    )
})
export const schemaAddLectureForm: Yup.ObjectSchema<CreateLectureForm> = Yup.object({
  sectionId: Yup.number().required('This field is required'),
  title: Yup.string().required('This field is required'),
  type: Yup.number().required('This field is required')
})
export const schemeUpdateCourseLanding: Yup.ObjectSchema<UpdateCourseLandingPageForm> = Yup.object({
  title: Yup.string().required('Title is required').max(60, 'Title is longer than 60 character'),
  subtitle: Yup.string().max(120, 'Subtitle is longer than 120 character'),
  description: Yup.string(),
  primarily_teach: Yup.string(),
  category_id: Yup.number()
    .required('Category is required')
    .test('require', 'Category is required', (data) => data != -1),
  sub_category_id: Yup.number()
    .required('Subcategory is required')
    .test('require', 'Subcategory is required', (data) => data != -1),

  level_id: Yup.number(),
  language_id: Yup.number()
})
export const schemaUpdateCoursePrice: Yup.ObjectSchema<UpdateCoursePrice> = Yup.object({
  id: Yup.number().required('Id is required'),
  tier: Yup.number().required('Price tier is required')
})
// export const schemaDeleteQuiz: Yup.ObjectSchema<IDeleteLecure> = Yup.object({
//   id: Yup.number().required('This field may not be blank'),
//   sectionId: Yup.number().required('This field may not be blank')
// })

// export interface ICreateQuiz {
//   sectionId: number
//   type: string
//   title: string
//   desc: string
// }

// export interface IUpdateQuiz {
//   id: number
//   sectionId: number
//   type: string
//   title: string
//   desc: string
// }

// export interface IDeleteQuiz {
//   id: number
//   sectionId: string
// }
