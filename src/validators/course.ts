import * as Yup from 'yup'
import {
  CreateLectureForm,
  CreateQuestionForm,
  CreateQuiz,
  CreateSection,
  IDeleteSection,
  UpdateLecture,
  UpdateSection,
  UpdateCourseLandingPageForm,
  UpdateCoursePrice,
  IntendedLearners
} from '../models/course'

// export const schemeUpdateIntendedLeaner: Yup.ObjectSchema<IntendedLearners> = Yup.object({
//   out_comes: Yup.array()
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
  out_comes: Yup.array()
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

export const schemeCreateSection: Yup.ObjectSchema<CreateSection> = Yup.object({
  title: Yup.string().required('This field may not be blank').max(80, 'Max length of this field is 80'),
  description: Yup.string().required('This field may not be blank').max(200, 'Max length of this field is 200')
})
export const schemeUpdateSection: Yup.ObjectSchema<UpdateSection> = Yup.object({
  id: Yup.number().required('This field may not be blank'),
  title: Yup.string().required('This field may not be blank').max(80, 'Max length of this field is 80'),
  description: Yup.string().required('This field may not be blank').max(200, 'Max length of this field is 200')
})
export const schemeDeleteSection: Yup.ObjectSchema<IDeleteSection> = Yup.object({
  id: Yup.number().required('This field may not be blank')
})

export const schemeCreateQuiz: Yup.ObjectSchema<CreateQuiz> = Yup.object({
  curriculum_id: Yup.number().required('This field may not be blank'),
  type: Yup.number().required('This field may not be blank'),
  title: Yup.string().required('This field may not be blank'),
  desc: Yup.string().nullable()
})
export const schemeUpdateQuiz: Yup.ObjectSchema<UpdateLecture> = Yup.object({
  id: Yup.number().required('This field may not be blank'),
  curriculum_id: Yup.number().required('This field may not be blank'),
  type: Yup.number().required('This field may not be blank'),
  title: Yup.string().required('This field may not be blank'),
  desc: Yup.string().nullable()
})

export const schemeCreateQuestionForm: Yup.ObjectSchema<CreateQuestionForm> = Yup.object({
  curriculumID: Yup.number().required('This field is required'),
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
export const schemeUpdateQuestionForm: Yup.ObjectSchema<CreateQuestionForm> = Yup.object({
  curriculumID: Yup.number().required('This field is required'),
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
export const schemeAddLectureForm: Yup.ObjectSchema<CreateLectureForm> = Yup.object({
  curriculum_id: Yup.number().required('This field is required'),
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
export const schemeUpdateCoursePrice: Yup.ObjectSchema<UpdateCoursePrice> = Yup.object({
  id: Yup.number().required('Id is required'),
  tier: Yup.number().required('Price tier is required')
})
// export const schemeDeleteQuiz: Yup.ObjectSchema<DeleteLecture> = Yup.object({
//   id: Yup.number().required('This field may not be blank'),
//   curriculum_id: Yup.number().required('This field may not be blank')
// })

// export interface CreateQuiz {
//   curriculum_id: number
//   type: string
//   title: string
//   desc: string
// }

// export interface UpdateQuiz {
//   id: number
//   curriculum_id: number
//   type: string
//   title: string
//   desc: string
// }

// export interface IDeleteQuiz {
//   id: number
//   curriculum_id: string
// }
