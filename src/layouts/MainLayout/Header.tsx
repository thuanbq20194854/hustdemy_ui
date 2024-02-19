import { MdSearch } from 'react-icons/md'
import styles from './Header.module.scss'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { GoBell } from 'react-icons/go'
import { Tooltip } from 'antd'

import { MdKeyboardArrowRight } from 'react-icons/md'

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

const aaa = [
  {
    category: 'Development',
    subcategories: [
      {
        subcategory: '',
        hotTopic: 'kkee'
      }
    ]
  },
  {
    category: 'Business',
    subcategories: []
  },
  {
    category: 'Finance & Accounting',
    subcategories: []
  },
  {
    category: 'IT & Software',
    subcategories: []
  },
  {
    category: 'Office Productivity',
    subcategories: []
  },
  {
    category: 'Personal Development',
    subcategories: []
  },
  {
    category: 'Design',
    subcategories: []
  },
  {
    category: 'Marketing',
    subcategories: []
  },
  {
    category: 'Lifestyle',
    subcategories: []
  },
  {
    category: 'Photography & Video',
    subcategories: []
  },
  {
    category: 'Health & Fitness',
    subcategories: []
  },
  {
    category: 'Music',
    subcategories: []
  },
  {
    category: 'Teaching & Academics',
    subcategories: []
  }
]

function Header() {
  const renderCategoriesPopover = () => {
    return (
      <div className='categoriesWrapper'>
        <div className='linkColumn'>
          <div className='linkItem'>
            <span className='text ud-text-sm'>Teaching & Academics</span>
            <MdKeyboardArrowRight size={16} />
          </div>
        </div>
      </div>
    )
  }
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

        <Tooltip
          title={renderCategoriesPopover()}
          placement='bottomLeft'
          arrow={false}
          color='white'
          overlayStyle={{ marginTop: '100px' }}
          rootClassName={styles.categoryTooltipRootClass}
        >
          <button className='text-item'>
            <span className='ud-text-sm'>Categories</span>
          </button>
        </Tooltip>

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
        <button className='text-item'>
          <span className='ud-text-sm'>My Learning</span>
        </button>

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
