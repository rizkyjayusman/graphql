import React from 'react';
import { useTable } from 'react-table';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const COMPANY_BY_ID = gql`
  query companyById($id: ID!) {
    companyById(id: $id) {
      name
      address
      employees {
        id
        name
      }
    }
  }
`;

const CompanyDetail = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(COMPANY_BY_ID, {
    variables: { id },
  });

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      {
        Header: 'Action',
        Cell: ({ row }) => (
          <a href={`/employees/${row.original.id}`} className="text-blue-500 hover:underline">Detail</a>
        ),
      },
    ],
    []
  );

  const tableData = data?.companyById?.employees || [];
  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: tableData,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.companyById) return <p>No data available</p>;

  const { name, address } = data.companyById;
  
  return (
    <div className="flex flex-col items-center">
      <div className="m-5 text-center">
        <h2>{name}</h2>
        <p>{address ?? '-'}</p>
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
                <tr {...row.getRowProps({ key: row.original.id })} className="border-b border-gray-200 hover:bg-gray-100">
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

export default CompanyDetail;