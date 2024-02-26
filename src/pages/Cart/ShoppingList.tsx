import styles from './ShoppingList.module.scss'

import StarsContainer from '../Home/RatingContainer'

import { GoDotFill } from 'react-icons/go'
import { RiCoupon5Line } from 'react-icons/ri'
import { CartItem } from '../../models/cart'

interface IProps {
  title: string

  cartList: CartItem[]
}
function ShoppingList({ title }: IProps) {
  return (
    <div className={styles.shoppingList}>
      <div className='title ud-heading-md'>{title}</div>

      <div className='shoppingItem'>
        {/* image */}

        <div className='imageContainer'>
          <img src='https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg' alt='' />
        </div>

        <div className='detailInfo'>
          {/* Header */}

          <div className='header'>
            <div className='courseTitle ud-heading-md'>The Complete 2024 Web Development Bootcamp</div>

            <div className='instructor ud-text-xs'>By Dr. Angela Yu</div>
          </div>

          {/* Badges */}

          <div className='badgAndRating'>
            <div className='badges'>
              <div className='badgeItem ud-badge ud-heading-xs bestseller'>Bestseller</div>
              <div className='badgeItem ud-badge ud-heading-xs updated-recently'>Updated Recently</div>
            </div>

            {/* Rating Stars */}

            <StarsContainer averageReview={4.5} />
          </div>

          {/* meta */}

          <div className='meta ud-text-xs'>
            <span>12 total hours</span>
            <GoDotFill />
            <span>375 lectures</span>
            <GoDotFill />
            <span>All levels</span>
          </div>
        </div>

        {/* vertical actions */}

        <div className='actions'>
          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Remove</button>

          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Save for later</button>
          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Move to Wishlist</button>
        </div>

        {/* price */}

        <div className='priceContainer'>
          <div className='price'>
            <span className='ud-heading-md'>₫1,599,000</span>
          </div>
          <RiCoupon5Line />
        </div>
      </div>
      <div className='shoppingItem'>
        {/* image */}

        <div className='imageContainer'>
          <img src='https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg' alt='' />
        </div>

        <div className='detailInfo'>
          {/* Header */}

          <div className='header'>
            <div className='courseTitle ud-heading-md'>The Complete 2024 Web Development Bootcamp</div>

            <div className='instructor ud-text-xs'>By Dr. Angela Yu</div>
          </div>

          {/* Badges */}

          <div className='badgAndRating'>
            <div className='badges'>
              <div className='badgeItem ud-badge ud-heading-xs bestseller'>Bestseller</div>
              <div className='badgeItem ud-badge ud-heading-xs updated-recently'>Updated Recently</div>
            </div>

            {/* Rating Stars */}

            <StarsContainer averageReview={4.5} />
          </div>

          {/* meta */}

          <div className='meta ud-text-xs'>
            <span>12 total hours</span>
            <GoDotFill />
            <span>375 lectures</span>
            <GoDotFill />
            <span>All levels</span>
          </div>
        </div>

        {/* vertical actions */}

        <div className='actions'>
          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Remove</button>

          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Save for later</button>
          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Move to Wishlist</button>
        </div>

        {/* price */}

        <div className='priceContainer'>
          <div className='price'>
            <span className='ud-heading-md'>₫1,599,000</span>
          </div>
          <RiCoupon5Line />
        </div>
      </div>
      <div className='shoppingItem'>
        {/* image */}

        <div className='imageContainer'>
          <img src='https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg' alt='' />
        </div>

        <div className='detailInfo'>
          {/* Header */}

          <div className='header'>
            <div className='courseTitle ud-heading-md'>The Complete 2024 Web Development Bootcamp</div>

            <div className='instructor ud-text-xs'>By Dr. Angela Yu</div>
          </div>

          {/* Badges */}

          <div className='badgAndRating'>
            <div className='badges'>
              <div className='badgeItem ud-badge ud-heading-xs bestseller'>Bestseller</div>
              <div className='badgeItem ud-badge ud-heading-xs updated-recently'>Updated Recently</div>
            </div>

            {/* Rating Stars */}

            <StarsContainer averageReview={4.5} />
          </div>

          {/* meta */}

          <div className='meta ud-text-xs'>
            <span>12 total hours</span>
            <GoDotFill />
            <span>375 lectures</span>
            <GoDotFill />
            <span>All levels</span>
          </div>
        </div>

        {/* vertical actions */}

        <div className='actions'>
          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Remove</button>

          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Save for later</button>
          <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Move to Wishlist</button>
        </div>

        {/* price */}

        <div className='priceContainer'>
          <div className='price'>
            <span className='ud-heading-md'>₫1,599,000</span>
          </div>
          <RiCoupon5Line />
        </div>
      </div>
    </div>
  )
}

export default ShoppingList
