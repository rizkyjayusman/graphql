import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_COMPANIES = gql`
  query {
    companies {
        id
        name
        address
        employees {
            id
            name
        }
    }
  }
`;

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_COMPANIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.companies.map((company) => (
          <li key={company.id}>
            {company.name} - {company.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;