import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { IProduct, IRootObject } from './models';
import { API, requestOptions } from './service';

const Pagination = lazy(() => import('./components/Pagination'));
const ProductList = lazy(() => import('./components/Lists'));

let PageSize: number = 10;

function App() {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, setList] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    const response: Response = await fetch(API, requestOptions);
    const responseData: IRootObject = await response.json();

    setData(responseData.products);
    setList(responseData.products);
    setIsLoading(false);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return list.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, list]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = ({ target }: { target: any }) => {
    if (currentPage !== 1) setCurrentPage(1);
    if (target.value !== '') {
      const results = data.filter((res: any) =>
        res.title.toLowerCase().includes(target.value.toLowerCase())
      );
      setList(results);
    } else {
      setList(data);
    }

    return data.filter((res) => res.title.includes(target.value));
  };

  return (
    <div className="container">
      <div className="app">
        <input
          className="form-control"
          type="search"
          placeholder="Search list..."
          onChange={handleChange}
        />
        <div className="loader">{!isLoading && list.length === 0 && <span>Bulamadım</span>}</div>
        <Suspense fallback={<span>Loading lists...</span>}>
          <ul className="list-group">
            {currentTableData.map((response: IProduct) => (
              <ProductList key={response.id} {...response} />
            ))}
          </ul>
        </Suspense>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={list.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default App;
