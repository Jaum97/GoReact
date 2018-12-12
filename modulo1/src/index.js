import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

class Button extends React.Component {
  static defaultProps = {
    children: 'Save'
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  }

  render() {
    return (
      <a href="#" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    )
  }
}

class App extends Component {
  handleClick() {
    window.alert('Button clicked')
  }

  render() {
    return (
      <Fragment>
        <h1> test </h1>
        <Button
          onClick={() => {
            window.alert('Button 1')
          }}
        />
        <br />
        <Button onClick={this.handleClick}>Send</Button>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
