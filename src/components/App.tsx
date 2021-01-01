import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

// rafce
const App: React.FC = () => {
  const [fetching, setFetching] = useState(false)

  const todos = useSelector<StoreState, Todo[]>((state) => state.todos);
  const dispatch = useDispatch();
  
  const onButtonClick = (): void => {
    dispatch(fetchTodos())
    setFetching(true)
  }

  const onTodoClick = (id: number): void => {
    dispatch(deleteTodo(id))
  }

  useEffect(() => {
    if (todos.length > 0) {
      setFetching(false)
    }
  }, [todos])

  return (
    <div>
      <button onClick={() => onButtonClick()}>Fetch</button>
      {fetching ? 'LOADING...': ''}

      {
        todos.map((todo: Todo) => (
          <div onClick={() => onTodoClick(todo.id)} key={todo.id}>{ todo.title }</div>
        ))
      }
    </div>
  )
}

export default App

// https://codersera.com/blog/react-redux-hooks-with-typescript/
