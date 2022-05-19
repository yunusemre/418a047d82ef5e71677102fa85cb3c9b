import { useState } from 'react'
import { Image, IProduct, Option, Variant } from '../../models'
import ProductImages from '../ProductImages'
import './Detail.scss'

const Detail = ({ title, body_html, image, images, options, variants, closeModal }: IProduct) => {
  const [selectedImage, setSelectedImage] = useState<string>(image.src)
  const [selectedPrice, setSelectedPrice] = useState<string>(variants[0].price)
  const [compareAtPrice, setCompareAtPrice] = useState<string>(variants[0].compare_at_price)

  const selectOptions = (val: string, name: string) => {
    const size: any = variants.find((vrnt: Variant) => vrnt.title.indexOf(val) > -1)
    if (name === 'Size') {
      setSelectedPrice(size.price)
      setCompareAtPrice(size.compare_at_price)
    }
    if (name === 'Color') {
      const dropdownImage: any = images.find((img: Image) => img.id === size.image_id)
      setSelectedImage(dropdownImage.src)
    }
  }
  return (
    <>
      <section className='modal'>
        <div className='modal__overlay' onClick={closeModal}></div>
        <div className='modal__dialog'>
          <div className='modal__dialog--header'>
            <span className='c-pointer' onClick={closeModal}>
              <img width='30' src='close.svg' alt='close' />
            </span>
          </div>
          <div className='modal__dialog--body'>
            <div className='photos'>
              <ProductImages
                variants={variants}
                images={images}
                image={image}
                selectedImage={selectedImage}
                changeImage={(selected: string) => setSelectedImage(selected)}
              />
            </div>
            <div className='modal-content'>
              <h3 className='modal-content__title'>{title}</h3>
              <h2 className='modal-content__price'>
                ${selectedPrice}
                {compareAtPrice && <span className='compare'>${compareAtPrice}</span>}
              </h2>
              {options.map((opt: Option) => (
                <div className='form-group' key={opt.id}>
                  <label>{opt.name}</label>
                  <select
                    className='select'
                    onChange={(e: any) => selectOptions(e.target.value, opt.name)}
                  >
                    {opt.values.map((val: string) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <hr />
              <div dangerouslySetInnerHTML={{ __html: body_html }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail
