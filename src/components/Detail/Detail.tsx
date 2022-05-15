import { useState } from 'react';
import { Image, Option } from '../../models';
import ProductImages from '../ProductImages';
import './Detail.scss';

const Detail = ({ title, body_html, image, images, options, variants, closeModal }: any) => {
  const [selectedImage, setSelectedImage] = useState(image.src);
  const [selectedPrice, setSelectedPrice] = useState(variants[0].price);
  const [compareAtPrice, setCompareAtPrice] = useState(variants[0].compare_at_price);

  const selectOptions = (e: any, type: any) => {
    if (type.name === 'Size') {
      const size = variants.find((vrnt: any) => vrnt.title.indexOf(e.target.value) > -1);
      setSelectedPrice(size.price);
      setCompareAtPrice(size.compare_at_price);
    }
    if (type.name === 'Color') {
      const size = variants.find((vrnt: any) => vrnt.title.indexOf(e.target.value) > -1);
      const dropdownImage: Image = images.find((img: any) => img.id === size.image_id);
      setSelectedImage(dropdownImage.src);
    }
  };
  return (
    <>
      <section className="detail-modal">
        <div className="detail-modal-overlay" onClick={closeModal}></div>
        <div className="detail-modal-dialog">
          <div className="detail-modal-header">
            <span className="c-pointer" onClick={closeModal}>
              x
            </span>
          </div>
          <div className="detail-modal-body">
            <div className="detail-modal-body-slider">
              <ProductImages
                variants={variants}
                images={images}
                image={image}
                selectedImage={selectedImage}
                setSelectedImage={(e: any) => setSelectedImage(e)}
              />
            </div>
            <div className="detail-modal-body-content">
              <h3 className="detail-modal-body-content__title">{title}</h3>
              <h2 className="detail-modal-body-content__price">
                ${selectedPrice}
                {compareAtPrice && <span className="compare">${compareAtPrice}</span>}
              </h2>
              {options.map((opt: Option) => (
                <div className="form-group" key={opt.id}>
                  <label>{opt.name}</label>
                  <select className="select" onChange={(e: any) => selectOptions(e, opt)}>
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
  );
};

export default Detail;
