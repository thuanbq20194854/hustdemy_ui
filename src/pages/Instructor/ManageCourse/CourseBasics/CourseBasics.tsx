import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowDown } from 'react-icons/io'
import { ValidationError } from 'yup'
import TextEditor from '../../../../components/TextEditor/TextEditor'
import { UpdateCourseImage, UpdateCourseLandingPageForm } from '../../../../models/course'
import { schemeUpdateImage } from '../../../../validators/auth'
import styles from './CourseBasics.module.scss'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'antd'
import { MdDelete, MdOutlineFileUpload } from 'react-icons/md'
import { schemeUpdateCourseLanding } from '../../../../validators/course'
import { useCourseManageContext } from '../context/CourseMangeContext'

const customToolBar = [
  ['bold', 'italic'],
  [{ list: 'ordered' }, { list: 'bullet' }]
]

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

function CourseBasics() {
  const { handleUpdateCourseLandingPage, course } = useCourseManageContext()
  const inputRef = useRef<any | undefined>(undefined)

  const [courseImagePreview, setCourseImagePreview] = useState<string>('')
  const [courseImageFile, setCourseImageFile] = useState<File | undefined>(undefined)
  const [courseImageError, setCourseImageError] = useState<string>('')

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors }
  } = useForm<UpdateCourseLandingPageForm>({
    defaultValues: {
      category_id: course.category_id,
      title: course.title,
      subtitle: course.subtitle ?? '',
      description: course.description ?? '',
      primarily_teach: course.primarily_teach ?? '',
      sub_category_id: course.sub_category_id,
      level_id: course.level_id ?? undefined,
      language_id: course.language_id ?? undefined
    },

    resolver: yupResolver(schemeUpdateCourseLanding)
  })

  console.log('watch: ', watch())

  const handleSubmitForm = (formData: UpdateCourseLandingPageForm) => {
    handleUpdateCourseLandingPage(formData, courseImageFile)

    console.log('kiki')
  }

  const handleEditorChange = (html: string) => {
    setValue('description', html)
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const data: UpdateCourseImage = {
        image: e.target.files ? e.target.files[0] : undefined
      }

      const dataValidate = await schemeUpdateImage.validate(data)

      const newFile = dataValidate.image

      if (newFile) {
        const blob = URL.createObjectURL(newFile)
        setCourseImageFile(newFile)
        setCourseImageError('')
        setCourseImagePreview(blob)
        console.log('blob: ', blob)
      }

      console.log('okkkkk')
    } catch (e) {
      if (e instanceof ValidationError) {
        console.log('if')

        setCourseImageError(e.message)
        setCourseImagePreview('')
      } else {
        console.log('else')
        console.log(e)
      }
    }
  }

  const removeCoursImageSelection = () => {
    setCourseImageFile(undefined)
    setCourseImageError('')
    setCourseImagePreview('')
    console.log('lick')
  }

  const handleSelectFile = () => {
    inputRef.current?.click()
  }

  /// on Category Change => set Subcateory

  /// useEffect - init Data for Selection + Image

  useEffect(() => {
    if (course.image) {
      setCourseImagePreview(course.image)
    }
  }, [])

  console.log('course : ', course)

  return (
    <div className={styles.courseBasicPage}>
      <div className='subHeaderWrapper'>
        <div className='subHeaderContent ud-heading-serif-xl'>Curriculum</div>
      </div>

      <div className='mainContent'>
        {/* <div className='alertContainer'>
          <p>
            Your course landing page is crucial to your success on Udemy. If it’s done right, it can also help you gain
            visibility in search engines like Google. As you complete this section, think about creating a compelling
            Course Landing Page that demonstrates why someone would want to enroll in your course. Learn more about
            <span className='ud-link-underline' style={{ color: '#5624d0', marginLeft: '6px', marginRight: '6px' }}>
              creating your course landing page
            </span>
            and
            <span className='ud-link-underline' style={{ color: '#5624d0', marginLeft: '6px', marginRight: '6px' }}>
              course title standards.
            </span>
          </p>
        </div> */}

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <button className='saveBtn ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
            <span>Save</span>
          </button>

          <div className='formItem'>
            <label htmlFor='title' className='ud-form-label ud-heading-md'>
              Course title
            </label>
            <input
              id='title'
              placeholder='Insert your course title'
              className='ud-text-input-large ud-text-md ud-text-input'
              maxLength={60}
              {...register('title')}
            />
            <p className='ud-form-note ud-text-xs'>
              Your title should be a mix of attention-grabbing, informative, and optimized for search (60 characters)
            </p>
            <p className='ud-form-note-validate-14'>{errors.title?.message ?? ''}</p>
          </div>

          <div className='formItem'>
            <label htmlFor='subtitle' className='ud-form-label ud-heading-md'>
              Course title
            </label>
            <input
              id='subtitle'
              placeholder='Insert your course title'
              className='ud-text-input-large ud-text-md ud-text-input'
              maxLength={120}
              {...register('subtitle')}
            />
            <p className='ud-form-note ud-text-xs'>
              Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your
              course. (120 characters)
            </p>
            <p className='ud-form-note-validate-14'>{errors.subtitle?.message ?? ''}</p>
          </div>

          <div className='formItem'>
            <label htmlFor='description' className='ud-form-label ud-heading-md'>
              Course description
            </label>
            <TextEditor
              defaultValue={watch('description') ?? ''}
              customToolBar={customToolBar}
              handleHTMLChange={handleEditorChange}
            />
            <p className='ud-form-note ud-text-xs'>Description should have minimum 200 words.</p>
            <p className='ud-form-note-validate-14'>{errors.description?.message ?? ''}</p>
          </div>

          <div className='formItem'>
            <label htmlFor='basicInfo' className='ud-form-label ud-heading-md'>
              Basic Info
            </label>

            <div className='selectionGroup'>
              <div className='ud-select-container ud-select-container-large'>
                <select
                  required
                  aria-invalid='false'
                  id='form-group--15'
                  className='ud-select ud-text-md'
                  defaultValue={'-1'}
                  {...register('language_id')}
                >
                  <option key={'-1'} value={'-1'}>
                    --Select Language--
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

                <p className='ud-form-note-validate-14'>{errors.language_id?.message ?? ''}</p>
              </div>

              <div className='ud-select-container ud-select-container-large'>
                <select
                  required
                  aria-invalid='false'
                  id='form-group--15'
                  className='ud-select ud-text-md'
                  defaultValue={'-1'}
                  {...register('level_id')}
                >
                  <option key={'-1'} value={'-1'}>
                    --Select Level--
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

                <p className='ud-form-note-validate-14'>{errors.level_id?.message ?? ''}</p>
              </div>

              <div className='categorySelections'>
                <div className='ud-select-container ud-select-container-large'>
                  <select
                    required
                    aria-invalid='false'
                    id='form-group--15'
                    className='ud-select ud-text-md'
                    defaultValue={'-1'}
                    {...register('category_id')}
                  >
                    <option key={'-1'} value={'-1'}>
                      --Select Category--
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
                </div>
                <p className='ud-form-note-validate-14'>{errors.category_id?.message ?? ''}</p>

                <div className='ud-select-container ud-select-container-large mt-16'>
                  <select
                    required
                    aria-invalid='false'
                    id='form-group--15'
                    className='ud-select ud-text-md'
                    defaultValue={'-1'}
                    {...register('sub_category_id')}
                  >
                    <option key={'-1'} value={'-1'}>
                      --Select Subcategory--
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
                </div>
                <p className='ud-form-note-validate-14'>{errors.sub_category_id?.message ?? ''}</p>
              </div>
            </div>
          </div>

          <div className='flexContainer'>
            <div className='formItem'>
              <label htmlFor='primarily_teach' className='ud-form-label ud-heading-md'>
                What is primarily taught in your course?
              </label>
              <input
                id='primarily_teach'
                placeholder='e.g Landscape Photography'
                className='ud-text-input-large ud-text-md ud-text-input'
                maxLength={120}
                {...register('primarily_teach')}
              />
            </div>
            <p className='ud-form-note-validate-14'>{errors.primarily_teach?.message ?? ''}</p>

            <div className='spacer'></div>
          </div>

          <div className='formItem'>
            <label htmlFor='courseImage' className='ud-form-label ud-heading-md'>
              Course Image
            </label>

            <div className='contentContainer'>
              <div className='imgContainer'>
                <img
                  src={
                    courseImagePreview ? courseImagePreview : 'https://s.udemycdn.com/course/750x422/placeholder.jpg'
                  }
                  alt=''
                />
              </div>

              <div className='fileInputContainer'>
                <Button
                  style={{
                    marginBottom: '16px'
                  }}
                  icon={<MdDelete style={{ fontSize: '20px' }} />}
                  onClick={removeCoursImageSelection}
                >
                  Remove image
                </Button>
                <input
                  type='file'
                  accept='.png,.jpg,.jpeg'
                  onChange={handleFileChange}
                  ref={inputRef}
                  className='inputFile'
                />

                <Button icon={<MdOutlineFileUpload style={{ fontSize: '20px' }} />} onClick={handleSelectFile}>
                  Upload Image
                </Button>
                <p>{courseImageFile ? courseImageFile.name : ''}</p>
                <p className='ud-form-note-validate-14'>{courseImageError}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CourseBasics
