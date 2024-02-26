import styles from './RatingContainer.module.scss'
import { IoIosStarOutline, IoMdStar } from 'react-icons/io'

interface IProps {
  rating: number

  showNumberOfRating?: boolean
}

function RatingContainer(props: IProps) {
  const { rating, showNumberOfRating = true } = props

  return (
    <div className={styles.ratingContainer}>
      <div className='ratingNumber ud-heading-sm'>
        <span>4.7</span>
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

      {showNumberOfRating && (
        <div className='ud-text-xs numberOfRating'>
          <span>(277,455)</span>
        </div>
      )}
    </div>
  )
}

export default RatingContainer
