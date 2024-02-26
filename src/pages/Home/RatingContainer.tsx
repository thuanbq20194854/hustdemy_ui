import styles from './RatingContainer.module.scss'
import { IoIosStarOutline, IoMdStar } from 'react-icons/io'

interface IProps {
  countReview?: number
  averageReview: number
}

function RatingContainer(props: IProps) {
  const { countReview, averageReview } = props

  const rating = averageReview

  return (
    <div className={styles.ratingContainer}>
      <div className='ratingNumber ud-heading-sm'>
        <span>{rating}</span>
      </div>
      <div className='stars'>
        {Array(5)
          .fill(0)
          .map((item, index) => {
            const starOrder = index

            const renderPercent = () => {
              if (rating - starOrder < 0) {
                return 0
              }
              if (rating - starOrder > 1) {
                return 100
              }

              return (rating - starOrder) * 100
            }
            return (
              <div className='star' key={index}>
                <div className='innerContent'>
                  <IoIosStarOutline size={16} color='#b4690e' />
                  <div
                    className='innerStar'
                    style={{
                      width: renderPercent() + '%'
                    }}
                  >
                    <IoMdStar size={16} color='#b4690e' fill='#b4690e' stroke='#b4690e' />
                  </div>
                </div>
              </div>
            )
          })}
      </div>

      {countReview && (
        <div className='ud-text-xs numberOfRating'>
          <span>{countReview}</span>
        </div>
      )}
    </div>
  )
}

export default RatingContainer
