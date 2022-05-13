import { useState } from 'react';
import { IProduct } from '../../models';
import Detail from '../Detail';
import './List.scss';

const ProductList = (props: IProduct) => {
  const [showModal, setShowModal] = useState(false);

  const toggleDetails = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li className="product c-pointer" onClick={toggleDetails}>
        <img className="product-image" src={props.image.src} alt={props.title} />
        <section className="product-content">
          <p className="product-content__title">
            <strong>{props.title}</strong>
          </p>
          <span className="product-content__price">{props.variants[0]?.price}</span>
        </section>
      </li>
      {showModal && <Detail {...props} closeModal={toggleDetails} />}
    </>
  );
};

export default ProductList;
