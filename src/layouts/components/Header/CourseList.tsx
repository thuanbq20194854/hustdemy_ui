import { NavLink } from 'react-router-dom'
import './Header.module.scss'
import { CartItem } from '../../../models/cart'

interface IProps {
  isWishList?: boolean
  buttonContent?: string
  buttonPath?: string

  data: CartItem[]
}

// const fakesItems = [
//   {
//     courseAvatar: 'https://img-c.udemycdn.com/course/100x100/32908_4e19_7.jpg',
//     courseName: 'The Complete Introduction To Accounting and Finance',
//     courseInstructor: 'Chris Benjamin, MBA & CFO',
//     coursePrice: '₫1,299,000'
//   },
//   {
//     courseAvatar: 'https://img-c.udemycdn.com/course/100x100/32908_4e19_7.jpg',
//     courseName: 'The Complete Introduction To Accounting and Finance',
//     courseInstructor: 'Chris Benjamin, MBA & CFO',
//     coursePrice: '₫1,299,000'
//   },
//   {
//     courseAvatar: 'https://img-c.udemycdn.com/course/100x100/32908_4e19_7.jpg',
//     courseName: 'The Complete Introduction To Accounting and Finance',
//     courseInstructor: 'Chris Benjamin, MBA & CFO',
//     coursePrice: '₫1,299,000'
//   },
//   {
//     courseAvatar: 'https://img-c.udemycdn.com/course/100x100/32908_4e19_7.jpg',
//     courseName: 'The Complete Introduction To Accounting and Finance',
//     courseInstructor: 'Chris Benjamin, MBA & CFO',
//     coursePrice: '₫1,299,000'
//   }
// ]

function CourseList(props: IProps) {
  const { isWishList = false, data } = props

  if (data.length === 0) {
    if (isWishList) {
      return (
        <div className='emptyList'>
          <span className='noItems ud-text-md'>Your wishlist is empty</span>
          <NavLink to='/' className='ud-heading-sm nav'>
            Explored course
          </NavLink>
        </div>
      )
    }

    return (
      <div className='emptyList'>
        <span className='noItems ud-text-md'>Your cart is empty</span>
        <NavLink to='/' className='ud-heading-sm nav'>
          Keep shopping
        </NavLink>
      </div>
    )
  }
  return (
    <div className='courseTooltip'>
      <div className='courseList'>
        {data.map((item: CartItem) => (
          <NavLink to='/course/hehe' key={item.id} className='navLink'>
            <div className='courseItem'>
              <div className='courseTitle'>
                <div className='courseAvatarContainer'>
                  <img src={item.cartCourse.Image ?? ''} alt='' />
                </div>

                <div className='courseInfo'>
                  <div className='courseName ud-heading-sm'>{item.cartCourse.Title}</div>
                  {/* <div className='courseInstructor ud-text-xs'>{item.courseInstructor}</div> */}
                  <div className='courseInstructor ud-text-xs'>Instructor Bui Quoc Thuan</div>
                  <div className='coursePrice ud-heading-sm'>{item.cartCourse.Price}</div>
                </div>
              </div>
              {isWishList && (
                <button className='atc-btn ud-medium ud-btn ud-btn-secondary'>
                  <span>Add To Cart</span>
                </button>
              )}
            </div>
          </NavLink>
        ))}
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
  )
}

export default CourseList
