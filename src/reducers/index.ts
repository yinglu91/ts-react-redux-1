import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { Todo } from '../actions'

// entire redux state
export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
})

// {
//   todos: [Todo, Todo, Todo]
// }