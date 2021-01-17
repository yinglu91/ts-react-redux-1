import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

// rafce
const App: React.FC = () => {
  const todos = useSelector<StoreState, Todo[]>((state) => state.todos)
  
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(fetchTodos())}>Fetch</button>

      {
        todos.map((todo: Todo) => (
          <div id={todo.id.toString()} key={todo.id}
            onClick={() => dispatch(deleteTodo(todo.id))}>
              {todo.title}
          </div>
        ))
      }
    </div>
  )
}

export default App

// https://codersera.com/blog/react-redux-hooks-with-typescript/
