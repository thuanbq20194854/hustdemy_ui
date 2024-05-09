import TextEditor from '@/components/TextEditor/TextEditor'
import { CreateAnswerLecture } from '@/models/course'
import { schemeCreateAnswerLecture } from '@/validators/course'
import { yupResolver } from '@hookform/resolvers/yup'
import { Spin } from 'antd'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function AddAnswerForm() {
  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<CreateAnswerLecture>({
    defaultValues: {
      answer: ''
    },
    resolver: yupResolver(schemeCreateAnswerLecture)
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitForm = (formData: CreateAnswerLecture) => {
    try {
      // toast
      // reset
    } catch (err) {
      console.log(err)
    }
    // API
  }

  const handleTextEditorChange = (html: string) => {
    setValue('answer', html)
  }
  return (
    <div className='addYourAnswerWrapper'>
      <form action='' onSubmit={handleSubmit(handleSubmitForm)}>
        <div className='ud-form-group'>
          <label className='ud-form-label ud-heading-sm' htmlFor='form-group--2692'>
            Write your response
          </label>
          <TextEditor defaultValue={getValues('answer')} handleHTMLChange={handleTextEditorChange} />
          <div className='ud-form-note-validate-14'>{errors.answer && errors.answer.message}</div>
          <div className='ud-footer-btns' style={{ textAlign: 'right' }}>
            <button type='button' data-purpose='submit' className='ud-btn ud-btn-small ud-btn-primary ud-heading-sm'>
              {isLoading ? <Spin></Spin> : <span>Add an answer</span>}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddAnswerForm
