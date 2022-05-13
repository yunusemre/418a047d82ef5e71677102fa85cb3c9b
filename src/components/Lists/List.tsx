import { IProduct } from '../../models';
import './List.scss';

const ProductList = (props: IProduct) => {
  const showDetails = () => {
    console.log(props);
  };
  return (
    <li className="product" onClick={showDetails}>
      <h4 className="product-title">
        <div className="title">{props.title}</div>
        <div className="price">{props.variants[0]?.price}</div>
      </h4>
    </li>
  );
};

export default ProductList;
