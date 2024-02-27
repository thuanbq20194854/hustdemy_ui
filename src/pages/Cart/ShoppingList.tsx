import styles from './ShoppingList.module.scss'

import { CartItem } from '../../models/cart'

import ShoppingItem from './ShoppingItem'

interface IProps {
  title: string
  cartList: CartItem[]
}
function ShoppingList({ title, cartList }: IProps) {
  return (
    <div className={styles.shoppingList}>
      <div className='title ud-heading-md'>{title}</div>

      {cartList.map((cartItem: CartItem) => (
        <ShoppingItem key={cartItem.id} shoppingItemData={cartItem} />
      ))}
    </div>
  )
}

export default ShoppingList
