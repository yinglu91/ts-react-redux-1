import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

// rcc
class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {fetching: false}
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({fetching: false})
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos()
    this.setState({fetching: true})
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{ todo.title }</div>
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING': ''}
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
  return {todos: state.todos}
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)

