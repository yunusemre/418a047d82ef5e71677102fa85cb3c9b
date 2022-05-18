export interface Variant {
  id?: string
  product_id?: string
  title?: string
  price?: string
  compare_at_price?: string
  option1?: string
  option2?: string
  option3?: string
  image_id?: number
}

export interface Option {
  id: string
  product_id: string
  name: string
  position: number
  values: string[]
}

export interface Image {
  id: string
  alt?: string
  width: number
  height: number
  src: string
  variant_ids: string[]
}

export interface IProduct {
  id?: string
  title?: string | any
  body_html?: string
  vendor?: string
  variants: Variant[]
  options?: Option[]
  images: Image[]
  image: Image
  selectedImage?: string
  changeImage?: string | any
  closeModal?: string | any
  change?: string | any
}

export interface IRootObject {
  products: IProduct[]
}
