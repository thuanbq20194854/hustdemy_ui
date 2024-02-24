import './AuthHome.module.scss'
import { IoIosStarOutline, IoMdStar } from 'react-icons/io'

interface IProps {
  rating: number
}

function StarsContainer(props: IProps) {
  const { rating } = props

  return (
    <div className='ratingContainer'>
      <div className='ratingNumber ud-heading-sm'>4.7</div>
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
    </div>
  )
}

export default StarsContainer
