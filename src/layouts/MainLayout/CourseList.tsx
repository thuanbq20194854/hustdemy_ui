import { NavLink } from 'react-router-dom'
import './Header.module.scss'

interface IProps {
  hasAddToCart?: boolean
  buttonContent?: string
  buttonPath?: string
}

function CourseList(props: IProps) {
  const { hasAddToCart = false } = props
  return (
    <NavLink to='/course/hehe'>
      <div className='courseTooltip'>
        <div className='courseList'>
          <div className='courseItem'>
            <div className='courseTitle'>
              <div className='courseAvatarContainer'>
                <img src='https://img-c.udemycdn.com/course/100x100/32908_4e19_7.jpg' alt='' />
              </div>

              <div className='courseInfo'>
                <div className='courseName ud-heading-sm'>The Complete Introduction To Accounting and Finance</div>
                <div className='courseInstructor ud-text-xs'>Chris Benjamin, MBA & CFO</div>
                <div className='coursePrice ud-heading-sm'>₫1,299,000</div>
              </div>
            </div>
            {hasAddToCart && (
              <button className='atc-btn ud-medium ud-btn ud-btn-secondary'>
                <span>Add To Cart</span>
              </button>
            )}
          </div>
        </div>
        {props.buttonContent && (
          <div className='btn-container'>
            <NavLink to={props.buttonPath || '/'}>
              <button className='gtw-btn ud-btn ud-btn-primary ud-large ud-heading-md'>
                <span>{props.buttonContent}</span>
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </NavLink>
  )
}

export default CourseList
