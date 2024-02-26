import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Cart, CartItem } from '../../../models/cart'

const items: CartItem[] = [
  {
    id: '7',
    cart_id: '1',
    cartCourse: {
      ID: 7,
      Title: '7777 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '8',
    cart_id: '1',
    cartCourse: {
      ID: 8,
      Title: '8888 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '9',
    cart_id: '1',
    cartCourse: {
      ID: 9,
      Title: '9999 Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '10',
    cart_id: '1',
    cartCourse: {
      ID: 10,
      Title: 'aaaa Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '11',
    cart_id: '1',
    cartCourse: {
      ID: 11,
      Title: 'bbbb Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  },
  {
    id: '12',
    cart_id: '1',
    cartCourse: {
      ID: 12,
      Title: 'cccc Become a Certified Web Developer: HTML, CSS and JavaScript',
      Image: 'https://img-c.udemycdn.com/course/240x135/11475_9dac_15.jpg',
      Price: '12999000',
      CountReview: 300,
      AverageReview: 4.5
    }
  }
]
interface CartState {
  cart: Cart | null
}

const initialState: CartState = {
  cart: {
    id: '1',
    user: 'hehe',
    cart_items: items
  }
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,

  reducers: {
    connectCart: (state: CartState, action: PayloadAction<Cart>) => {
      state.cart = action.payload
    },

    addCartItem: (state: CartState, action: PayloadAction<CartItem>) => {
      if (state.cart) {
        state.cart = {
          ...state.cart,
          cart_items: [...state.cart.cart_items, action.payload]
        }
      }
    },

    removeCartItem: (state: CartState, action: PayloadAction<string>) => {
      if (state.cart) {
        state.cart = {
          ...state.cart,
          cart_items: state.cart.cart_items.filter((cartItem) => cartItem.id !== action.payload)
        }
      }
    },
    removeCart: (state: CartState) => {
      state.cart = null
    }
  }
})

export const cartSliceActions = cartSlice.actions
