import classNames from 'classnames'
import { IProductImages } from '../../models'
import Thumbs from '../Thumbs'
import './ProductImages.scss'

const ProductImages = ({ variants, images, image, selectedImage, changeImage }: IProductImages) => (
  <div className='product-photos'>
    <div className='product-photos__promote text-center'>
      {
        <img
          className={`promote-image ${classNames({
            big: image.width > image.height,
          })}`}
          src={selectedImage}
          alt={image.alt}
        />
      }
    </div>
    <Thumbs
      variants={variants}
      change={(selected: string) => changeImage(selected)}
      images={images}
    />
  </div>
)

export default ProductImages
