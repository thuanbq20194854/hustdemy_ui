import * as Yup from 'yup'
import { IAddSection, IntendedLearners } from '../models/course'

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

export const schemaAddSection: Yup.ObjectSchema<IAddSection> = Yup.object({
  sectionTitle: Yup.string().required('This field may not be blank').max(80, 'Max length of this field is 80'),
  sectionOutcome: Yup.string().required('This field may not be blank').max(200, 'Max length of this field is 200')
})
