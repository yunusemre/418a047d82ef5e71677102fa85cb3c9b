import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Loader from './components/Loader/Loader';
import { IProduct } from './models';
import useFetch from './service';

const Pagination = lazy(() => import('./components/Pagination'));
const ProductLists = lazy(() => import('./components/Lists'));

let PageSize: number = 10;

function App() {
  const { products, loading, error } = useFetch();

  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, setList] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return list.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, list]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setData(products);
    setList(products);
    setIsLoading(loading);
  }, [products, loading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentPage !== 1) setCurrentPage(1);
    const text: string = e.target.value;
    text !== ''
      ? setList(
          data.filter((res: IProduct) => res.title.toLowerCase().includes(text.toLowerCase()))
        )
      : setList(data);

    return data.filter((res: IProduct) => res.title.includes(text));
  };

  if (error) return <span>{error}</span>;
  return (
    <div className="container">
      <div className="app">
        <input
          className="form-control"
          type="search"
          placeholder="Search..."
          onChange={handleChange}
        />
        {!isLoading && list.length === 0 && <h4>Search result not found</h4>}
        <Suspense fallback={<Loader />}>
          <ProductLists data={currentTableData} />
          {list.length > 10 && (
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={list.length}
              pageSize={PageSize}
              onPageChange={(page: number) => {
                setCurrentPage(page);
                scrollTop();
              }}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
