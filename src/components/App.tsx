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
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    console.log(this.props.todos)
    return (
      <div>
        hi there
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
  return {todos: state.todos}
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)

