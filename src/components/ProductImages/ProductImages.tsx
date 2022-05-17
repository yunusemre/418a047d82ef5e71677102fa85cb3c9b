import classNames from 'classnames';
import { IProduct } from '../../models';
import Thumbs from '../Thumbs';
import './ProductImages.scss';

const ProductImages = ({ variants, images, image, selectedImage, changeImage }: IProduct) => (
  <div className="product-photo-container">
    <div className="product-photo-container__showroom text-center">
      {
        <img
          className={`first-image ${classNames({
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
);

export default ProductImages;
