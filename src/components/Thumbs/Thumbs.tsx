import classNames from 'classnames';
import { Image } from '../../models';
import './Thumbs.scss';

const Thumbs = ({ variants, images, change }: any) => {
  return (
    <div className="product-photo-thumbs">
      {images.map((img: Image) =>
        img.variant_ids.length > 0 &&
        variants.map((vrnt: any) => img.variant_ids.includes(vrnt.id)) ? (
          <a
            className={`product-photo-thumbs__item ${classNames({
              big: img.width > img.height,
            })}`}
            key={img.id}
            onClick={() => change(img.src)}>
            <img className="c-pointer item-image" src={img.src} alt={img.alt} />
          </a>
        ) : null
      )}
    </div>
  );
};

export default Thumbs;
