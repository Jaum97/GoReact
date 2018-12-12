import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  static defaultProps = {
    children: 'Save'
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  }

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>
  }
}
