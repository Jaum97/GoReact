import React, { Component, Fragment } from "react";

export default class Main extends Component {
  state = {
    repositoryInput: ""
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>facebook/react</strong> (A declarative, efficient, and
              flexible JavaScript library for building user interfaces. )
            </p>
            <a href="https://reactjs.org/">Acessar</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
