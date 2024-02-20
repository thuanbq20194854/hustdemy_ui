import { MdSearch, MdOutlineShoppingCart, MdKeyboardArrowRight } from 'react-icons/md'
import styles from './Header.module.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import { GoBell } from 'react-icons/go'
import { useState } from 'react'
import CustomTooltip from '../../components/CustomTooltip/CustomTooltip'

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
        <div
          className={`linkItem ${categoryItem.id === level1Category && 'isHovered'}`}
          key={categoryItem.id}
          onMouseEnter={() => handleMouseEnterLevel1Link(categoryItem.id)}
        >
          <span className='text ud-text-sm'>{categoryItem.category}</span>
          <MdKeyboardArrowRight size={16} className='icon' />
        </div>
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
          <div
            className={`linkItem ${categoryItem.id === level2Category && 'isHovered'}`}
            key={categoryItem.id}
            onMouseEnter={() => handleMouseEnterLevel2Link(categoryItem.id)}
          >
            <span className='text ud-text-sm'>{categoryItem.category}</span>
            <MdKeyboardArrowRight size={16} className='icon' />
          </div>
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

  const renderMyLearningTooltip = () => (
    <div className='cartTooltip'>
      <div className='cartList'>
        <div className='cartItem'>
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
          <button className='atc-btn ud-medium ud-btn ud-btn-secondary'>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
      <div className='btn-container'>
        <button className='gtw-btn ud-btn ud-btn-primary ud-large ud-heading-md'>
          <span>Go To Wishlist</span>
        </button>
      </div>
    </div>
  )
  return (
    <div className={styles.headerWrapper}>
      <div className='upperRegion'>
        <img
          src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
          alt='Udemy'
          width='91'
          height='34'
          loading='lazy'
          className='logo'
        />

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

        <button className='text-item'>
          <span className='ud-text-sm'>Hustdemy Business</span>
        </button>
        <button className='text-item'>
          <span className='ud-text-sm'>Instructor</span>
        </button>
        <CustomTooltip
          placement='bottomRight'
          title={renderMyLearningTooltip()}
          color='white'
          arrow={false}
          overlayStyle={{ maxWidth: '30.5rem' }}
          rootClassName={styles.cartTooltipRootClass}
        >
          <button className='text-item'>
            <span className='ud-text-sm'>My Learning</span>
          </button>
        </CustomTooltip>

        <div className='ud-btn'>
          <IoMdHeartEmpty size={24} />
        </div>
        <div className='ud-btn cart'>
          <MdOutlineShoppingCart size={24} />
          <span className='purchase-number'>
            <p>46</p>
          </span>
        </div>
        <div className='ud-btn'>
          <GoBell size={24} />
        </div>

        <div className='avatar-ud-btn'>
          <div className='avatar-container'>
            <img
              className='avatar'
              src='https://lh3.googleusercontent.com/a/ACg8ocJEoJUYixlFMzUzd9DpRQhHhKAAYx3l1wGSEWfeidHDyrw=s96-c'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='bottomRegion'>
        {fakesCategories.map((cateItem, index) => (
          <div key={index}>
            <button className='btn-wrapper'>{cateItem}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
