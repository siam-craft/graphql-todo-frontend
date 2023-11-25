export const CREATE_TODO_MUTATION = `
  mutation CreateTodo($title: String!) {
    createTodo(data: {title: $title}) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export const DELETE_TODO_MUTATION = `
mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id){
    data{
      id
    }
  }
}
`;

export const UPDATE_TODO_MUTATION = `
  mutation UpdateTodo($id: ID!, $title: String!) {
    updateTodo(id: $id, data: {title: $title}) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
