import RatingContainer from '@/components/RatingContainer/RatingContainer'
import ReportModal from '@/components/ReportModal/ReportModal'
import { useBoolean } from '@/hooks/useBoolean'
import { LearningReview } from '@/models/course'
import dayjs from 'dayjs'
import { BiDislike, BiLike } from 'react-icons/bi'
import { RxAvatar } from 'react-icons/rx'

interface IProps {
  review: LearningReview
}

function ReviewItem({ review }: IProps) {
  const [isOpen, handleCommand] = useBoolean()

  return (
    <div className='reviewContainer'>
      <div className='heading'>
        <div className='imgContainer'>
          {review.user.avatar ? <img src={review.user.avatar} alt='' /> : <RxAvatar size={40} />}
        </div>

        <div className='name-and-rating'>
          <div className='name ud-heading-md'>{review.user.name}</div>
          <div className='rating'>
            <RatingContainer averageReview={review.star_count as number} />
            <span className='ud-heading-xs'>{dayjs(review.updated_at).format('DD/MM/YYYY HH:MM')}</span>
          </div>
        </div>
      </div>
      <div className='content'>{review.comment}</div>
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
          onClick={() => handleCommand(true)}
        >
          <span>Report</span>
        </button>

        <ReportModal id={review.id} open={isOpen} handleCommandModal={handleCommand} />
      </div>
    </div>
  )
}

export default ReviewItem
