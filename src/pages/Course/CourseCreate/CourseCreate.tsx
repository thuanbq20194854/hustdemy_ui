import { useMemo, useState } from 'react'
import styles from './CourseCreate.module.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'antd/es/form/Form'
import { Form, Input, Select } from 'antd'

function CourseCreate() {
  const [canBeContinue, setCanBeContinue] = useState(false)

  const [canBeCreate, setCanBeCreate] = useState(false)

  const [currentStep, setCurrentStep] = useState(2)

  const totalStep = 2

  const navigate = useNavigate()

  const [form] = useForm()

  const handleGoToNextStep = () => {
    if (currentStep === totalStep) {
      return
    }
    setCurrentStep((prev) => prev + 1)
  }

  const handleGoToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleExit = () => {
    navigate('/instructor/courses')
  }

  const handleCreateCourse = () => {
    // API Create Course
    navigate('/instructor/course/5856028/manage/goals/') //https://www.udemy.com
  }

  const checkCanBeContinue = () => {
    if (currentStep === 1 && form.getFieldValue('courseTitle')?.trim().length > 0) {
      return true
    } else if (currentStep === 2 && form.getFieldValue('courseCategory') !== undefined) {
      return true
    }

    return false
  }

  const checkCanBeCreateCourse = () => {
    const field1OK = form.getFieldValue('courseTitle')?.trim().length > 0

    const field2OK = form.getFieldValue('courseCategory') !== undefined

    return field1OK && field2OK
  }

  const handleInputCourseChange = (value: any) => {
    console.log('form: ', form.getFieldsValue())
  }

  const handleFormValuesChange = () => {
    setCanBeContinue(checkCanBeContinue())

    if (currentStep === totalStep) {
      setCanBeCreate(checkCanBeCreateCourse())
    }
  }

  const options = [
    {
      label: 'It and Software',
      value: '1'
    },
    {
      label: 'Businesss',
      value: '2'
    },
    {
      label: 'Education',
      value: '3'
    }
  ]

  const renderStep1 = () => (
    <div className={`takeoverContent`} style={{ display: currentStep === 1 ? '' : 'none' }}>
      <div className='headerText ud-heading-serif-xxl'>How about a working title?</div>

      <div className='subheaderText'>It's ok if you can't think of a good title now. You can change it later.</div>

      <Form.Item className='formItem' name='courseTitle'>
        <Input
          type='text'
          placeholder='e.g. Learn Photoshop CS6 from Scratch'
          className='formInput'
          onChange={(e) => handleInputCourseChange(e.target.value)}
        />
      </Form.Item>
    </div>
  )
  const renderStep2 = () => (
    <div className={`takeoverContent`} style={{ display: currentStep === 2 ? '' : 'none' }}>
      <div className='headerText ud-heading-serif-xxl'>What category best fits the knowledge you'll share?</div>

      <div className='subheaderText'>If you're not sure about the right category, you can change it later.</div>

      <Form.Item className='formItem' name='courseCategory'>
        <Select
          placeholder='e.g. Learn Photoshop CS6 from Scratch'
          className='formInput'
          rootClassName={styles.rootClassAntdSelect}
          options={options}
        />
      </Form.Item>
    </div>
  )

  return (
    <div className={styles.courseCreatePage}>
      <div className='header'>
        <div className='innerHeader'>
          <div className='logoContainer'>
            <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='' />
          </div>

          <div className='stepTitle ud-text-lg'>
            Step {currentStep} of {totalStep}
          </div>

          <button className='exitBtn ud-btn ud-btn-large ud-btn-ghost ud-heading-md' onClick={handleExit}>
            <span>Exit</span>
          </button>
        </div>

        <div className='processBar'>
          <div
            className='innerProcessBar'
            style={{
              transform: `scaleX(${currentStep / totalStep})`
            }}
          ></div>
        </div>
      </div>

      <div className='pageBody'>
        <Form form={form} onValuesChange={handleFormValuesChange}>
          {renderStep1()}
          {renderStep2()}
        </Form>
      </div>

      <div className='footerSection'>
        {!(currentStep === 1) && (
          <button className='ud-btn ud-btn-large ud-btn-secondary ud-heading-md' onClick={handleGoToPreviousStep}>
            <span>Previous</span>
          </button>
        )}
        {currentStep === totalStep ? (
          <button
            className={`ud-btn ud-btn-large ud-btn-primary ud-heading-md ${!canBeCreate && 'ud-btn-disabled'}`}
            onClick={handleCreateCourse}
          >
            <span>Create Course</span>
          </button>
        ) : (
          <button
            className={`ud-btn ud-btn-large ud-btn-primary ud-heading-md ${!canBeContinue && 'ud-btn-disabled'}`}
            onClick={handleGoToNextStep}
          >
            <span>Continue</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default CourseCreate
