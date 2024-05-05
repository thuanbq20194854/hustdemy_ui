import { Modal, Rate, Select } from 'antd'
import styles from './RatingModal.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

interface IProps {
  onSubmit?: (...args: any[]) => any
  onCancle?: (...args: any[]) => any
  open: boolean

  id?: number

  handleCloseModal: () => void
}

// const RatingTitleMaping = {
//   [1]: 'Awful, not what I expected at all',
//   [1.5]: 'Awful / Poor',
//   [2]: 'Poor, pretty disapointed',
//   [2.5]: 'Poor / Average',
//   [3]: 'Average, Could be better',
//   [3.5]: 'Average / Good',
//   [4]: 'Good, what I expected',
//   [4.5]: 'Good / Amazing',
//   [5]: 'Amazing, above expectations!'
// }

const RatingTitleMaping = new Map([
  [1, 'Awful, not what I expected at all'],
  [1.5, 'Awful / Poor'],
  [2, 'Poor, pretty disapointed'],
  [2.5, 'Poor / Average'],
  [3, 'Average, Could be better'],
  [3.5, 'Average / Good'],
  [4, 'Good, what I expected'],
  [4.5, 'Good / Amazing'],
  [5, 'Amazing, above expectations!']
])

function RatingModal({ onSubmit, onCancle, open, handleCloseModal }: IProps) {
  const handleCancle = () => {
    onCancle && onCancle()
  }
  const handleSubmit = () => {
    onSubmit && onSubmit()
  }

  const [rating, setRating] = useState<number | undefined>(undefined)

  const [mouseClickRating, setMouseClickRating] = useState<number | undefined>(undefined)

  const [ratingReview, setRatingReview] = useState('')
  const [ratingTitle, setRatingTitle] = useState('')
  const handleHoverChange = (value: number) => {
    if (!value) {
      setRating((prev) => prev)
      setRatingTitle((prev) => prev)
      return
    }
    if (value <= 1) {
      setRating(1)
      setRatingTitle(RatingTitleMaping.get(1) as string)
      return
    }
    setRating(value)
    setRatingTitle(RatingTitleMaping.get(value) as string)
  }

  const handleRatingMouseClick = (value: number) => {
    setMouseClickRating(value)
  }

  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const formData = new FormData()

    /// API

    ///

    handleCloseModal()
  }

  return (
    <Modal open={open} rootClassName={styles.rootClassReportModal} onCancel={handleCloseModal}>
      <form style={{ width: '100%' }} onSubmit={handleSubmitForm}>
        <div className='contentContainer'>
          <h2 className='ud-heading-xl'>How would you rate this course?</h2>

          <div className='ud-heading-md' style={{ height: '30px' }}>
            {ratingTitle}
          </div>
          <Rate defaultValue={rating} allowHalf onHoverChange={handleHoverChange} onChange={handleRatingMouseClick} />
          {mouseClickRating && (
            <>
              <div className='formGroup' style={{ width: '100%' }}>
                <textarea
                  value={ratingReview}
                  onChange={(evt) => setRatingReview(evt.target.value)}
                  rows={5}
                  spellCheck={false}
                  aria-invalid='false'
                  className='ud-text-input ud-text-area ud-text-md ud-text-are-large'
                  placeholder='Tell us about your own personal experience taking this course. Was it a good match for you?'
                />
              </div>

              <div className='ud-footer-btns' style={{ textAlign: 'right', width: '100%' }}>
                <button className='ud-btn ud-btn-large ud-btn-primary ud-heading-md' type='submit'>
                  <span>Save and Continue</span>
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </Modal>
  )
}

export default RatingModal
