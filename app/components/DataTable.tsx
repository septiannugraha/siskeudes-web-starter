// components/DataTable.tsx
'use client'
// components/DataTable.tsx
import React, { useState, useMemo, useEffect } from 'react';

interface Column<T> {
  key: keyof T;
  header: string;
}

interface DataTableProps<T> {
  data: T[];
}

const formatColumnTitle = (key: string): string => {
  // Special case for "Id" at the end of the string
  if (key.endsWith('Id')) {
    key = key.slice(0, -2) + 'ID';
  }

  // Convert camelCase to space-separated words
  let formatted = key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
    .trim(); // Remove leading/trailing spaces

  // Special case to keep "ID" together
  formatted = formatted.replace(/ I D/g, ' ID');

  return formatted;
};

function DataTable<T extends Record<string, any>>({ data }: DataTableProps<T>) {
  const [columns, setColumns] = useState<Column<T>[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (data.length > 0) {
      const firstItem = data[0];
      const detectedColumns: Column<T>[] = Object.keys(firstItem).map((key) => ({
        key: key as keyof T,
        // header: key.charAt(0).toUpperCase() + key.slice(1),
        header: formatColumnTitle(key), // Use the new formatting function here
      }));
      setColumns(detectedColumns);
      setSortColumn(detectedColumns[0].key);
    }
  }, [data]);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (column: keyof T) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  if (data.length === 0) {
    return <div className="text-center py-4">No data available</div>;
  }

    const renderMobileView = () => (
    <div className="space-y-4">
      {paginatedData.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          {columns.map((column) => (
            <div key={column.key as string} className="flex justify-between py-1">
              <span className="font-medium">{column.header}:</span>
              <span>{item[column.key]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

    const renderDesktopView = () => (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key as string}
                  onClick={() => handleSort(column.key)}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                >
                  {column.header}
                  {sortColumn === column.key && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '▲' : '▼'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((item, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                {columns.map((column) => (
                  <td
                    key={column.key as string}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {item[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );


  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

         {/* Mobile view */}
      <div className="lg:hidden">
        {renderMobileView()}
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        {renderDesktopView()}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTable;