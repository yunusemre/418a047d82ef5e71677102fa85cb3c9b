import { lazy } from 'react';
import { IProduct } from '../../models';
import './Lists.scss';

const ProductList = lazy(() => import('../List'));

const ProductLists = ({ data }: { data: IProduct[] }) => (
  <ul className="products">
    {data.map((response: IProduct) => (
      <ProductList key={response.id} {...response} />
    ))}
  </ul>
);

export default ProductLists;
