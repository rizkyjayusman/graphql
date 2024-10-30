import React from 'react';
import { useTable } from 'react-table';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const EMPLOYEE_BY_ID = gql`
  query employeeById($id: ID!) {
    employeeById(id: $id) {
      name
    }
  }
`;


const EmployeeDetail = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(EMPLOYEE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.employeeById) return <p>No data available</p>;

  const { name } = data.employeeById;

  return (
    <div class="flex flex-col items-center">
      <h2>{name}</h2>
    </div>
  );
};

export default EmployeeDetail;