import axios from 'axios';
import { useState, useEffect } from 'react';
import StockItem from './StockItem';

const StocksList = () => {
  const [stockScans, setStockScans] = useState<any>([]);

  const getData = () => {
    axios.get("https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6")
    .then((res) => setStockScans(res.data.data))
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] container">
      <ul className="divide-y divide-gray-200">
        {
          stockScans.map((stockScan: any) => <StockItem key={stockScan.id} data={stockScan} />)
        }
      </ul>
    </div>
  );
}

export default StocksList;
