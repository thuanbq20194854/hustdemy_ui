import { CartItem } from '../../models/cart'
import styles from './ShopingItem.module.scss'

import StarsContainer from '../../components/RatingContainer/RatingContainer'

import { GoDotFill } from 'react-icons/go'
import { RiCoupon5Line } from 'react-icons/ri'

import { useAppDispatch } from '../../services/state/redux/store'
import { cartSliceActions } from '../../services/state/redux/cartSlice'
import { Bestseller, UpdatedRecently } from '../../components/Badges/Badges'
interface IProps {
  shoppingItemData: CartItem
}

function ShoppingItem({ shoppingItemData }: IProps) {
  const dispatch = useAppDispatch()

  const handleRemoveCartItem = (cartItemId: string) => {
    dispatch(cartSliceActions.removeCartItem(cartItemId))
  }
  return (
    <div className={styles.shoppingItem} key={shoppingItemData.id}>
      {/* image */}
      <div className='imageContainer'>
        <img src={shoppingItemData.cartCourse.Image ?? ''} alt='' />
      </div>
      <div className='detailInfo'>
        {/* Header */}

        <div className='header'>
          <div className='courseTitle ud-heading-md'>{shoppingItemData.cartCourse.Title}</div>

          <div className='instructor ud-text-xs'>By Dr. Angela Yu</div>
        </div>

        {/* Badges */}

        <div className='badgAndRating'>
          <div className='badges'>
            <Bestseller />
            <UpdatedRecently />
          </div>

          {/* Rating Stars */}

          <StarsContainer
            averageReview={shoppingItemData.cartCourse.AverageReview as number}
            countReview={shoppingItemData.cartCourse.CountReview as number}
          />
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
        <button
          className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'
          onClick={() => handleRemoveCartItem(shoppingItemData.id)}
        >
          Remove
        </button>

        <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Save for later</button>
        <button className='ud-btn ud-btn-xsmall ud-btn-ghost ud-text-sm'>Move to Wishlist</button>
      </div>

      {/* price */}

      <div className='priceContainer'>
        <div className='price'>
          <span className='ud-heading-md'>₫{shoppingItemData.cartCourse.Price}</span>
        </div>
        <RiCoupon5Line />
      </div>
    </div>
  )
}

export default ShoppingItem
