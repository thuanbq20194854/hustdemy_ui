// import { Input, Form } from 'antd'
// import styles from './CourseBasics.module.scss'
// import CustomInput from '../../components/CustomInput'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { UpdateCourseLandingPageForm } from '../../../../models/course'

// function CourseBasics() {
//   const { handleSubmit } = useForm<UpdateCourseLandingPageForm>({
//     defaultValues: {
//       category_id: ''
//     }

//     // resolver: yupResolver()
//   })

//   const handleSubmitForm = (formData: UpdateCourseLandingPageForm) => {}
//   return (
//     <div className={styles.courseBasicPage}>
//       <div className='subHeaderWrapper'>
//         <div className='subHeaderContent ud-heading-serif-xl'>Curriculum</div>
//       </div>

//       <div className='mainContent'>
//         {/* <div className='alertContainer'>
//           <p>
//             Your course landing page is crucial to your success on Udemy. If it’s done right, it can also help you gain
//             visibility in search engines like Google. As you complete this section, think about creating a compelling
//             Course Landing Page that demonstrates why someone would want to enroll in your course. Learn more about
//             <span className='ud-link-underline' style={{ color: '#5624d0', marginLeft: '6px', marginRight: '6px' }}>
//               creating your course landing page
//             </span>
//             and
//             <span className='ud-link-underline' style={{ color: '#5624d0', marginLeft: '6px', marginRight: '6px' }}>
//               course title standards.
//             </span>
//           </p>
//         </div> */}

//         <form onSubmit={handleSubmit(handleSubmitForm)}>
//           <button className='saveBtn ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
//             <span>Save</span>
//           </button>
//           <label htmlFor='courseTitle' className='ud-form-label ud-heading-md'>
//             Course title
//           </label>
//           <CustomInput
//             name='courseTitle'
//             id='courseTitle'
//             placeholder='Insert your course title'
//             // {...register('123')}
//           />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CourseBasics
