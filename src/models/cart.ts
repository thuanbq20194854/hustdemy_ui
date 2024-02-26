export type Cart = {
  id: string
  user: string
  cart_items: CartItem[]
}

export type CartItem = {
  id: string
  cart_id: string
  cartCourse: CartCourse
}

export type CartCourse = {
  ID: number
  Title: string
  Image: string | null
  // User: CartUser
  // ProductStripeID: string
  // Level: CartLevel | null
  // Price: CartPrice | null
  Price: string
  CountReview?: number
  AverageReview?: number
  // Curriculums: CartCurriculum[] | null
}
