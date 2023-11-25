import { gql } from 'urql';

export const TodosQuery = gql`
  query {
    todos {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
