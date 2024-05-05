import { USER_ROLE } from '@/contants/user.constant'
import { useBoolean } from '@/hooks/useBoolean'
import { useState } from 'react'
import { GoBell } from 'react-icons/go'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdKeyboardArrowRight, MdOutlineShoppingCart, MdSearch } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'
import CustomTooltip from '../../../components/CustomTooltip/CustomTooltip'
import { useAppSelector } from '../../../services/state/redux/store'
import { clearAuthTokenLS } from '../../../utils/utils'
import CourseList from './CourseList'
import GoToLoginModal from './GoToLoginModal'
import styles from './Header.module.scss'

const fakesCategories = [
  'Development',
  'Business',
  'Finance & Accounting',
  'IT & Software',
  'Office Productivity',
  'Personal Development',
  'Design',
  'Marketing',
  'Health & Fitness',
  'Music'
]

const Level1Categories = [
  {
    id: '1',
    category: 'Development',
    subcategories: [
      {
        id: '1',
        category: 'Web Development',
        topics: [
          {
            id: '1',
            topic: 'JS'
          },
          'JS',
          'React JS',
          'Angular',
          'CSS',
          'Next.js',
          'Node.js',
          'ASP.NET Core',
          'Typescript'
        ]
      },
      {
        id: '2',
        category: 'Data Science',
        topics: [
          'Python',
          'Machine Learning',
          'Deep Learning',
          'Artifical Intelligence',
          'Natural Language Processing',
          'LangChain',
          'R(programming language)',
          'TensorFlow'
        ]
      },
      {
        id: '3',
        category: 'Mobile Development',
        topics: [
          'Google Flutter',
          'iOS Development',
          'Android Development',
          'React Native',
          'Dart',
          'Swift',
          'Kotlin',
          'SwiftUI'
        ]
      },
      {
        id: '4',
        category: 'Programming Language'
      },
      { id: '5', category: 'Game Development' },
      {
        id: '6',
        category: 'Database Design & Development'
      },
      {
        id: '7',
        category: 'Software Testing'
      },
      { id: '8', category: 'Software Engineering' },
      { id: '9', category: 'Software Development Tools' },
      {
        id: '10',
        category: 'No Code Development'
      }
    ]
  },
  {
    id: '2',

    category: 'Business',
    subcategories: [
      { id: '1', category: 'Management' },

      { id: '2', category: 'Sale' },
      { id: '3', category: 'Operation' },
      {
        id: '4',
        category: 'Industry'
      },
      {
        id: '5',
        category: 'E-Commerce'
      },
      {
        id: '6',
        category: 'Media'
      }
    ]
  },
  {
    id: '3',

    category: 'Finance & Accounting',
    subcategories: [
      { id: '1', category: 'Economics' },

      { id: '2', category: 'Finance' },
      { id: '3', category: 'Compliance' },
      {
        id: '4',
        category: 'Taxes'
      },
      {
        id: '5',
        category: 'Investing'
      }
    ]
  },
  {
    id: '4',

    category: 'IT & Software',
    subcategories: [
      { id: '1', category: 'IT Certifications' },

      { id: '2', category: 'Network & Security' },
      { id: '3', category: 'Hardware' },
      {
        id: '4',
        category: 'Operating System & Servers'
      },
      {
        id: '5',
        category: 'Other IT & Software'
      }
    ]
  },
  {
    id: '5',

    category: 'Office Productivity',
    subcategories: [
      { id: '1', category: 'Microsoft' },

      { id: '2', category: 'Apple' },
      { id: '3', category: 'Google' },
      {
        id: '4',
        category: 'SAP'
      },
      {
        id: '5',
        category: 'Oracle'
      },
      {
        id: '6',
        category: 'Other Office Productivity'
      }
    ]
  },
  {
    id: '6',

    category: 'Personal Development',
    subcategories: []
  },
  {
    id: '7',

    category: 'Design',
    subcategories: []
  },
  {
    id: '8',

    category: 'Marketing',
    subcategories: []
  },
  {
    id: '9',

    category: 'Lifestyle',
    subcategories: []
  },
  {
    id: '10',

    category: 'Photography & Video',
    subcategories: []
  },
  {
    id: '11',

    category: 'Health & Fitness',
    subcategories: []
  },
  {
    id: '12',

    category: 'Music',
    subcategories: []
  },
  {
    id: '13',

    category: 'Teaching & Academics',
    subcategories: []
  }
]

function Header() {
  const cartState = useAppSelector((state) => state.cart)
  const authSlice = useAppSelector((state) => state.auth)
  const { isLoggedIn, user } = authSlice
  const [openLoginModal, handleCommandLoginModal] = useBoolean()

  const [level1Category, setLevel1Category] = useState<string>('')
  const [level2Category, setLevel2Category] = useState<string>('')

  const handleMouseEnterLevel1Link = (categoryId: string) => {
    setLevel1Category(categoryId)
    setLevel2Category('')
  }
  const handleMouseEnterLevel2Link = (categoryId: string) => {
    setLevel2Category(categoryId)
  }

  const renderLevel1CategoryList = () => (
    <div className='linkColumn category-level1'>
      {Level1Categories.map((categoryItem) => (
        <NavLink key={categoryItem.id} to='/courses/level1'>
          <div
            className={`linkItem ${categoryItem.id === level1Category && 'isHovered'}`}
            onMouseEnter={() => handleMouseEnterLevel1Link(categoryItem.id)}
          >
            <span className='text ud-text-sm'>{categoryItem.category}</span>
            <MdKeyboardArrowRight size={16} className='icon' />
          </div>
        </NavLink>
      ))}
    </div>
  )

  const renderLevel2CategoryList = () => {
    if (level1Category === '') {
      return null
    }

    const selectedLevel1Category = Level1Categories.find((item) => item.id === level1Category)

    return (
      <div className='linkColumn category-level1'>
        {selectedLevel1Category?.subcategories.map((categoryItem) => (
          <NavLink key={categoryItem.id} to='/courses/level1/level2'>
            <div
              className={`linkItem ${categoryItem.id === level2Category && 'isHovered'}`}
              key={categoryItem.id}
              onMouseEnter={() => handleMouseEnterLevel2Link(categoryItem.id)}
            >
              <span className='text ud-text-sm'>{categoryItem.category}</span>
              <MdKeyboardArrowRight size={16} className='icon' />
            </div>
          </NavLink>
        ))}
      </div>
    )
  }

  const renderCategoriesPopover = () => {
    return (
      <div className='categoriesWrapper'>
        {renderLevel1CategoryList()}
        {renderLevel2CategoryList()}
      </div>
    )
  }

  // const test = {
  //   cartListEmpty: true
  // }

  const renderWishList = () => (
    <CourseList data={cartState.cart?.cart_items || []} isWishList={true} buttonContent='Go To Wishlist' />
  )
  const renderCartList = () => {
    return <CourseList data={cartState.cart?.cart_items || []} buttonContent='Go To Cart' />
  }

  const renderMenuList = () => {
    return (
      <div className={styles.headerMenuWrapper}>
        <div className='userProfile'>
          <div className='avatarContainer'>
            <img
              src='https://lh3.googleusercontent.com/a/ACg8ocJEoJUYixlFMzUzd9DpRQhHhKAAYx3l1wGSEWfeidHDyrw=s96-c'
              alt=''
            />
          </div>

          <div className='userInfo'>
            <div className='ud-heading-md userName'>Bui QUoc Thuan</div>
            <div className='ud-text-xs userEmail'>nauhtdz@gmail.com</div>
          </div>
        </div>
        <div className='menuBlock'>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>My Learning</div>
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>My Cart</div>{' '}
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Wishlist</div>{' '}
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Instructor Dashboard</div>{' '}
          </NavLink>
        </div>

        <div className='menuBlock'>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Notifications</div>{' '}
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Messages</div>{' '}
          </NavLink>
        </div>

        <div className='menuBlock'>
          <NavLink to='/user/edit-account'>
            <div className='menuItem ud-text-sm'>Account Settings</div>
          </NavLink>
          {/* <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Payment Method</div>
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Subcription</div>
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Subcription</div>
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Hustdemy History</div>
          </NavLink>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Puschase History</div>
          </NavLink> */}
        </div>

        {/* <div className='menuBlock'>
          <NavLink to='/'>
            <div className='menuItem languageItem'>
              <div className='languageValueContainer'>
                <span>Language</span>
                <span>English</span>
              </div>
              <GrLanguage />
            </div>
          </NavLink>
        </div> */}

        <div className='menuBlock'>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Public Profile</div>
          </NavLink>
          <NavLink to='/user/edit-profile'>
            <div className='menuItem ud-text-sm'>Edit Profile</div>
          </NavLink>
        </div>
        <div className='menuBlock'>
          <NavLink to='/'>
            <div className='menuItem ud-text-sm'>Help</div>
          </NavLink>
          <button onClick={handleLogout} className='menuItemButton'>
            <div className='menuItem ud-text-sm'>Logout</div>
          </button>
        </div>
      </div>
    )
  }

  const navigate = useNavigate()

  const handleLogout = () => {
    clearAuthTokenLS()
    localStorage.clear()
    navigate('/login')
  }

  const handleRegisterTeacherRole = async () => {
    if (isLoggedIn) {
      navigate('/register-instructor')
    } else {
      handleCommandLoginModal(true)
    }
  }

  console.log('openLoginModal: ', openLoginModal)
  return (
    <div className={styles.headerWrapper}>
      <div className='upperRegion'>
        <NavLink to='/'>
          <img
            src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
            alt='Udemy'
            width='91'
            height='34'
            loading='lazy'
            className='logo'
          />
        </NavLink>

        <CustomTooltip
          title={renderCategoriesPopover()}
          placement='bottomLeft'
          arrow={false}
          color='white'
          overlayStyle={{ maxWidth: '52rem' }}
          rootClassName={styles.categoryTooltipRootClass}
        >
          <button className='text-item'>
            <span className='ud-text-sm'>Categories</span>
          </button>
        </CustomTooltip>

        <div className='search-wrapper'>
          <form action=''>
            <button className='search-btn'>
              <MdSearch size={24} color='#747373' />
            </button>
            <input type='text' placeholder='Search for anything' className='search-input' />
          </form>
        </div>

        {/* <button className='text-item'>
          <span className='ud-text-sm'>Hustdemy Business</span>
        </button> */}

        {isLoggedIn && user?.role === USER_ROLE.INSTRUCTOR ? (
          <NavLink to='instructor/courses'>
            <button className='text-item'>
              <span className='ud-text-sm'>Instructor</span>
            </button>
          </NavLink>
        ) : (
          <>
            <button className='text-item' onClick={handleRegisterTeacherRole}>
              <span className='ud-text-sm'>Teach On Hustdemy</span>
            </button>
          </>
        )}

        {isLoggedIn && (
          <>
            <NavLink to='my-course/courses'>
              <button className='text-item'>
                <span className='ud-text-sm'>My Learning</span>
              </button>
            </NavLink>

            <CustomTooltip
              placement='bottomRight'
              title={renderWishList()}
              color='white'
              arrow={false}
              overlayStyle={{ maxWidth: '30.5rem' }}
              rootClassName={styles.cartTooltipRootClass}
            >
              <div className='ud-btn'>
                <IoMdHeartEmpty size={24} />
              </div>
            </CustomTooltip>
          </>
        )}

        <CustomTooltip
          placement='bottomRight'
          title={renderCartList()}
          color='white'
          arrow={false}
          overlayStyle={{ maxWidth: '30.5rem' }}
          rootClassName={styles.cartTooltipRootClass}
        >
          <div className='ud-btn cart'>
            <MdOutlineShoppingCart size={24} />
            <span className='purchase-number'>
              <p>{cartState.cart?.cart_items.length}</p>
            </span>
          </div>
        </CustomTooltip>

        {isLoggedIn ? (
          <>
            <div className='ud-btn'>
              <GoBell size={24} />
            </div>

            <CustomTooltip
              placement='bottomRight'
              title={renderMenuList()}
              color='white'
              arrow={false}
              rootClassName={styles.cartTooltipRootClass}
            >
              <div className='avatar-ud-btn'>
                <div className='avatar-container'>
                  <img
                    className='avatar'
                    src='https://lh3.googleusercontent.com/a/ACg8ocJEoJUYixlFMzUzd9DpRQhHhKAAYx3l1wGSEWfeidHDyrw=s96-c'
                    alt=''
                  />
                </div>
              </div>
            </CustomTooltip>
          </>
        ) : (
          <>
            <NavLink to='/login' className='resetNavlink'>
              <button className='ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium auth-btn'>
                Log in
              </button>
            </NavLink>
            <NavLink to='/register' className='resetNavlink'>
              <button className='ud-btn ud-btn-medium ud-btn-primary ud-heading-sm ud-btn-icon ud-btn-icon-medium auth-btn'>
                Sign up
              </button>
            </NavLink>
          </>
        )}
      </div>
      <GoToLoginModal open={openLoginModal} handleCommandModal={handleCommandLoginModal} />
    </div>
  )
}

export default Header
