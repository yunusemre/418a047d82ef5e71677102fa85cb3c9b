import classNames from 'classnames'
import { Image, IThumbs, Variant } from '../../models'
import './Thumbs.scss'

const Thumbs = ({ variants, images, change }: IThumbs) => {
  return (
    <div className='product-thumbs'>
      {images.map((img: Image) =>
        img.variant_ids.length > 0 &&
        variants.map((vrnt: Variant) => img.variant_ids.includes(vrnt.id)) ? (
          <div
            className={`product-thumbs__items ${classNames({
              big: img.width > img.height,
            })}`}
            key={img.id}
          >
            <a
              href='#'
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault()
                change(img.src)
              }}
            >
              <img className='c-pointer item-image' src={img.src} alt={img.alt} />
            </a>
          </div>
        ) : null,
      )}
    </div>
  )
}

export default Thumbs
