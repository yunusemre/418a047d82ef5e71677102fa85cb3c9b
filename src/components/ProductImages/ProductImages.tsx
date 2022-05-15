import classNames from 'classnames';
import Thumbs from '../Thumbs';
import './ProductImages.scss';

const ProductImages = ({ variants, images, image, selectedImage, setSelectedImage }: any) => (
  <div className="product-photo-container">
    <div className="product-photo-container__showroom text-center">
      {
        <img
          className={`first-image ${classNames({
            ['big']: image.width > image.height,
          })}`}
          key={image.id}
          src={selectedImage}
          alt={image.alt}
        />
      }
    </div>
    <Thumbs
      variants={variants}
      change={(newImage: string) => setSelectedImage(newImage)}
      images={images}
    />
  </div>
);

export default ProductImages;
