export interface Variant {
  id?: number | string | any
  title: string
  price: string
  compare_at_price: string
  image_id: number
}

export interface Option {
  id: number
  name: string
  position: number
  values: string[]
}

export interface Image {
  id: number
  alt?: string
  width: number
  height: number
  src: string
  variant_ids: number[]
}

export interface IProduct {
  id: number
  title?: string | any
  body_html: string
  variants: Variant[]
  options: Option[]
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

export interface IThumbs {
  variants: Variant[]
  images: Image[]
  change: (img: string) => void
}

export interface IProductImages {
  variants: Variant[]
  images: Image[]
  image: Image
  selectedImage: string
  changeImage: (img: string) => void
}
