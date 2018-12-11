import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    return (
      <a href="#" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    )
  }
}

Button.defaultProps = {
  children: 'Save'
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
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
