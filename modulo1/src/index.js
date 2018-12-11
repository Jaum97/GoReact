import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

class Button extends Component {
  render() {
    return <a href="#">Save</a>
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1> test </h1>
        <Button />
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
