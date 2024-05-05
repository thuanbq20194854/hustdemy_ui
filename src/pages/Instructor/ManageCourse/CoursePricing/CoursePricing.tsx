import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IoIosArrowDown } from 'react-icons/io'
import { Course, UpdateCoursePrice } from '../../../../models/course'
import { schemeUpdateCoursePrice } from '../../../../validators/course'
import { useCourseManageContext } from '../context/CourseMangeContext'
import styles from './CoursePricing.module.scss'

const fakeOptions = [
  {
    label: 'Option test 1',
    value: '1'
  },
  {
    label: 'Option test 2',
    value: '2'
  },
  {
    label: 'Option test 3',
    value: '3'
  },
  {
    label: 'Option test 4',
    value: '4'
  }
]

function CoursePricing() {
  const { course, handleUpdateCoursePrice } = useCourseManageContext()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<UpdateCoursePrice>({
    defaultValues: {
      id: course?.price_id ?? undefined,
      tier: course?.price_id ? course.price_id : -1
    },

    resolver: yupResolver(schemeUpdateCoursePrice)
  })

  const handleSubmitForm = (formData: UpdateCoursePrice) => {
    handleUpdateCoursePrice(formData, (course as Course).id)
  }
  return (
    <div className={styles.coursePricing}>
      <div className='subHeaderWrapper'>
        <div className='subHeaderContent ud-heading-serif-xl'>Pricing</div>
      </div>

      <div className='mainContent' style={{ maxWidth: '800px' }}>
        <p className='ud-heading-md'> Set a price for your course</p>
        <p className='ud-text-md' style={{ marginTop: '4px' }}>
          Please select the currency and the price tier for your course. If you’d like to offer your course for free, it
          must have a total video length of less than 2 hours. Also, courses with practice tests can not be free.
        </p>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className='formItem'>
            <label htmlFor='basicInfo' className='ud-form-label ud-heading-md'>
              Price Tier
            </label>

            <div className='selectionGroup'>
              <div className='ud-select-container ud-select-container-large'>
                <select
                  required
                  aria-invalid='false'
                  id='form-group--15'
                  className='ud-select ud-text-md'
                  defaultValue={'-1'}
                  {...register('tier')}
                >
                  <option key={'-1'} value={'-1'}>
                    --Select Price Tier--
                  </option>
                  {fakeOptions.map((optionItem: { label: string; value: string }) => (
                    <option key={optionItem.value} value={optionItem.value}>
                      {optionItem.label}
                    </option>
                  ))}
                </select>
                <div className='ud-select-icon-container ud-select-icon-right'>
                  <IoIosArrowDown
                    aria-hidden='true'
                    focusable='false'
                    className='ud-icon ud-icon-small ud-icon-color-neutral'
                  />
                </div>

                <p className='ud-form-note-validate-14'>{errors.tier?.message ?? ''}</p>
              </div>
            </div>
          </div>

          <button className='saveBtn ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
            <span>Save</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default CoursePricing
