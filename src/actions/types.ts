import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos = 'fetchTodos',
  deleteTodo = 'deleteTodo'
}

export type Action = FetchTodosAction | DeleteTodoAction