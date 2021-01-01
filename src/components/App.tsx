import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

// rcc
class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{ todo.title }</div>
    })
  }

  render() {
    console.log(this.props.todos)
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
  return {todos: state.todos}
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)

