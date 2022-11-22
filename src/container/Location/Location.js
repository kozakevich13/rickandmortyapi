import React, { useEffect, useState } from 'react';

//compontents
import Filters from './../../components/Filters/Filters';
import Cards from './../../components/Cards/Cards';
import Pagination from './../../components/Pagination/Pagination';
// import SearchBar from './../../components/SearchBar/SearchBar';

const Location = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [rmData, setRmdata] = useState([]);
  const [errormsg, setErrormsg] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${searchKeyword}`;
  const { info, results } = rmData;

  async function getRickNortyHandler() {
    try {
      setisLoading(true);
      const response = await fetch(api);
      if (!response.ok) {
        // throw new error('somthing went worng');
      }
      const data = await response.json();

      if (!data) {
        // throw new error('no data');
      } else {
        setErrormsg('');
        setRmdata(data);
      }
    } catch (error) {
      setRmdata([]);
      setErrormsg('error');
    }
    setisLoading(false);
  }

  useEffect(() => {
    getRickNortyHandler();
  }, [api]);
  return (
    <>
      <div className="row text-center">
        {/* <SearchBar setSearchKeyword={setSearchKeyword} /> */}
      </div>
      <div className="row">
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-9 d-flex flex-wrap">
          {isLoading && <p>Loading</p>}
          {!isLoading && errormsg && <p>{errormsg}</p>}
          {!isLoading &&
            results &&
            results.length > 0 &&
            results.map((res) => {
              return <Cards res={res} />;
            })}
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </>
  );
};

export default Location;
