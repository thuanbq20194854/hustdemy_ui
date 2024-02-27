export interface Course {
  id: number
  out_comes: string[] | null
  intended_for: string[] | null
  requirements: string[] | null
  product_id_stripe: string
  level_id: number | null
  category_id: number
  sub_category_id: number
  title: string
  review_status: number
  welcome_message: string | null
  congratulations_message: string | null
  subtitle: string | null
  primarily_teach: string | null
  description: string | null
  status: number
  language_id: number | null
  price_id: number | null
  user_id: number | null
  promotional_video: string | null
  image: string | null
  //   curriculums: Curriculum[]
  updated_at: string
  created_at: string
}
