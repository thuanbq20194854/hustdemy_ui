import RatingContainer from '@/components/RatingContainer/RatingContainer'
import ReportModal from '@/components/ReportModal/ReportModal'
import { useBoolean } from '@/hooks/useBoolean'
import { BiDislike, BiLike } from 'react-icons/bi'

function ReviewItem() {
  const [isOpen, setCommand] = useBoolean()

  const handleCancle = () => {
    setCommand(false)
  }

  const handleSubmit = () => {
    setCommand(false)
  }

  const handleOpenModal = () => {
    setCommand(true)
  }
  return (
    <div className='reviewContainer'>
      <div className='heading'>
        <div className='imgContainer'>
          <img src='https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg' alt='' />
        </div>

        <div className='name-and-rating'>
          <div className='name ud-heading-md'>Akshay K.</div>
          <div className='rating'>
            <RatingContainer averageReview={4.5} />
            <span className='ud-heading-xs'>2 weeks ago</span>
          </div>
        </div>
      </div>
      <div className='content'>
        I really liked the build first approach in this course, you basically build a mini project for every section you
        learn. Some sections are little outdated but Angela is adding constant updates.
      </div>
      <div className='feedbackTitle'>Was this review helpful?</div>
      <div className='feedback'>
        <div className='btnContainer'>
          <BiLike />
        </div>

        <div className='btnContainer'>
          <BiDislike />
        </div>

        <button
          className='ud-btn ud-btn-medium ud-btn-ghost ud-heading-sm ud-text-sm review-report-abuse'
          onClick={handleOpenModal}
        >
          <span>Report</span>
        </button>

        <ReportModal
          open={isOpen}
          onCancle={handleCancle}
          onSubmit={handleSubmit}
          handleCloseModal={() => setCommand(false)}
        />
      </div>
    </div>
  )
}

export default ReviewItem
