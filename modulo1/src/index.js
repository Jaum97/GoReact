import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import Button from './Button'

class App extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    // callback function executes only after state has resolved
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log('Test')
    })

    // this state refers to the current pile state
    this.setState(state => ({ counter: state.counter + 1 }))
  }

  render() {
    return (
      <Fragment>
        <h1> {this.state.counter} </h1>
        <br />
        <Button onClick={this.handleClick}> Add </Button>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
