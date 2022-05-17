export interface Variant {
  id: any;
  product_id: any;
  title: string;
  price: string;
  option1: string;
  option2: string;
  option3?: any;
  image_id?: number;
}

export interface Option {
  id: any;
  product_id: any;
  name: string;
  position: number;
  values: string[];
}

export interface Image {
  id: any;
  alt?: any;
  width: number;
  height: number;
  src: string;
  variant_ids: any[];
}

export interface IProduct {
  id?: any;
  title?: string | any;
  body_html?: string;
  vendor?: string;
  variants: Variant[];
  options?: Option[];
  images: Image[];
  image: Image;
  selectedImage?: string;
  changeImage?: string | any;
}

export interface IRootObject {
  products: IProduct[];
}
