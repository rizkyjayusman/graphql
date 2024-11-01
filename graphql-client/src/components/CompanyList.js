import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useTable } from 'react-table';

const GET_COMPANIES = gql`
  query {
    companies {
        id
        name
        address
    }
  }
`;


const CompanyList = () => {

  const { loading, error, data } = useQuery(GET_COMPANIES);

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Address', accessor: 'address' },
      {
        Header: 'Action',
        Cell: ({ row }) => (
          <a href={`/companies/${row.original.id}`} className="text-blue-500 hover:underline">Detail</a>
        ),
      },
    ],
    []
  );

  const tableData = data ? data.companies : [];
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: tableData,
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="m-5">Company List</h2>
      </div>
      <div>
        <table {...getTableProps()} className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="py-3 px-6 text-left">{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-gray-600 text-sm font-light">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-b border-gray-200 hover:bg-gray-100">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="py-3 px-6 text-left">{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;