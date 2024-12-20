"use client";
import {ArrowDown, ArrowUp, CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight} from '@phosphor-icons/react';
import { useState } from 'react';

const SortableHeader = ({ label, sortKey, currentSortConfig, onSort }) => {
  const { key, direction } = currentSortConfig;

  const handleSort = () => {
    onSort(sortKey);
  };

  return (
    <td onClick={handleSort} className="p-4 cursor-pointer">
      <div className="flex justify-between items-center">
        {label}
        <span>
          {key === sortKey ? (
            direction === 'asc' ? (
              <ArrowUp size={16} />
            ) : (
              <ArrowDown size={16} />
            )
          ) : (
            <ArrowUp size={16} />
          )}
        </span>
      </div>
    </td>
  );
};

const OrdersTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const data = Array.from({ length: 100 }, (_, index) => ({
    product: `Product ${String.fromCharCode(65 + index)}`,
    date: `24 Apr 2024`,
    timeSpent: `${(Math.random() * 5).toFixed(0)}h ${(Math.random() * 60).toFixed(0)}m`,
    orderValue: `$${(Math.random() * 200).toFixed(2)}`,
    commission: `$${(Math.random() * 100).toFixed(2)}`,
  }));

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === null) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      let direction = 'asc';
      if (prev.key === key && prev.direction === 'asc') {
        direction = 'desc';
      }
      return { key, direction };
    });
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPageData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section>
      <h4 className="text-h4 my-12">Orders</h4>
      <div className="border rounded-[8px] overflow-clip border-[#DCDFE4]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]" style={{tableLayout: 'fixed'}}>
            <thead style={{background: '#f9fafb'}} className="text-left text-[#667085] border-[#DCDFE4] border-b">
            <tr>
              <SortableHeader
                label="Product"
                sortKey="product"
                currentSortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                label="Date"
                sortKey="date"
                currentSortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                label="Time Spent"
                sortKey="timeSpent"
                currentSortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                label="Order Value"
                sortKey="orderValue"
                currentSortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                label="Commission"
                sortKey="commission"
                currentSortConfig={sortConfig}
                onSort={handleSort}
              />
              <td className="p-4"></td>
            </tr>
            </thead>

            <tbody className="text-[#212636]">
            {currentPageData.map((row, index) => (
              <tr key={index} className="[&>td]:p-4">
                <td>{row.product}</td>
                <td>
                  <span className='block'>
                    <p>{row.date}</p>
                    <p className="text-[12px]">10:24 AM</p>
                  </span>
                </td>
                <td>{row.timeSpent}</td>
                <td>{row.orderValue}</td>
                <td className="font-bold">{row.commission}</td>
                <td className="text-end text-[#8A94A6]">View Chat</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

      </div>
      <div className="flex justify-center items-center gap-2 p-4">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={`px-2 py-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#134E48]'}  rounded-md`}
        >
          <CaretDoubleLeft color="#ffffff" weight="bold" width={20} height={20}/>

        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#134E48]'}  rounded-md`}
        >
          <CaretLeft color="#ffffff" weight="bold" width={20} height={20}/>

        </button>

        <span>
            Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-[#134E48]'}  rounded-md`}
        >
          <CaretRight color="#ffffff" weight="bold" width={20} height={20}/>
        </button>

        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-2 py-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-[#134E48]'}  rounded-md`}
        >
          <CaretDoubleRight color="#ffffff" weight="bold" width={20} height={20}/>
        </button>

      </div>
    </section>
  );
};

export default OrdersTable;
