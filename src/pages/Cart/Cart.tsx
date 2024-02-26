import styles from './Cart.module.scss'
import ShoppingList from './ShoppingList'

function Cart() {
  return (
    <div className={styles.cartPage}>
      {/* Shoppping List Panel */}

      <div className='cartPageContainer'>
        <div className='titleSection ud-heading-xxxl'>Shopping Cart</div>

        <div className='shoppingSection'>
          <div className='shoppingListsPane'>
            <ShoppingList title='3 cart' />
            <ShoppingList title='Save for later' />
            <ShoppingList title='Recently wishlist' />
          </div>

          {/* Checkout Panel */}

          <div className='checkoutPanel'></div>
        </div>
      </div>
    </div>
  )
}

export default Cart
