import { useAppSelector } from '../../services/state/redux/store'
import CourseCardListSlider from '../Home/CourseCardListSlider'
import styles from './Cart.module.scss'
import ShoppingList from './ShoppingList'

function Cart() {
  const { cart } = useAppSelector((state) => state.cart)
  return (
    <div className={styles.cartPage}>
      {/* Shoppping List Panel */}

      <div className='cartPageContainer'>
        <div className='titleSection ud-heading-xxxl'>Shopping Cart</div>

        <div className='shoppingSection'>
          <div className='shoppingListsPane'>
            <ShoppingList cartList={cart?.cart_items || []} title='3 cart' />
            {/* <ShoppingList title='Save for later' />
            <ShoppingList title='Recently wishlist' /> */}
          </div>

          {/* Checkout Panel */}

          <div className='checkoutPanel'>
            <div className='totalPrice'>
              <div className='totalPrice-inner'>
                <div className='label ud-heading-md'>Total</div>

                <div className='base-price ud-heading-xxl'>
                  <span>₫6,246,000</span>
                </div>

                <div>
                  <button className='checkoutBtn ud-btn ud-btn-large ud-btn-brand ud-heading-md'>
                    <span>Check out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CourseCardListSlider title={'You might also like'} />
      </div>
    </div>
  )
}

export default Cart
